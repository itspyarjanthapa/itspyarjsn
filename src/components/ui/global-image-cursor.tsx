import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const GlobalImageCursor = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth springs for position
    const springConfig = { damping: 20, stiffness: 300 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    const rotateX = useTransform(smoothY, (value) => {
        const diff = value - cursorY.get();
        return Math.min(Math.max(diff / 5, -15), 15);
    });

    const rotateY = useTransform(smoothX, (value) => {
        const diff = value - cursorX.get();
        return Math.min(Math.max(-diff / 5, -15), 15);
    });

    // Track opacity to avoid initial flicker
    const isVisible = activeImage !== null;

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Offset cursor: 20px right, 20px down from pointer
            cursorX.set(e.clientX + 20);
            cursorY.set(e.clientY + 20);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                const img = target as HTMLImageElement;

                // Filter out small icons/pixels
                if (img.src && img.width > 40 && img.height > 40) {
                    const rect = img.getBoundingClientRect();
                    setSourceRect(rect);
                    setActiveImage(img.src);
                    // Set initial values to prevent "flying in" from 0,0 if not animating layout
                    // But here we want to AnimatePresence from source rect.
                }
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                setActiveImage(null);
                setSourceRect(null);
            }
        };

        // Use capture=true for more reliable event handling if events are stopped elsewhere
        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        window.addEventListener("mouseout", handleMouseOut, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [cursorX, cursorY]);

    return (
        <AnimatePresence>
            {isVisible && activeImage && (
                <motion.div
                    key="cursor-popup"
                    className="fixed z-[100] pointer-events-none perspective-1000"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: sourceRect ? sourceRect.left + sourceRect.width / 2 : 0,
                        y: sourceRect ? sourceRect.top + sourceRect.height / 2 : 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: smoothX, // Framer motion will handle the motion value subscription
                        y: smoothY,
                        transition: { type: "spring", damping: 20, stiffness: 300 }
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.2 }
                    }}
                    style={{
                        translateX: "-0%", // Align top-left to pointer to match offset logic
                        translateY: "-0%",
                        rotateX,
                        rotateY,
                    }}
                >
                    <motion.div
                        className="relative w-72 md:w-96 h-auto bg-background/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-border/50"
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: "800px",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)"
                        }}
                    >
                        <img
                            src={activeImage}
                            alt="Preview"
                            className="w-full h-full object-contain max-h-[50vh]"
                        />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 mix-blend-overlay" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GlobalImageCursor;
