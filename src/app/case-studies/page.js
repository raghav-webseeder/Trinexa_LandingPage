"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaIndustry, FaBriefcase } from "react-icons/fa";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "ROCKFORD",
      icon: <FaBuilding className="text-[#1A6EBF] text-4xl" />,
      result: "Saved $20,000 annually & 20 hours a week",
      description:
        "With Trinexa Payroll Automation, Rockford streamlined payroll operations and reduced manual work significantly.",
      badgeColor: "bg-[#E6F0FA] text-[#1A6EBF]",
    },
    {
      company: "ISTS",
      icon: <FaIndustry className="text-[#F7941D] text-4xl" />,
      result: "Saved $40,000 annually & hundreds of hours",
      description:
        "By implementing Trinexa Performance Management, ISTS improved employee evaluations and automated review cycles.",
      badgeColor: "bg-[#FFF4E5] text-[#F7941D]",
    },
    {
      company: "MMA Design",
      icon: <FaBriefcase className="text-black text-4xl" />,
      result: "Shortened a 3-week admin process into just 2 days",
      description:
        "Trinexa Benefits Administration helped MMA Design reduce bottlenecks and speed up employee benefits onboarding.",
      badgeColor: "bg-gray-200 text-black",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white text-[#1A1A1A]">
      <section className="bg-gradient-to-b from-[#F4F8FB] to-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-gray-600"
        >
          See how leading companies improved efficiency, reduced costs, and
          enhanced their employee experience with Trinexa Global HRMS solutions.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
            <div className="h-12 flex items-center mb-4">{study.icon}</div>
            <h3 className="text-xl font-bold mb-2">{study.result}</h3>
            <p className="text-sm text-gray-600 mb-4">{study.description}</p>
            <div className="mt-auto flex justify-start">
              <span
                className={`px-4 py-1 font-bold text-xs uppercase rounded-full tracking-wide ${study.badgeColor}`}
              >
                {study.company}
              </span>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-[#F4F8FB] text-[#1A1A1A] text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want to see similar results for your business?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Let’s discuss how Trinexa Global HRMS can help transform your HR
          processes.
        </p>
        <a
          href="/#demo"
          className="bg-[#F7941D] hover:bg-[#e38114] text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Request a Demo
        </a>
      </section>
    </main>
  );
}
