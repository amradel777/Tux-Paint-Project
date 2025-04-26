"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientBorderProps {
    children: ReactNode;
    direction?: 'horizontal' | 'vertical';
    className?: string;
    borderType?: 'blue-purple' | 'orange-yellow' | 'green-blue' | 'custom';
    customGradient?: string;
    animated?: boolean;
}

const GradientBorder = ({
    children,
    direction = 'horizontal',
    className = '',
    borderType = 'blue-purple',
    customGradient = '',
    animated = true
}: GradientBorderProps) => {
    // تحديد اتجاه التدرج
    const gradientDirection = direction === 'horizontal' ? 'bg-gradient-to-l' : 'bg-gradient-to-b';

    // تحديد ألوان التدرج حسب النوع
    let gradientColors = '';

    switch (borderType) {
        case 'blue-purple':
            gradientColors = 'from-blue-500 via-purple-500 to-pink-500';
            break;
        case 'orange-yellow':
            gradientColors = 'from-orange-500 via-amber-500 to-yellow-400';
            break;
        case 'green-blue':
            gradientColors = 'from-green-400 via-teal-500 to-blue-500';
            break;
        case 'custom':
            gradientColors = customGradient;
            break;
    }

    return (
        <motion.div
            className={`relative p-0.5 rounded-lg ${className}`}
            initial={animated ? { opacity: 0, scale: 0.98 } : undefined}
            animate={animated ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.4 }}
        >
            {/* الحدود المتدرجة الخارجية */}
            <div className={`absolute inset-0 ${gradientDirection} ${gradientColors} rounded-lg`}></div>

            {/* المحتوى الداخلي */}
            <div className="relative bg-white rounded-[0.35rem] h-full w-full overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
};

export default GradientBorder; 