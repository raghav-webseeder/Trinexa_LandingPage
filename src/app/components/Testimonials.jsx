'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Anita Sharma',
            role: 'HR Manager, Vortex Systems',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            message:
                'Trinexa Global transformed our payroll processing. What used to take days is now done in hours—with better accuracy!',
        },
        {
            name: 'David Lee',
            role: 'CTO, NextBridge Solutions',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            message:
                'With Trinexa, we streamlined employee onboarding and improved performance tracking across teams. Total game-changer.',
        },
        {
            name: 'Sara Ahmed',
            role: 'Director, Bright Future Schools',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            message:
                'Our benefits admin process is now effortless thanks to Trinexa’s smart automation. Highly recommended!',
        },
        {
            name: 'Manoj Verma',
            role: 'Founder, SkillBridge Pvt Ltd',
            image: 'https://randomuser.me/api/portraits/men/45.jpg',
            message:
                'From compensation planning to advanced reporting—Trinexa’s platform gives us full control over HR ops in one place.',
        },
        {
            name: 'Elena Roberts',
            role: 'People Ops, ZenCraft Technologies',
            image: 'https://randomuser.me/api/portraits/women/21.jpg',
            message:
                'The onboarding experience has become smoother and more engaging for our remote teams—Trinexa nailed it.',
        },
        {
            name: 'Akash Mehta',
            role: 'Finance Head, QuantumLabs',
            image: 'https://randomuser.me/api/portraits/men/78.jpg',
            message:
                'We’ve reduced errors and saved thousands using Trinexa’s global payroll system. Truly reliable and scalable.',
        },
    ];

    // Variants for animation
    const testimonialVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const formVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const buttonHoverVariants = {
        hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
    };

    return (
        <section className="bg-white py-20 px-6" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[#1A6EBF] text-center mb-12">
                    What Our Clients Say
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Testimonials Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.3, // Staggered animation for each testimonial
                                },
                            },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#f5fbff] rounded-lg shadow-md p-6 text-center border-t-4 border-[#F7941D] hover:shadow-lg transition duration-300"
                                variants={testimonialVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 mx-auto rounded-full mb-4 object-cover border-2 border-[#1A6EBF]"
                                />
                                <p className="text-gray-700 text-sm italic mb-4">"{item.message}"</p>
                                <hr className="my-4 border-gray-200" />
                                <h4 className="text-[#1A6EBF] font-semibold">{item.name}</h4>
                                <p className="text-gray-500 text-sm">{item.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Enquiry Form */}
                    <motion.div
                        className="w-full lg:max-w-sm bg-[#f9fcff] border border-gray-200 p-6 rounded-lg shadow-md"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        id='demo'
                    >
                        <h3 className="text-xl font-semibold text-[#1A6EBF] mb-4">Request a Demo</h3>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-[#1A6EBF] focus:border-[#1A6EBF] outline-none"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-[#1A6EBF] focus:border-[#1A6EBF] outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-[#1A6EBF] focus:border-[#1A6EBF] outline-none"
                                    rows="4"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-[#F7941D] hover:bg-[#e57e00] text-white text-sm font-medium py-2 rounded-md transition"
                                whileHover="hover"
                                variants={buttonHoverVariants}
                            >
                                Submit
                            </motion.button>

                            {/* Image Below Button */}
                            <div className="mt-4">
                                <img
                                    src="./5556.png"
                                    alt="Thank you"
                                    className="w-full rounded-md object-cover"
                                />
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
