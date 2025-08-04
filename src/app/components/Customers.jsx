'use client';

import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const testimonials = [
    {
        name: 'Jonathon Bartlett',
        position: 'Chief Human Resources Officer at Indica Labs',
        text: `BambooHR Payroll is designed to handle multi-state taxation in terms of income and withholding. When adding a state in the system, it starts prompting you where to go to register and how to set it up. It's easy for novices and experts to navigate and activate! I love BambooHR.`,
        avatar: 'https://i.pravatar.cc/100?img=1',
    },
    {
        name: 'Marijane Moreau Peterson',
        position: 'Director of Talents and Culture at Viridia Terra International',
        text: `BambooHR and I are a package deal. If you hire me, I'm making the case for BambooHR.`,
        avatar: 'https://i.pravatar.cc/100?img=2',
    },
    {
        name: 'Basudha Bhattari-Johansson',
        position: 'VP of HR & Sustainability at PROBI',
        text: `BambooHR changed the way HR delivers value to the business. We can now collaborate with other departments and be secure in metrics like headcount, pay rate, and PTO accrual.`,
        avatar: 'https://i.pravatar.cc/100?img=3',
    },
    {
        name: 'Rachael Schau',
        position: 'Chief of Staff at Rockford Silk Screen Process',
        text: `BambooHR and payroll together have saved me almost 20 hours a week. We’ve honestly saved $20,000 over a year.`,
        avatar: 'https://i.pravatar.cc/100?img=4',
    },
    {
        name: 'Anne Seebach',
        position: 'Head of People & Culture at Architrave',
        text: `It’s the perfect tool for people who have never worked with ATS before. They don’t have to be afraid to be overloaded with information. It is very self-explaining.`,
        avatar: 'https://i.pravatar.cc/100?img=5',
    },
    {
        name: 'Rob Scott',
        position: 'Chief Operating Officer at Smart WFM',
        text: `The way BambooHR has designed the product has been very thoughtful. They’ve really understood the needs of the employee as well as the needs of HR.`,
        avatar: 'https://i.pravatar.cc/100?img=6',
    },
    {
        name: 'Josh Franklin',
        position: 'HR Program Manager at CTI, Inc.',
        text: `BambooHR was easy to learn and start using for everyone at the company and made it easy to be in compliance with an evolving workforce.`,
        avatar: 'https://i.pravatar.cc/100?img=7',
    },
    {
        name: 'Jessica Neal',
        position: 'HR General Manager at American Cedar & Millwork',
        text: `I’d absolutely recommend BambooHR Time Tracking. It’s a great system that does exactly what you need it to do.`,
        avatar: 'https://i.pravatar.cc/100?img=8',
    },
    {
        name: 'Angie Liams',
        position: 'HR Manager at CRBR',
        text: `BambooHR saves us from having an entire team of HR people. It saves time in training employees or supervisors and compiling information.`,
        avatar: 'https://i.pravatar.cc/100?img=9',
    },
    {
        name: 'Amy Boston',
        position: 'Employee Success Manager at LionHeart Critical Power Specialists',
        text: `BambooHR is easy to use, and the support is excellent. And that’s what HR professionals want.`,
        avatar: 'https://i.pravatar.cc/100?img=10',
    },
    {
        name: 'Jacob Alsup',
        position: 'Director of Recruiting & Hiring at Community Counseling Center',
        text: `We have been using Performance Management for 3.5 years and have seen a 95.5% compliance rate with employees. It is so easy to complete performance assessments with BambooHR.`,
        avatar: 'https://i.pravatar.cc/100?img=11',
    },
    {
        name: 'Sandy Sorzano',
        position: 'Director of People + Brand at MMA Design',
        text: `Benefits Administration totally changed my life last year. Something that only took a couple of days made me say ‘Oh wow, that actually went smoothly.’ Let’s do it again!`,
        avatar: 'https://i.pravatar.cc/100?img=12',
    },
];


const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
};

export default function Customers() {
    return (
        <section className="bg-[#F6F9F4] py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1C3D6F] mb-12">
                    Hear from our customers
                </h2>

                {/* Masonry Grid */}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6"
                    columnClassName="masonry-column"
                >
                    {testimonials.map(({ name, position, text, avatar }, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.05 }}
                            className="mb-6 bg-white border border-gray-200 rounded-xl p-5 text-left shadow-sm hover:shadow-md transition break-inside-avoid"
                        >
                            <p className="text-sm text-gray-700 mb-4">{text}</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <img
                                    src={avatar}
                                    alt={name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-[#1C3D6F]">{name}</p>
                                    <p className="text-xs text-gray-500">{position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Masonry>

                <div className="flex justify-center gap-4 mt-12">
                    <button
                        className="cursor-pointer bg-[#1C3D6F] text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C3D6F]"
                        onClick={() => {
                            const demoSection = document.getElementById('demo');
                            if (demoSection) {
                                demoSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Get a Demo
                    </button>
                    <button
                        className="cursor-pointer bg-white text-[#1C3D6F] border border-[#1C3D6F] px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-[#F0F4FA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C3D6F]"
                    >
                        Start Free Trial
                    </button>
                </div>

            </div>
        </section>
    );
}