
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Refresh ScrollTrigger on resize or component mount to ensure positions are correct
        ScrollTrigger.refresh();
    }, []);

    return <>{children}</>;
}
