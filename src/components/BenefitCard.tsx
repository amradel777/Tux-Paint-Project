"use client";

import { motion } from 'framer-motion';
import Image from "next/image";

interface BenefitCardProps {
    title: string;
    description: string;
    image: string;
    imageWidth?: number;
    imageHeight?: number;
    reverse?: boolean;
}

const BenefitCard = ({
    title,
    description,
    image,
    imageWidth = 300,
    imageHeight = 300,
    reverse = false,
}: BenefitCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
                } gap-6 items-center justify-between w-full max-w-7xl mx-auto
      ${reverse
                    ? "bg-gradient-to-r from-[#ffedea] to-white"
                    : "bg-gradient-to-l from-[#eafff7] to-white"
                } p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300
      ${reverse
                    ? "border-r-4 border-t-2 border-b-2 border-transparent border-r-[#FF8A65]"
                    : "border-l-4 border-t-2 border-b-2 border-transparent border-l-[#00C4B4]"
                }`}
        >
            <div className="flex-1 min-w-[300px] flex justify-center">
                <Image
                    src={image}
                    width={imageWidth}
                    height={imageHeight}
                    alt={title}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default BenefitCard; 