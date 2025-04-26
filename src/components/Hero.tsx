"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="gradient-bg py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="md:w-1/2 mb-10 md:mb-0 text-center md:text-right"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#424242] leading-tight">
                            برنامج <span className="text-[#FF8A65]">تكس بينت</span> للرسم
                            <br />
                            <span className="text-[#4FC3F7]">متعة الإبداع للأطفال</span>
                        </h1>
                        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:ml-0">
                            برنامج رسم مفتوح المصدر مصمم خصيصًا للأطفال، يجمع بين المتعة والتعليم في بيئة آمنة وسهلة الاستخدام.
                        </p>
                        <div className="mt-8 space-y-4 sm:flex sm:space-x-4 sm:space-x-reverse sm:space-y-0 justify-center md:justify-end">
                            <Link href="/download" className="btn-primary">
                                تشغيل البرنامج
                            </Link>
                            <Link href="/how-to-use" className="px-6 py-3 bg-white text-[#FF8A65] border border-[#FF8A65] rounded-full font-bold shadow-md hover:bg-gray-50 transform transition-all duration-300 hover:scale-105">
                                طريقة الاستخدام
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative h-[300px] md:h-[400px] w-full">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* tuxpaint.webp */}
                                <Image
                                    src="/tuxpaint.webp"
                                    // src="/tux-paint-about.jpeg"
                                    alt="Tux Paint Interface"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-xl tux-shadow"
                                    priority
                                />
                            </div>
                            <motion.div
                                className="absolute -bottom-4 -right-4 h-24 w-24"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <Image
                                    src="/tux-character.png"
                                    alt="Tux Character"
                                    width={100}
                                    height={100}
                                    className="tux-shadow"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 