import { useEffect, useRef } from "react";

export const DigitalStream = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = Math.ceil(canvas.width / 20);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random positions above
        }

        const chars = "01010101010101ABCDEFXYZ";

        const draw = () => {
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Fade effect (Light mode)
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = "18px 'Space Mono', monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Random colors for a "glitch" effect
                const randomColor = Math.random();
                if (randomColor > 0.95) ctx.fillStyle = "#ec4899"; // Pink
                else if (randomColor > 0.9) ctx.fillStyle = "#22d3ee"; // Cyan
                else ctx.fillStyle = "#FF7E00"; // Orange (Primary)

                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
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
