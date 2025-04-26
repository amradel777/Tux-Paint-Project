"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    children: ReactNode;
    color?: string;
    center?: boolean;
    className?: string;
}

const SectionTitle = ({
    children,
    color = "from-[#FF8A65]",
    center = true,
    className = ""
}: SectionTitleProps) => {
    return (
        <div className={`${center ? 'text-center' : ''} mb-8 ${className}`}>
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-[#424242] inline-block relative px-2 py-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
                {/* Enhanced gradient line beneath the title */}
                <motion.span
                    className={`absolute bottom-0 right-0 left-0 h-2 bg-gradient-to-l ${color} to-transparent rounded-full shadow-[0_0_8px_rgba(255,138,101,0.4)]`}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
                {/* Subtle glow effect behind text */}
                <motion.span
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-${color.replace('from-', '')} to-transparent opacity-5 blur-xl rounded-lg -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
            </motion.h2>
        </div>
    );
};

export default SectionTitle; 