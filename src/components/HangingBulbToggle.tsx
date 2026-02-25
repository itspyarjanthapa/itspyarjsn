"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const HangingBulbToggle = () => {
    const { theme, setTheme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragY = useMotionValue(0);
    const controls = useAnimation();

    // Transform drag distance to physics-like behavior
    const stringHeight = useTransform(dragY, [0, 100], [60, 160]);
    const bulbOpacity = useTransform(dragY, [0, 80], [1, 0.4]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleDragStart = () => {
        setIsDragging(true);
        setIsHovered(false);
    };

    const handleDragEnd = async (_: any, info: any) => {
        setIsDragging(false);
        if (info.offset.y > 50) {
            toggleTheme();
            // Snap back animation
            await controls.start({ y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
        } else {
            await controls.start({ y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } });
        }
        dragY.set(0);
    };

    return (
        <div className="fixed top-0 right-12 z-[250] flex flex-col items-center pointer-events-none">
            {/* The Hanging String/Wire */}
            <motion.div
                style={{ height: stringHeight }}
                className="w-[2px] bg-foreground/30 origin-top shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            />

            {/* The Lamp Handle */}
            <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 100 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={controls}
                onHoverStart={() => !isDragging && setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ y: dragY }}
                className="relative flex flex-col items-center cursor-grab active:cursor-grabbing pointer-events-auto"
            >
                {/* Modern Lamp Shape SVG */}
                <svg
                    width="60"
                    height="70"
                    viewBox="0 0 60 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                        "transition-colors duration-500 drop-shadow-2xl",
                        theme === "dark" ? "text-foreground/20" : "text-yellow-400"
                    )}
                >
                    {/* Lamp Cap */}
                    <path
                        d="M20 0H40V10H20V0Z"
                        fill="currentColor"
                        className="opacity-40"
                    />
                    {/* Lamp Body/Shade */}
                    <path
                        d="M10 10C10 10 0 45 5 55C10 65 50 65 55 55C60 45 50 10 50 10H10Z"
                        fill="currentColor"
                        className={cn(
                            "transition-opacity duration-300",
                            theme === "dark" ? "opacity-30" : "opacity-100"
                        )}
                    />
                    {/* Bottom Rim */}
                    <path
                        d="M5 55C5 55 10 60 30 60C50 60 55 55 55 55"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="opacity-50"
                    />
                    {/* Inner Glow (Bulb inside) */}
                    <circle
                        cx="30"
                        cy="40"
                        r="12"
                        fill="#fff"
                        className={cn(
                            "transition-all duration-500 blur-[4px]",
                            theme === "dark" ? "opacity-0 scale-50" : "opacity-80 scale-100"
                        )}
                    />
                </svg>

                {/* Pull Me Tooltip */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                        opacity: isHovered && !isDragging ? 1 : 0,
                        y: isHovered && !isDragging ? 15 : 0
                    }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-lg"
                >
                    Pull me
                </motion.div>
            </motion.div>

            {/* Glow effect at the bottom of the lamp */}
            <div
                className={cn(
                    "absolute w-[200px] h-[200px] blur-[80px] rounded-full -z-10 transition-all duration-1000 transform -translate-x-1/2 left-1/2",
                    theme === "dark" ? "bg-transparent opacity-0" : "bg-yellow-400/30 opacity-100"
                )}
                style={{ top: `${stringHeight.get() + 30}px` }}
            />
        </div>
    );
};

export default HangingBulbToggle;
