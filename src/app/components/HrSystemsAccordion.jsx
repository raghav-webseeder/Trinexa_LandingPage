'use client';

import { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Payroll, Time & Benefits',
        content:
            'Track hours and manage multi-rate pay, simplify time off requests, streamline benefits enrollment, and run payroll all from a single platform. No more data double entry or manual approval processes—just easy, accurate payroll for you and your employees.',
    },
    {
        title: 'Hiring & Onboarding',
        content:
            'Attract top talent, manage applications, and create a seamless onboarding experience that sets up your new hires for success.',
    },
    {
        title: 'HR Data & Reporting',
        content:
            'Centralize employee data and gain valuable insights through customizable reports and visual dashboards.',
    },
    {
        title: 'Employee Experience & Performance',
        content:
            'Foster growth with performance reviews, feedback tools, and engagement tracking to support your team’s development.',
    },
    {
        title: 'Compensation (New!)',
        content:
            'Plan, benchmark, and approve compensation changes efficiently with smarter, data-driven workflows.',
    },
];

export default function HrSystemsAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const contentVariants = {
        hidden: { opacity: 0, maxHeight: 0 },
        visible: { opacity: 1, maxHeight: 1000, transition: { duration: 0.5 } },
    };

    return (
        <section className="py-16 px-4 bg-white" id="working-method">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl text-center md:text-3xl font-bold text-[#1C3D6F] mb-12">
                    Combine all your HR systems into one platform
                </h2>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 space-y-4">
                        {sections.map((section, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left flex justify-between items-center text-lg font-semibold"
                                >
                                    {section.title}
                                    <span className="text-2xl text-[#107c10]">
                                        {openIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                                    </span>
                                </button>
                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate={openIndex === index ? 'visible' : 'hidden'}
                                    className="mt-3 text-gray-600 text-sm md:text-base overflow-hidden"
                                >
                                    <p className="mb-4">{section.content}</p>
                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ background: "rgb(29,83,29)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-[#107c10] cursor-pointer text-white font-medium px-4 py-2 rounded-full"
                                            onClick={() => window.location.hash = 'demo'}
                                        >
                                            Get a Demo
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ background: "#58a966", color:"white" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="cursor-pointer border border-[#107c10] text-[#58a966] font-medium px-5 py-2 rounded-full"
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 hidden md:block">
                        <div className="w-full h-[500px] rounded-lg flex items-center justify-center text-green-700 font-semibold overflow-hidden">
                            <img
                                src="/3129847.png"
                                alt="Payroll Dashboard, Time Off, Benefits"
                                className="object-contain h-full w-full opacity-50"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
