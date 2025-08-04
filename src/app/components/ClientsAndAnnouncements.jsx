'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { FaStopwatch } from 'react-icons/fa';


const blue = '#1A6EBF';
const orange = '#F7941D';

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
        image: "/compensation.jpg"
    },
    {
        title: 'Hire Globally, Confidently—with Trinexa Global Employer of Record',
        description:
            'Expand your talent pool and pay a diverse, global workforce with accuracy, compliance, and peace-of-mind.',
        learn: 'Learn More & Join Our Waitlist',
        image: "/hiring.jpg"
    },
    {
        title: 'Make Smarter Workforce Decisions with Advanced Insights',
        description:
            'Our new Custom Dashboards and HR Benchmarks give you the trends and context to drive more strategic people decisions.',
        learn: 'Learn More',
        image: "/decision.jpg"
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function ClientsAndAnnouncements() {
    const [active, setActive] = useState('All');

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="px-4 py-16 text-center bg-white"
            id="clients"
        >
            <motion.h2
                className="text-2xl md:text-3xl font-bold text-[#1C3D6F] mb-6"
                variants={fadeUp}
            >
                10,000+ businesses, from startups to enterprises
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center gap-6 mb-10 border-b border-gray-200 pb-2"
                variants={fadeUp}
            >
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
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-10"
                variants={staggerContainer}
            >
                {logos[active].map((name, index) => (
                    <motion.div
                        key={index}
                        className="shadow rounded px-4 py-3 text-sm font-semibold flex items-center justify-center h-16"
                        style={{
                            backgroundColor:
                                active === 'All'
                                    ? '#E6F0FF'
                                    : active === 'Construction' ||
                                        active === 'Healthcare' ||
                                        active === 'Education'
                                        ? '#FFF3E0'
                                        : '#E6F0FF',
                            color:
                                active === 'All' || active === 'Technology'
                                    ? blue
                                    : orange,
                        }}
                        variants={fadeUp}
                    >
                        {name}
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                className="flex justify-center gap-4 mb-16"
                variants={fadeUp}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center justify-center cursor-pointer bg-[#F7941D] hover:bg-[#e38114] text-white rounded-full px-6 py-3 text-xl transition relative overflow-hidden"
                    type="button"
                    onClick={() => {
                        const demoSection = document.getElementById('demo');
                        if (demoSection) {
                            demoSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
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
            </motion.div>

            <motion.h3
                className="text-xl font-bold text-[#1C3D6F] mb-10"
                variants={fadeUp}
            >
                Trinexa Global announcements
            </motion.h3>
            <motion.div
                className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
                variants={staggerContainer}
            >
                {announcements.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white text-left space-y-3"
                        variants={fadeUp}
                    >
                       
                            <img
                                src={item.image}
                                alt="Announcement"
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />
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
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
