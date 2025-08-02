'use client';

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#F4F8FB] text-[#1A3B5D] py-12 px-4 border-t border-[#D1D5DB]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-3">Trinexa Global</h3>
                    <p className="text-sm text-[#1A3B5D]/80">
                        Driving growth with smart solutions across HR, payroll, benefits, and global workforce management.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2 text-[#F7941D]">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#F7941D]">Home</a></li>
                        <li><a href="#working-method" className="hover:text-[#F7941D]">How we work</a></li>
                        <li><a href="#demo" className="hover:text-[#F7941D]">Request Demo</a></li>
                        <li><a href="/contact" className="hover:text-[#F7941D]">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2 text-[#F7941D]">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#F7941D]">Blog</a></li>
                        <li><a href="#faqs" className="hover:text-[#F7941D]">FAQs</a></li>
                        <li><a href="#" className="hover:text-[#F7941D]">Case Studies</a></li>
                        <li><a href="#" className="hover:text-[#F7941D]">Help Center</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#F7941D]">Stay Connected</h4>
                    <div className="flex gap-4 text-[#1A3B5D] text-lg">
                        <a href="#" className="hover:text-[#F7941D]" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-[#F7941D]" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#F7941D]" aria-label="Twitter"><FaTwitter /></a>
                        <a href="mailto:hello@tghrms.com" className="hover:text-[#F7941D]" aria-label="Email"><FaEnvelope /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#D1D5DB] mt-10 pt-6 text-center text-xs text-[#1A3B5D]/60">
                <p className="mt-1">
                    Made with ❤️ by{' '}
                    <a
                        href="https://webseeder.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F7941D] hover:underline"
                    >
                        Webseeder Technologies
                    </a>
                </p>
                <p>© {new Date().getFullYear()} Trinexa Global. All rights reserved.</p>
                
            </div>
        </footer>
    );
}
