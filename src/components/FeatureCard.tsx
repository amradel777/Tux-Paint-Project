"use client";

import { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    icon: ReactElement;
    title: string;
    description: string;
    color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 relative overflow-hidden"
            whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Border accent line */}
            <div className={`absolute top-0 right-0 h-1.5 w-1/3 ${color}`}></div>
            <div className={`absolute top-0 right-1/3 h-1.5 w-1/3 ${color} opacity-70`}></div>
            <div className={`absolute top-0 right-2/3 h-1.5 w-1/3 ${color} opacity-40`}></div>

            <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#424242]">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default FeatureCard; 