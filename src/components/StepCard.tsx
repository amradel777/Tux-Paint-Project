"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
    icon: ReactNode;
    step: number;
    title: string;
    description: string;
}

const StepCard = ({ icon, step, title, description }: StepCardProps) => {
    return (
        <motion.div
            className="flex items-start p-6 bg-white rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: step * 0.1 }}
        >
            <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-[#FFF9C4] rounded-full flex items-center justify-center text-[#FF8A65]">
                    {icon}
                </div>
            </div>
            <div>
                <div className="flex items-center mb-2">
                    <span className="bg-[#FF8A65] text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
                        {step}
                    </span>
                    <h3 className="text-xl font-bold text-[#424242]">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};

export default StepCard; 