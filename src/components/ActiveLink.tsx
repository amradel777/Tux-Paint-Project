"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ActiveLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
    exact?: boolean;
}

const ActiveLink = ({
    href,
    children,
    className = '',
    activeClassName = 'text-[#FF8A65] font-bold',
    exact = true
}: ActiveLinkProps) => {
    const pathname = usePathname();
    const isActive = exact
        ? pathname === href
        : pathname?.startsWith(href) && href !== '/';

    return (
        <Link
            href={href}
            className={`${className} ${isActive ? activeClassName : ''}`}
        >
            {children}
            {isActive && (
                <motion.span
                    className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l from-[#FF8A65] via-[#4FC3F7] to-[#FFEB3B] shadow-[0_0_5px_rgba(255,138,101,0.5)]"
                    layoutId="activeIndicator"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </Link>
    );
};

export default ActiveLink; 