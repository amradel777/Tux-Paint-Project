"use client";

import { motion } from 'framer-motion';

interface GradientDividerProps {
    className?: string;
    direction?: 'left-to-right' | 'right-to-left' | 'center';
    color?: 'primary' | 'secondary' | 'accent' | 'custom';
    customColors?: string;
    height?: 'thin' | 'medium' | 'thick';
    animated?: boolean;
}

const GradientDivider = ({
    className = '',
    direction = 'left-to-right',
    color = 'primary',
    customColors = '',
    height = 'thin',
    animated = true
}: GradientDividerProps) => {
    // تحديد سمك الخط
    const heightClass = {
        thin: 'h-px',
        medium: 'h-0.5',
        thick: 'h-1'
    }[height];

    // تحديد اتجاه التدرج
    let gradientDirection = '';
    switch (direction) {
        case 'left-to-right':
            gradientDirection = 'bg-gradient-to-l';
            break;
        case 'right-to-left':
            gradientDirection = 'bg-gradient-to-r';
            break;
        case 'center':
            gradientDirection = 'bg-gradient-to-r';
            break;
    }

    // تحديد ألوان التدرج
    let gradientColors = '';
    switch (color) {
        case 'primary':
            gradientColors = 'from-transparent via-[#FF8A65] to-transparent';
            break;
        case 'secondary':
            gradientColors = 'from-transparent via-[#4FC3F7] to-transparent';
            break;
        case 'accent':
            gradientColors = 'from-transparent via-[#FFEB3B] to-transparent';
            break;
        case 'custom':
            gradientColors = customColors;
            break;
    }

    // ضبط الألوان للمحاذاة المركزية
    if (direction === 'center') {
        switch (color) {
            case 'primary':
                gradientColors = 'from-[#FF8A65] via-transparent to-[#FF8A65]';
                break;
            case 'secondary':
                gradientColors = 'from-[#4FC3F7] via-transparent to-[#4FC3F7]';
                break;
            case 'accent':
                gradientColors = 'from-[#FFEB3B] via-transparent to-[#FFEB3B]';
                break;
        }
    }

    return (
        <motion.div
            className={`w-full my-8 ${className}`}
            initial={animated ? { opacity: 0, scaleX: 0 } : undefined}
            animate={animated ? { opacity: 1, scaleX: 1 } : undefined}
            transition={{ duration: 0.8 }}
        >
            <div className={`${heightClass} ${gradientDirection} ${gradientColors} rounded-full w-full`}></div>
        </motion.div>
    );
};

export default GradientDivider; 