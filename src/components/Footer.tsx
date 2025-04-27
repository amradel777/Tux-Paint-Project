"use client";

import Link from 'next/link';
import { FaPalette, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const Footer = () => {
    const borderAnimation = useAnimation();

    useEffect(() => {
        const animate = async () => {
            await borderAnimation.start({
                boxShadow: '0 0 15px rgba(255,138,101,0.7)',
                transition: { duration: 1.5 }
            });
            await borderAnimation.start({
                boxShadow: '0 0 5px rgba(255,138,101,0.3)',
                transition: { duration: 1.5 }
            });
            animate();
        };

        animate();
    }, [borderAnimation]);

    return (
        <footer className="relative mt-16">
            {/* Decorative gradient top border with animation */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF8A65] via-[#4FC3F7] to-[#FFEB3B]"
                animate={borderAnimation}
            ></motion.div>

            {/* Animated wave pattern */}
            <div className="absolute top-0 left-0 right-0 h-16 transform -translate-y-full overflow-hidden">
                <motion.svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-16 text-white"
                    initial={{ y: 0 }}
                    animate={{
                        y: [0, -5, 0],
                        transition: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current"></path>
                </motion.svg>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-50 py-16 border-t border-gray-200 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:justify-between">
                        <motion.div
                            className="flex flex-col items-start"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href="/" className="flex items-center group">
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <FaPalette className="h-8 w-8 text-[#FF8A65] drop-shadow-md" />
                                </motion.div>
                                <span className="mr-3 text-xl font-bold text-[#424242] group-hover:text-[#FF8A65] transition-colors duration-300">تكس بينت</span>
                            </Link>
                            <p className="mt-3 text-gray-600 max-w-md leading-relaxed">
                                برنامج رسم مفتوح المصدر مصمم خصيصًا للأطفال، يجمع بين المتعة والتعليم في بيئة آمنة وسهلة الاستخدام.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-8 md:mb-0 mt-10 text-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src="/Ministry.png.png"
                                alt="Tux Paint Logo"
                                className="mb-4 text-center justify-center"

                                width={250}
                                height={250}
                            />


                            <span className="text-[#FF8A65] font-medium  mt-4   ">أشراف الأستاذة: <span className="name">ندى سعيد أحمد الزرقوي</span></span>
                            <span className="text-[#4FC3F7] font-medium block">تصميم وبرمجة: <span className="name">فاطمة محمد أحمد الزهراني</span></span>


                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase relative inline-block">
                                    روابط سريعة
                                    <motion.span
                                        className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l from-[#FF8A65] to-transparent"
                                        whileHover={{ scaleX: 1.2, originX: 0 }}
                                    ></motion.span>
                                </h2>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            الرئيسية
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features" className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            المميزات
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-use" className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            طريقة الاستخدام
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/benefits" className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            الفوائد
                                        </Link>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase relative inline-block">
                                    الموارد
                                    <motion.span
                                        className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l from-[#4FC3F7] to-transparent"
                                        whileHover={{ scaleX: 1.2, originX: 0 }}
                                    ></motion.span>
                                </h2>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="https://tuxpaint.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4FC3F7] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            الموقع الرسمي
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tuxpaint.org/docs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4FC3F7] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            التوثيق
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tuxpaint.org/download" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4FC3F7] transition-colors duration-300 hover:translate-x-1 inline-block">
                                            التحميل
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    <motion.hr
                        className="my-10 border-t border-dashed border-gray-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                    />

                    <div className="flex flex-col  md:flex-row md:justify-between md:items-center">
                        <div className="flex space-x-5  space-x-reverse mb-6 md:mb-0 ">
                            <motion.a
                                href="#"
                                className="text-gray-500 hover:text-[#FF8A65] transition-colors duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaFacebook className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-gray-500 hover:text-[#4FC3F7] transition-colors duration-300"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTwitter className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/tuxpaint/tuxpaint"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[#333] transition-colors duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaGithub className="w-6 h-6" />
                            </motion.a>
                        </div>

                        <motion.p
                            className="text-gray-500 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {/* © {new Date().getFullYear()} */}
                            <span className="text-gray-500 text-sm">  All Rights Reserved Powered by Designer Fatima <span> (رسومات ممتعة للأطفال - Tux Paint )</span> Copyright © 2025</span>
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 