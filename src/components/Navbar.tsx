"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaPalette, FaBars, FaTimes } from 'react-icons/fa';
import ActiveLink from './ActiveLink';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { path: '/', label: 'الرئيسية' },
        { path: '/features', label: 'المميزات' },
        { path: '/how-to-use', label: 'طريقة الاستخدام' },
        { path: '/benefits', label: 'الفوائد' },
    ];

    return (
        <motion.nav
            className={`sticky top-0 z-50 ${isScrolled
                ? 'glass-navbar'
                : 'bg-white shadow-md'
                } transition-all duration-500`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Decorative top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8A65] via-[#4FC3F7] to-[#FFEB3B]"></div>

                <div className="flex justify-between h-16">
                    <motion.div
                        className="flex items-center"
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
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden font-bold md:flex items-center space-x-4 space-x-reverse">
                        {navLinks.map((link) => (
                            <div key={link.path} className="relative group">
                                <ActiveLink
                                    href={link.path}
                                    className={`px-3 py-2 transition-all duration-300 relative text-[#424242] hover:text-[#FF8A65] nav-link ${pathname === link.path ? 'navbar-item-active navbar-glow' : ''}`}
                                >
                                    {link.label}
                                </ActiveLink>
                                {pathname !== link.path && (
                                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-[#FF8A65] via-[#4FC3F7] to-[#FFEB3B] group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                                )}
                            </div>
                        ))}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/download"
                                className={`btn-primary ${pathname === '/download'
                                    ? 'bg-gradient-to-r from-[#e57373] to-[#FF8A65] shadow-[0_0_15px_rgba(255,138,101,0.5)]'
                                    : ''}`}
                            >
                                تشغيل البرنامج
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#FF8A65] hover:bg-gray-100 focus:outline-none"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-4 pt-2 pb-3 space-y-2 sm:px-5 bg-gradient-to-b from-white to-gray-50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`block px-3 py-3 rounded-lg transition-all duration-300 ${pathname === link.path
                                ? 'text-[#FF8A65] font-bold bg-white shadow-md border-r-2 border-[#FF8A65] pr-4 navbar-glow'
                                : 'text-[#424242] hover:text-[#FF8A65] hover:bg-white hover:shadow-sm hover:pr-4'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="relative">
                                {link.label}
                                {pathname === link.path && (
                                    <motion.span
                                        className="absolute bottom-0 right-0 h-0.5 w-full bg-gradient-to-l from-[#FF8A65] via-[#4FC3F7] to-[#FFEB3B]"
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "100%", opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </span>
                        </Link>
                    ))}
                    <Link
                        href="/download"
                        className={`block px-4 py-3 text-white rounded-lg transition-all duration-300 ${pathname === '/download'
                            ? 'bg-gradient-to-r from-[#e57373] to-[#FF8A65] shadow-lg'
                            : 'bg-gradient-to-r from-[#FF8A65] to-[#ff9776] hover:shadow-lg'
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        تشغيل البرنامج
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar; 