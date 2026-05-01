import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

interface HoverModalProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
}

export function HoverModal({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  title,
  description,
  children,
  position = "bottom",
  align = "end",
  className = "",
}: HoverModalProps) {
  const getPositionClasses = () => {
    const positions = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2",
      right: "left-full ml-2",
    };
    return positions[position];
  };

  const getAlignClasses = () => {
    const aligns = {
      start: position === "bottom" || position === "top" ? "left-0" : "top-0",
      center: position === "bottom" || position === "top" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2",
      end: position === "bottom" || position === "top" ? "right-0" : "bottom-0",
    };
    return aligns[align];
  };

  const getArrowPosition = () => {
    const arrows = {
      top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
      bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45",
      left: "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45",
      right: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45",
    };
    return arrows[position];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: position === "bottom" ? -10 : position === "top" ? 10 : 0, x: position === "right" ? -10 : position === "left" ? 10 : 0, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: position === "bottom" ? -10 : position === "top" ? 10 : 0, x: position === "right" ? -10 : position === "left" ? 10 : 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`absolute ${getPositionClasses()} ${getAlignClasses()} w-64 bg-background border border-border rounded-lg shadow-xl p-4 z-[9999] pointer-events-auto ${className}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{ pointerEvents: 'auto', isolation: 'isolate' }}
        >
          {children || (
            <div className="space-y-2">
              {title && <h3 className="font-semibold text-foreground text-sm">{title}</h3>}
              {description && <p className="text-xs text-muted-foreground">{description}</p>}
            </div>
          )}
          {/* Arrow pointing to trigger element */}
          <div className={`absolute ${getArrowPosition()} w-4 h-4 bg-background border-l border-t border-border`}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

