import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function InteractiveHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isMounted = true;
    let isIntersecting = true;
    const container = containerRef.current;

    // Clear previous canvases to avoid multiple WebGL contexts
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.55';
    container.appendChild(canvas);

    // Three.js Core Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch (e) {
      console.error("WebGL initialization failed:", e);
      return;
    }

    // Detect mobile device to apply performance limits
    const isMobile = window.innerWidth < 768;

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    };

    updateSize();
    camera.position.z = 10;

    // Define 3D Node Modules (Positions & Shapes)
    const nodesData = [
      { id: "SaaS", name: "SaaS Engine", pos: new THREE.Vector3(-3.5, 2, 0), color: 0x14B8A6, type: "cube" },
      { id: "ERP", name: "ERP Database", pos: new THREE.Vector3(3.2, -1.8, -1), color: 0x8B5CF6, type: "cylinder" },
      { id: "AI", name: "AI Brain Core", pos: new THREE.Vector3(0, 3, -2), color: 0x10B981, type: "sphere" },
      { id: "API", name: "API Gateway", pos: new THREE.Vector3(-2.8, -2.5, 0), color: 0x3B82F6, type: "torus" },
      { id: "Cloud", name: "Cloud System", pos: new THREE.Vector3(3.5, 2.2, -2.5), color: 0xF97316, type: "saturn" }
    ];

    const group = new THREE.Group();
    scene.add(group);

    const meshes: THREE.Object3D[] = [];
    const pointsMap: Record<string, THREE.Vector3> = {};

    // Generate Visual 3D Meshes for each software module node
    nodesData.forEach(n => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(n.pos);
      group.add(nodeGroup);
      meshes.push(nodeGroup);
      pointsMap[n.id] = n.pos;

      // Base Materials
      const meshMat = new THREE.MeshBasicMaterial({ 
        color: n.color, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.25 
      });
      const coreMat = new THREE.MeshBasicMaterial({ 
        color: n.color, 
        transparent: true, 
        opacity: 0.7 
      });

      if (isMobile) {
        // Fast representation on mobile (simple small spheres)
        const geo = new THREE.SphereGeometry(0.2, 8, 8);
        const core = new THREE.Mesh(geo, coreMat);
        nodeGroup.add(core);
      } else {
        // Premium 3D geometry representation on Desktop
        if (n.type === "cube") {
          const geo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
          const wire = new THREE.Mesh(geo, meshMat);
          const core = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), coreMat);
          nodeGroup.add(wire, core);
        } else if (n.type === "cylinder") {
          // Database disks stack representation
          const diskGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.12, 10);
          for (let i = 0; i < 3; i++) {
            const disk = new THREE.Mesh(diskGeo, meshMat);
            disk.position.y = (i - 1) * 0.25;
            nodeGroup.add(disk);
          }
          const core = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.75, 8), coreMat);
          nodeGroup.add(core);
        } else if (n.type === "sphere") {
          const geo = new THREE.SphereGeometry(0.35, 12, 12);
          const wire = new THREE.Mesh(geo, meshMat);
          const core = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), coreMat);
          nodeGroup.add(wire, core);
        } else if (n.type === "torus") {
          const geo = new THREE.TorusGeometry(0.3, 0.08, 6, 16);
          const wire = new THREE.Mesh(geo, meshMat);
          nodeGroup.add(wire);
        } else if (n.type === "saturn") {
          // Sphere with a surrounding ring
          const core = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 10), coreMat);
          const ringGeo = new THREE.RingGeometry(0.35, 0.45, 16);
          const ringMat = new THREE.MeshBasicMaterial({ color: n.color, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
          const ring = new THREE.Mesh(ringGeo, ringMat);
          ring.rotation.x = Math.PI / 2.5;
          nodeGroup.add(core, ring);
        }
      }
    });

    // Create Connection Lines (API / Data Pathways)
    const connections = [
      { from: "SaaS", to: "AI" },
      { from: "AI", to: "ERP" },
      { from: "ERP", to: "API" },
      { from: "API", to: "SaaS" },
      { from: "Cloud", to: "AI" },
      { from: "Cloud", to: "ERP" }
    ];

    const linesGroup = new THREE.Group();
    group.add(linesGroup);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3A5CCC,
      transparent: true,
      opacity: 0.15
    });

    connections.forEach(conn => {
      const pStart = pointsMap[conn.from];
      const pEnd = pointsMap[conn.to];
      if (pStart && pEnd) {
        const lineGeo = new THREE.BufferGeometry().setFromPoints([pStart, pEnd]);
        const line = new THREE.Line(lineGeo, lineMat);
        linesGroup.add(line);
      }
    });

    // Animate Flowing Data Packets (Photons)
    const packetsCount = isMobile ? 6 : 12;
    const packets: { 
      from: THREE.Vector3; 
      to: THREE.Vector3; 
      progress: number; 
      speed: number; 
      mesh: THREE.Mesh 
    }[] = [];

    const packetMat = new THREE.MeshBasicMaterial({ 
      color: 0x14B8A6, 
      transparent: true, 
      opacity: 0.9 
    });
    const packetGeo = new THREE.SphereGeometry(0.08, 6, 6);

    for (let i = 0; i < packetsCount; i++) {
      const conn = connections[i % connections.length];
      const pStart = pointsMap[conn.from];
      const pEnd = pointsMap[conn.to];
      
      if (pStart && pEnd) {
        const packetMesh = new THREE.Mesh(packetGeo, packetMat);
        group.add(packetMesh);
        
        packets.push({
          from: pStart,
          to: pEnd,
          progress: Math.random(), // Stagger starts
          speed: 0.005 + Math.random() * 0.008,
          mesh: packetMesh
        });
      }
    }

    // Ambient background particle dust (glowing stars)
    const starsCount = isMobile ? 30 : 70;
    const starsPoints: THREE.Vector3[] = [];
    for (let i = 0; i < starsCount; i++) {
      starsPoints.push(new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10
      ));
    }
    const starsGeo = new THREE.BufferGeometry().setFromPoints(starsPoints);
    const starsMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x3A5CCC,
      transparent: true,
      opacity: 0.4
    });
    const stars = new THREE.Points(starsGeo, starsMat);
    group.add(stars);

    // Mouse Tracking Parallax Setup
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    // Intersection Observer to pause rendering when scrolled out of view (Lighthouse Optimization)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isIntersecting = entry.isIntersecting;
      });
    }, { threshold: 0.05 });

    observer.observe(container);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateSize);

    let animationFrameId: number;

    // 60FPS WebGL Render Loop
    const animate = () => {
      if (!isMounted) return;
      animationFrameId = requestAnimationFrame(animate);

      // Only perform compute and draw calls if hero canvas is currently visible
      if (isIntersecting) {
        // Smooth cursor inertia tracking
        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        // Apply Parallax Rotations
        group.rotation.y = targetX * 0.35;
        group.rotation.x = -targetY * 0.25;

        // Spin individual node meshes locally
        meshes.forEach((m, idx) => {
          m.rotation.y += 0.01 + (idx * 0.005);
          m.rotation.x += 0.005;
        });

        // Rotate background dust
        stars.rotation.y += 0.0003;

        // Animate dynamic data packets along path segments
        packets.forEach(p => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0; // Loop packet
          }
          // Linear interpolation between nodes
          p.mesh.position.lerpVectors(p.from, p.to, p.progress);
          
          // Hover pulse effect
          const scale = 1 + Math.sin(p.progress * Math.PI) * 0.4;
          p.mesh.scale.set(scale, scale, scale);
        });

        renderer.render(scene, camera);
      }
    };

    animate();

    // Memory cleanups on unmount
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateSize);
      observer.disconnect();
      
      scene.clear();
      starsGeo.dispose();
      starsMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      lineMat.dispose();
      renderer.dispose();
      
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none"
    />
  );
}
