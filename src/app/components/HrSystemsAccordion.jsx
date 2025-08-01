'use client';

import { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

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
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-16 px-4 bg-white" id='working-method'>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#1C3D6F] mb-12">
                    Combine all your HR systems into one platform
                </h2>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Accordion */}
                    <div className="flex-1 space-y-4">
                        {sections.map((section, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full text-left flex justify-between items-center text-lg font-semibold"
                                >
                                    {section.title}
                                    <span className="text-2xl text-[#107c10]">
                                        {openIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                                    </span>
                                </button>

                                {openIndex === index && (
                                    <div className="mt-3 text-gray-600 text-sm md:text-base">
                                        <p className="mb-4">{section.content}</p>
                                        <div className="flex gap-3">
                                            <button className="bg-[#107c10] text-white font-medium px-5 py-2 rounded-full">
                                                Get a Demo
                                            </button>
                                            <button className="border border-[#107c10] text-[#107c10] font-medium px-5 py-2 rounded-full hover:bg-[#f6fff6]">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Visual/Illustration Placeholder */}
                    <div className="flex-1 hidden md:block">
                        <div className="w-full h-[500px] bg-green-100 rounded-lg shadow flex items-center justify-center text-green-700 font-semibold">
                            Visual Placeholder
                            <br />
                            (Payroll Dashboard, Time Off, Benefits, etc.)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
