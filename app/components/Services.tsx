"use client";

import { motion } from "framer-motion";
import { Bot, Code2, BrainCog } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#030712] py-20 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Services
        </h2>

        <p className="text-slate-300 mb-12 max-w-2xl">
          I offer end-to-end development services in AI, web technologies, and machine learning.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#111827] border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-shadow"
          >
            <Bot className="text-indigo-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              AI Chatbot Development
            </h3>
            <p className="text-slate-400 text-sm">
              Custom AI chatbots using LangChain, vector databases, OpenAI, RAG, and fully automated document Q&A systems.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#111827] border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-shadow"
          >
            <Code2 className="text-indigo-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              MERN Full-Stack Development
            </h3>
            <p className="text-slate-400 text-sm">
              Modern and scalable full-stack applications using React, Node.js,
              Express, MongoDB, authentication, dashboards, and APIs.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#111827] border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-shadow"
          >
            <BrainCog className="text-indigo-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Machine Learning Models
            </h3>
            <p className="text-slate-400 text-sm">
              End-to-end ML pipelines: cleaning, training, evaluation, and deployment using FastAPI or cloud services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
