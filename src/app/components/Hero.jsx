'use client';
import { motion } from "framer-motion";
import {  PhoneCall, Send } from "lucide-react";
export default function Hero() {
    const features = [
        'Hiring & Onboarding',
        'HR Data & Reporting',
        'Payroll & Time',
        'Benefits Administration',
        'Employee Experience',
        'Performance Management',
    ];

    return (
        <section className="bg-[#F4FCE3] py-16 px-6 md:px-20 text-center" id="home">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#1C3D6F] mb-6">
                <div className="flex items-center gap-1">
                    <span className="text-[#F7941D]">★ 4.4</span>
                    <span>(2408 Reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-[#F7941D]">★ 4.6</span>
                    <span>(2968 Reviews)</span>
                </div>
                <div className="bg-[#0072CE]/10 px-3 py-1 rounded-full text-[#0072CE] font-medium">
                    Award-Winning HR Platform
                </div>
            </div>

            <h1 className="text-4xl font-extrabold text-[#0072CE] mb-2">
                #1 Rated HR Software
            </h1>
            <p className="text-lg text-[#1C3D6F] mb-10">
                One Easy-to-Use Platform for Everything HR
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {features.map((feature) => (
                    <div key={feature} className="flex flex-col items-center text-[#0072CE]">
                        <div className="w-10 h-10 bg-[#0072CE]/20 rounded-full mb-2" />
                        <span className="text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center cursor-pointer bg-[#F7941D] hover:bg-[#e38114] text-white rounded-full px-6 py-3 text-xl transition relative overflow-hidden"
                type="button"
            >
                <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                    Get a Demo
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                    <PhoneCall className="w-5 h-5" />
                </span>
            </motion.button>

            <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 text-left">
                <div className="text-[#0072CE] font-semibold mb-2">Charlotte</div>
                <p className="text-sm text-[#1C3D6F] mb-4">
                    Sr. HR Administrator - Payroll & Benefits Overview
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                    <div className="bg-[#0072CE]/10 p-4 rounded-md">
                        <div className="text-[#1C3D6F]">Gross Pay</div>
                        <div className="font-bold text-[#0072CE]">$5,085.04</div>
                    </div>
                    <div className="bg-[#0072CE]/10 p-4 rounded-md">
                        <div className="text-[#1C3D6F]">Net Pay</div>
                        <div className="font-bold text-[#0072CE]">$1,731.71</div>
                    </div>
                    <div className="bg-[#0072CE]/10 p-4 rounded-md">
                        <div className="text-[#1C3D6F]">Taxes</div>
                        <div className="font-bold text-[#0072CE]">$218.29</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
