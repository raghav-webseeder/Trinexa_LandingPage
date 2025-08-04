'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const faqData = [
    {
        question: 'What does Trinexa Global do?',
        answer:
            'Trinexa Global is an all-in-one HR platform offering payroll, time tracking, onboarding, benefits administration, and global workforce management for businesses of all sizes.',
    },
    {
        question: 'Does Trinexa Global handle payroll?',
        answer:
            'Yes! Trinexa simplifies and automates payroll processing, ensuring accuracy, compliance, and timely payments for both local and global teams.',
    },
    {
        question: 'How much does Trinexa Global cost?',
        answer:
            'Pricing depends on your company size and selected services. Contact us for a custom quote or to start a free trial.',
    },
    {
        question: 'How many countries is Trinexa available in?',
        answer:
            'We currently support global operations in over 50 countries through our Employer of Record and Payroll services.',
    },
    {
        question: 'Is your support team in-house?',
        answer:
            'Yes. Our expert support team is in-house and available 24/7 to assist with onboarding, technical setup, and HR guidance.',
    },
    {
        question: 'Is Trinexa a PEO?',
        answer:
            'No, Trinexa is not a PEO. We operate as a Global Employer of Record (EOR), giving you more flexibility while maintaining compliance.',
    },
    {
        question: 'Where is my data housed? Is it secure?',
        answer:
            'Your data is securely stored in ISO-certified data centers with bank-grade encryption and real-time monitoring. Privacy and security are our top priorities.',
    },
];

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState (null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 px-4" id="faqs">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl text-center md:text-3xl font-bold text-[#1C3D6F] mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left text-[#1A6EBF] font-medium text-lg"
                            >
                                <span>{faq.question}</span>
                                <span className="text-[#F7941D] text-sm">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>

                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    height: activeIndex === index ? 'auto' : 0,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                {activeIndex === index && (
                                    <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
