import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function InteractiveHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isMounted = true;
    const container = containerRef.current;

    // Ensure container is clean
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create Canvas Dynamically to avoid context conflicts
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.7';
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch (e) {
      console.error("WebGL Initialization failed", e);
      return;
    }

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    updateSize();

    // Create a 3D Network
    const count = 100; // Reduced for performance
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      points.push(new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.PointsMaterial({
      size: 0.15,
      color: '#3A5CCC',
      transparent: true,
      opacity: 0.6, // Lowered opacity
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Blue glow particles
    const bluePoints: THREE.Vector3[] = [];
    for (let i = 0; i < 15; i++) { // Reduced count
      bluePoints.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ));
    }
    const blueGeo = new THREE.BufferGeometry().setFromPoints(bluePoints);
    const blueMat = new THREE.PointsMaterial({
      size: 0.3,
      color: '#0057FF',
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const blueParticles = new THREE.Points(blueGeo, blueMat);
    scene.add(blueParticles);

    // Lines - Pre-allocate Buffer
    const maxLines = 400; // Cap max lines for performance
    const linePositions = new Float32Array(maxLines * 2 * 3);
    const linesGeometry = new THREE.BufferGeometry();
    const linePositionAttr = new THREE.BufferAttribute(linePositions, 3);
    linePositionAttr.setUsage(THREE.DynamicDrawUsage);
    linesGeometry.setAttribute('position', linePositionAttr);
    
    const linesMaterial = new THREE.LineBasicMaterial({ 
      color: '#3A5CCC', 
      transparent: true, 
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);

    camera.position.z = 8;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateSize);

    let animationFrameId: number;

    const animate = () => {
      if (!isMounted) return;
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y += 0.0004;
      blueParticles.rotation.y -= 0.0001;

      scene.rotation.y = targetX * 0.4;
      scene.rotation.x = -targetY * 0.4;

      // Update Lines - Optimized distance checks
      const positions = particles.geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      const thresholdSq = 12; // Adjusted

      for (let i = 0; i < count; i++) {
        if (lineIndex >= maxLines) break;
        const ix = positions[i * 3];
        const iy = positions[i * 3 + 1];
        const iz = positions[i * 3 + 2];

        // Only check a subset of particles for connections to save CPU
        for (let j = i + 1; j < count; j++) {
          if (lineIndex >= maxLines) break;

          const dx = ix - positions[j * 3];
          const dy = iy - positions[j * 3 + 1];
          const dz = iz - positions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < thresholdSq) {
            linePositions[lineIndex * 6] = ix;
            linePositions[lineIndex * 6 + 1] = iy;
            linePositions[lineIndex * 6 + 2] = iz;
            linePositions[lineIndex * 6 + 3] = positions[j * 3];
            linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
            linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];
            lineIndex++;
          }
        }
      }

      linePositionAttr.needsUpdate = true;
      linesGeometry.setDrawRange(0, lineIndex * 2);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateSize);
      
      // Cleanup
      scene.clear();
      geometry.dispose();
      material.dispose();
      blueGeo.dispose();
      blueMat.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
      
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none opacity-60"
    />
  );
}
