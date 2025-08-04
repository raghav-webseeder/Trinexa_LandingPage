'use client';

import { motion } from 'framer-motion';

export default function ClientSavingsSection() {
    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#f5fbff] py-20 px-6 text-center"
        >
            <motion.h2
                variants={fadeUp}
                className="text-2xl text-center md:text-3xl font-bold text-[#1C3D6F] mb-12"
            >
                Trinexa Global customers save hundreds of hours and reduce HR costs by 40%
            </motion.h2>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-[#1A1A1A] mb-12"
            >
                <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
                >
                    <p className="text-lg leading-relaxed">
                        <strong className="text-[#1A6EBF] text-xl">Saved $20,000</strong> annually and{" "}
                        <strong>20 hours</strong> a week with{" "}
                        <span className="font-medium">Trinexa Payroll Automation</span>.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <span className="px-4 py-1 bg-[#E6F0FA] text-[#1A6EBF] font-bold text-xs uppercase rounded-full tracking-wide">
                            ROCKFORD
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
                >
                    <p className="text-lg leading-relaxed">
                        <strong className="text-[#F7941D] text-xl">Saved $40,000</strong> annually and{" "}
                        <strong>hundreds of hours</strong> with{" "}
                        <span className="font-medium">Trinexa Performance Management</span>.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <span className="px-4 py-1 bg-[#FFF4E5] text-[#F7941D] font-bold text-xs uppercase rounded-full tracking-wide">
                            ISTS
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
                >
                    <p className="text-lg leading-relaxed">
                        <strong className="text-black text-xl">Shortened a 3-week</strong> admin process into{" "}
                        <strong>just 2 days</strong> with{" "}
                        <span className="font-medium">Trinexa Benefits Administration</span>.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <span className="px-4 py-1 bg-gray-200 text-black font-bold text-xs uppercase rounded-full tracking-wide">
                            MMA Design
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="flex justify-center gap-4 flex-wrap"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const demoSection = document.getElementById('demo');
                        if (demoSection) {
                            demoSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="cursor-pointer bg-gradient-to-r from-[#F7941D] to-[#ff9f3e] text-white px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F7941D]/50"
                >
                    Get a Demo
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer border-2 border-[#F7941D] text-[#F7941D] px-7 py-3 rounded-full font-semibold bg-white hover:bg-[#fff6eb] transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#F7941D]/20"
                >
                    See Case Studies
                </motion.button>
            </motion.div>

        </motion.section>
    );
}
