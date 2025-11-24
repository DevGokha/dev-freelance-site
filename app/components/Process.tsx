"use client";

import { FaComments, FaCode, FaCogs, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaComments className="text-3xl text-indigo-400" />,
    title: "1. Discussion",
    desc: "Understand your requirements, goals, and the exact problem you want solved.",
  },
  {
    icon: <FaCode className="text-3xl text-indigo-400" />,
    title: "2. Planning & Design",
    desc: "I design the architecture, break down tasks, and choose the best tools.",
  },
  {
    icon: <FaCogs className="text-3xl text-indigo-400" />,
    title: "3. Development",
    desc: "Building your app, chatbot, or ML system with clean, scalable code.",
  },
  {
    icon: <FaRocket className="text-3xl text-indigo-400" />,
    title: "4. Delivery & Support",
    desc: "Deployment, optimization, and full support after project completion.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-[#050A24] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          How I Work
        </h2>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-[#0A113A] p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
