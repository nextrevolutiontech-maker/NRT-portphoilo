"use client";
import { useEffect, useRef } from "react";

export const DigitalStream = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setCanvasSize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            canvas.width = Math.max(1, Math.floor(rect.width * dpr));
            canvas.height = Math.max(1, Math.floor(rect.height * dpr));
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        setCanvasSize();

        let columns = Math.ceil(canvas.clientWidth / 24);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random positions above
        }

        const chars = "01010101010101ABCDEFXYZ";
        let isVisible = true;
        let frameId = 0;
        let lastDraw = 0;

        const draw = (time: number) => {
            if (!isVisible) {
                frameId = requestAnimationFrame(draw);
                return;
            }

            if (time - lastDraw < 80) {
                frameId = requestAnimationFrame(draw);
                return;
            }

            lastDraw = time;
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Fade effect (Light mode)
            ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            ctx.font = "18px 'Space Mono', monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Random colors for a "glitch" effect
                const randomColor = Math.random();
                if (randomColor > 0.95) ctx.fillStyle = "#ec4899"; // Pink
                else if (randomColor > 0.9) ctx.fillStyle = "#22d3ee"; // Cyan
                else ctx.fillStyle = "#FF7E00"; // Orange (Primary)

                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.clientHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }

            frameId = requestAnimationFrame(draw);
        };

        frameId = requestAnimationFrame(draw);

        const handleResize = () => {
            setCanvasSize();
            columns = Math.ceil(canvas.clientWidth / 24);
            drops.length = columns;
            for (let i = 0; i < columns; i++) {
                drops[i] = drops[i] ?? Math.random() * -100;
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0 }
        );

        observer.observe(canvas);
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
    );
};
