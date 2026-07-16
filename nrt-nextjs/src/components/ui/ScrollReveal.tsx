"use client";
import { motion, useInView, useAnimation, Variant } from "motion/react";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  width = "100%",
  direction = "up",
  delay = 0.2,
  duration = 0.8,
  distance = 50,
  className = "",
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: "some" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else if (!once) {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, once]);

  const variants: { hidden: Variant; visible: Variant } = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for premium feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
