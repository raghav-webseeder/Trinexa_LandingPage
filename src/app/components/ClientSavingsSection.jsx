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
            {/* Heading with animation */}
            <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-bold text-[#1A6EBF] max-w-3xl mx-auto mb-12"
            >
                Trinexa Global customers save hundreds of hours and reduce HR costs by 40%
            </motion.h2>

            {/* Cards with animation */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-[#1A1A1A] mb-12"
            >
                {/* Card 1 */}
                <motion.div variants={fadeUp} className="space-y-4">
                    <p>
                        <strong>Saved $20,000</strong> annually and <strong>20 hours</strong> a week
                        with Trinexa Payroll Automation.
                    </p>
                    <div className="h-10 flex items-center justify-center">
                        <span className="text-[#1A6EBF] font-bold text-sm uppercase">ROCKFORD</span>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    variants={fadeUp}
                    className="space-y-4 border-x border-gray-200 px-6"
                >
                    <p>
                        <strong>Saved $40,000</strong> annually and <strong>hundreds of hours</strong>{' '}
                        with Trinexa Performance Management.
                    </p>
                    <div className="h-10 flex items-center justify-center">
                        <span className="text-[#F7941D] font-bold text-sm uppercase">ISTS</span>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={fadeUp} className="space-y-4">
                    <p>
                        <strong>Shortened a 3-week</strong> admin process into <strong>just 2 days</strong>{' '}
                        with Trinexa Benefits Administration.
                    </p>
                    <div className="h-10 flex items-center justify-center">
                        <span className="text-black font-bold text-sm uppercase">MMA Design</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Buttons with animation */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="flex justify-center gap-4 flex-wrap"
            >
                {/* Primary Button */}
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

                {/* Secondary Button */}
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
