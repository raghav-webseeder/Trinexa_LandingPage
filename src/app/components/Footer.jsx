'use client';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0D1B2A] text-gray-300 pt-16 pb-8 px-6 lg:px-8">
           
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">

                <div>
                    <Image
                        src="/Logo.png"
                        alt="Trinexa Global Logo"
                        width={160}
                        height={60}
                        className="mb-4"
                        priority
                    />
                    <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                        Driving growth with smart solutions across HR, payroll, benefits,
                        and global workforce management.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-[#F7941D] mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/#" className="hover:text-[#F7941D] transition">Home</a></li>
                        <li><a href="/#working-method" className="hover:text-[#F7941D] transition">How We Work</a></li>
                        <li><a href="/#demo" className="hover:text-[#F7941D] transition">Request Demo</a></li>
                        <li><a href="/contact" className="hover:text-[#F7941D] transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-[#F7941D] mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/#faqs" className="hover:text-[#F7941D] transition">FAQs</a></li>
                        <li><a href="/case-studies" className="hover:text-[#F7941D] transition">Case Studies</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-[#F7941D] mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/terms-conditions" className="hover:text-[#F7941D] transition">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:text-[#F7941D] transition">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
                <p className="mb-3 md:mb-0">
                    © {new Date().getFullYear()} Trinexa Global. All rights reserved.
                </p>
                <p>
                    Made with ❤️ by{' '}
                    <a
                        href="https://webseeder.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F7941D] hover:underline transition"
                    >
                        Webseeder Technologies
                    </a>
                </p>
            </div>
        </footer>
    );
}
