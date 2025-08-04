'use client';

import { motion } from 'framer-motion';

export default function BenefitsSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="py-16 px-4 bg-white max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"
        >
            <motion.div
                className="flex-shrink-0 w-full md:w-1/3 max-w-full h-72 md:h-72 rounded-lg overflow-hidden shadow-md"
                variants={fadeUp}
            >
                <img
                    src="/emp.jpg"
                    alt="Happy diverse team smiling"
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="w-full md:w-2/3"
                variants={fadeUp}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C3D6F] mb-6">
                    Make a real difference with affordable employee benefits.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Supporting your team is more important than ever. With Gusto as your
                    broker, health insurance administration comes at no extra cost. Move
                    an existing plan or let our licensed advisors help you find the right
                    coverage.
                </p>
                <a
                    href="#"
                    className="text-teal-700 font-semibold hover:underline"
                >
                    Learn more about benefits
                </a>
            </motion.div>
        </motion.section>
    );
}
