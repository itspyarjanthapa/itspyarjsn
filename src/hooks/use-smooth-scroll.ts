import { useCallback } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollToPlugin);
}

export const useSmoothScroll = () => {
    const scrollTo = useCallback((targetId: string, offset: number = 0) => {
        if (targetId === "#") {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: 0 },
                ease: "power4.inOut",
            });
            return;
        }

        const target = document.querySelector(targetId);
        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: target, offsetY: offset },
                ease: "power4.inOut",
            });
        }
    }, []);

    return scrollTo;
};
