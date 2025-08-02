'use client';
import { motion } from "framer-motion";
import {
    Briefcase,
    BarChart3,
    Clock,
    HeartHandshake,
    Users,
    Star
} from "lucide-react";
import { PhoneCall } from "lucide-react";

export default function Hero() {
    const features = [
        { label: 'Hiring & Onboarding', icon: Briefcase },
        { label: 'HR Data & Reporting', icon: BarChart3 },
        { label: 'Payroll & Time', icon: Clock },
        { label: 'Benefits Administration', icon: HeartHandshake },
        { label: 'Employee Experience', icon: Users },
        { label: 'Performance Management', icon: Star },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.section
            className="bg-[#F4FCE3] py-16 px-6 md:px-20 text-center"
            id="home"
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            <motion.div
                className="flex flex-wrap justify-center gap-6 text-base md:text-lg text-[#1C3D6F] mb-6"
                variants={fadeUp}
            >
                <div className="flex items-center gap-1">
                    <span className="text-[#F7941D] text-lg">★ 4.4</span>
                    <span>(2408 Reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-[#F7941D] text-lg">★ 4.6</span>
                    <span>(2968 Reviews)</span>
                </div>
                <div className="bg-[#0072CE]/10 px-4 py-1 rounded-full text-[#0072CE] font-medium text-base">
                    Award-Winning HR Platform
                </div>
            </motion.div>

            <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-[#0072CE] mb-4"
                variants={fadeUp}
            >
                #1 Rated HR Software
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl text-[#1C3D6F] mb-10"
                variants={fadeUp}
            >
                One Easy-to-Use Platform for Everything HR
            </motion.p>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
                variants={containerVariants}
            >
                {features.map(({ label, icon: Icon }) => (
                    <motion.div
                        key={label}
                        className="flex flex-col items-center text-[#0072CE]"
                        variants={fadeUp}
                    >
                        <div className="w-12 h-12 bg-[#0072CE]/10 rounded-full flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6 text-[#0072CE]" />
                        </div>
                        <span className="text-base md:text-lg font-medium">{label}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                variants={fadeUp}
                type="button"
                className="group relative inline-flex items-center justify-center px-6 py-4 rounded-full text-lg md:text-lg font-semibold text-white bg-[#F7941D] hover:bg-[#e38114] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                onClick={() => {
                    const demoSection = document.getElementById("demo");
                    if (demoSection) {
                        demoSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >

                <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                    Get a Demo
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                    <PhoneCall className="w-6 h-6" />
                </span>
            </motion.button>


            <motion.div
                className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 text-left"
                variants={fadeUp}
            >
                <div className="text-[#0072CE] font-semibold text-lg md:text-xl mb-2">Charlotte</div>
                <p className="text-md md:text-lg text-[#1C3D6F] mb-4">
                    Sr. HR Administrator - Payroll & Benefits Overview
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base">
                    <div className="bg-[#0072CE]/10 p-4 rounded-md">
                        <div className="text-[#1C3D6F]">Gross Pay</div>
                        <div className="font-bold text-[#0072CE] text-lg md:text-xl">$5,085.04</div>
                    </div>
                    <div className="bg-[#0072CE]/10 p-4 rounded-md">
                        <div className="text-[#1C3D6F]">Net Pay</div>
                        <div className="font-bold text-[#0072CE] text-lg md:text-xl">$1,731.71</div>
                    </div>
                    <div className="bg-[#0072CE]/10 p-4 rounded-md">
                        <div className="text-[#1C3D6F]">Taxes</div>
                        <div className="font-bold text-[#0072CE] text-lg md:text-xl">$218.29</div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
