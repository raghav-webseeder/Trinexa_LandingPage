'use client';

import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Payroll, Time & Benefits',
        content:
            'Track hours, simplify time-off requests, and run payroll from a single platform. No more manual work.',
    },
    {
        title: 'Hiring & Onboarding',
        content:
            'Attract top talent and create a seamless onboarding experience that sets new hires up for success.',
    },
    {
        title: 'HR Data & Reporting',
        content:
            'Centralize employee data and gain insights through customizable reports and dashboards.',
    },
    {
        title: 'Employee Experience & Performance',
        content:
            'Foster growth with feedback tools, reviews, and engagement tracking.',
    },
];

export default function HrSystemsSection() {
    return (
        <section
            className="bg-gray-50 py-24 px-6 md:px-12"
            id="working-method"
            aria-label="HR Systems Features"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="hidden md:block w-full h-full rounded-xl overflow-hidden shadow-md"

                >
                    <img
                        src="/hr-system.jpg"
                        alt="HR Dashboard Illustration"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-[#1C3D6F] mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        One Smart Platform for All Your HR Systems
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Discover how our integrated HR tools help streamline your operations from hiring to performance.
                    </motion.p>

                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                                    {section.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-5">{section.content}</p>
                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{
                                            backgroundColor: '#ffffff',
                                            color: '#107c10',
                                            borderColor: '#107c10',
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => (window.location.hash = 'demo')}
                                        className="cursor-pointer bg-[#107c10] border border-[#107c10] text-white text-sm px-4 py-2 rounded-full font-medium transition-all"
                                    >
                                        Get a Demo
                                    </motion.button>
                                    <motion.button
                                        whileHover={{
                                            backgroundColor: '#58a966',
                                            color: 'white',
                                            borderColor: '#58a966',
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="cursor-pointer border border-[#58a966] text-[#58a966] text-sm px-4 py-2 rounded-full font-medium transition-all"
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
