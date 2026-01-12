
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Hide cursor on touch devices
    if (!cursor || window.matchMedia("(hover: none)").matches) return;

    // Movement logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Hover logic
    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role='button'], .cursor-pointer");

      if (isClickable) {
        gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power2.out", opacity: 0.5 });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", onHover);
    };
  }, []);

  return (
    <>
      <style>{`
        body { cursor: none; }
        a, button, [role='button'] { cursor: none; }
        @media (hover: none) {
          body { cursor: auto; }
          .custom-cursor { display: none; }
        }
      `}</style>
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary bg-primary/20 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
}
