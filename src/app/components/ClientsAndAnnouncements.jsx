'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { PhoneCall} from "lucide-react";
import { FaStopwatch } from 'react-icons/fa';
// Updated theme colors from logo
const blue = '#1A6EBF';
const orange = '#F7941D';

// Category tabs and logo items
const categories = ['All', 'Construction', 'Technology', 'Healthcare', 'Education'];

const logos = {
    All: [
        'Stukent', 'Ansarada', 'American College', 'IST', 'EWN',
        'Williston', 'Architrave', 'Lucid', 'Avidbots', 'ProntoForms',
    ],
    Construction: ['Architrave', 'Ansarada'],
    Technology: ['Lucid', 'Stukent'],
    Healthcare: ['IST', 'Avidbots'],
    Education: ['EWN', 'American College'],
};

const announcements = [
    {
        title: 'Build a Smarter Compensation Strategy',
        description:
            'Simplify your entire pay process—from benchmarking to planning and approvals—with Trinexa Global Compensation Management.',
        learn: 'Learn More',
    },
    {
        title: 'Hire Globally, Confidently—with Trinexa Global Employer of Record',
        description:
            'Expand your talent pool and pay a diverse, global workforce with accuracy, compliance, and peace-of-mind.',
        learn: 'Learn More & Join Our Waitlist',
    },
    {
        title: 'Make Smarter Workforce Decisions with Advanced Insights',
        description:
            'Our new Custom Dashboards and HR Benchmarks give you the trends and context to drive more strategic people decisions.',
        learn: 'Learn More',
    },
];

export default function ClientsAndAnnouncements() {
    const [active, setActive] = useState('All');

    return (
        <section className="px-4 py-16 text-center bg-white" id='clients'>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C3D6F] mb-6">
                10,000+ businesses, from startups to enterprises
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 border-b border-gray-200 pb-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActive(category)}
                        className={`pb-2 font-medium text-sm md:text-base border-b-2 transition ${active === category
                                ? `border-[${blue}] text-[${blue}]`
                                : 'border-transparent text-gray-600 hover:text-[#1A6EBF]'
                            }`}
                        style={{
                            borderColor: active === category ? blue : 'transparent',
                            color: active === category ? blue : undefined,
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-10">
                {logos[active].map((name, index) => (
                    <div
                        key={index}
                        className="shadow rounded px-4 py-3 text-sm font-semibold flex items-center justify-center h-16"
                        style={{
                            backgroundColor:
                                active === 'All'
                                    ? '#E6F0FF' // light blue background for All
                                    : active === 'Construction'
                                        ? '#FFF3E0' // light orange background for Construction
                                        : active === 'Technology'
                                            ? '#E6F0FF' // light blue background for Technology
                                            : active === 'Healthcare'
                                                ? '#FFF3E0' // light orange background for Healthcare
                                                : active === 'Education'
                                                    ? '#FFF3E0' // light orange background for Education
                                                    : 'white',
                            color:
                                active === 'All' || active === 'Technology'
                                    ? blue
                                    : orange,
                        }}
                    >
                        {name}
                    </div>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 mb-16">
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
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center justify-center cursor-pointer bg-[#83b8e0] hover:bg-[#8c96d8] text-white rounded-full px-6 py-3 text-xl transition relative overflow-hidden"
                    type="button"
                >
                    <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                    Start Free Trial
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                        <FaStopwatch className="w-5 h-5" />
                     </span>
                </motion.button>
            </div>

            {/* Announcements */}
            <h3 className="text-xl font-bold text-[#1C3D6F] mb-10">Trinexa Global announcements</h3>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                {announcements.map((item, index) => (
                    <div key={index} className="bg-white text-left space-y-3">
                        <div className="w-full h-40 bg-green-100 rounded-md mb-2 flex items-center justify-center">
                            <span className="text-green-600 font-bold">Image Placeholder</span>
                        </div>
                        <h4 className="font-semibold text-[#1C3D6F]">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <a
                            href="#"
                            className="text-sm font-semibold"
                            style={{ color: orange }}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            {item.learn} &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
