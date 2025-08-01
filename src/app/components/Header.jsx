'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { label: 'Clients', href: '#clients' },
        { label: 'How We Work', href: '#working-method' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Contact', href: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY.current) < 20) return;

            if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
                setVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = () => {
        if (pathname !== '/') {
            router.push('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white shadow-md sticky top-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={handleLogoClick}
                >
                    <img src="/logo.webp" alt="Trinexa Global Logo" className="h-12 w-auto" />
                </div>

                <nav className="hidden md:flex space-x-6 text-sm text-[#1C3D6F] font-medium">
                    {navItems.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="hover:text-[#0072CE] transition"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center justify-center cursor-pointer bg-[#F7941D] hover:bg-[#e38114] text-white rounded-full px-4 py-2 text-sm transition relative overflow-hidden"
                        type="button"
                    >
                        <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                            Get a Demo
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                            <Send className="w-5 h-5" />
                        </span>
                    </motion.button>
                </div>

                <button
                    className="md:hidden text-[#0072CE] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-2">
                    {navItems.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="block text-[#1C3D6F] hover:text-[#0072CE] transition"
                        >
                            {label}
                        </a>
                    ))}
                    <button className="w-full mt-2 bg-[#F7941D] hover:bg-[#e38114] text-white px-4 py-2 rounded-full text-sm transition">
                        Get a Demo
                    </button>
                </div>
            )}
        </motion.header>
    );
}
