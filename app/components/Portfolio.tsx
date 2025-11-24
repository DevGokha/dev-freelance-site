"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot (LangChain + RAG)",
    description: "Custom document Q&A chatbot with LangChain, embeddings, vector DB, and memory.",
    tech: "LangChain · Pinecone · OpenAI",
    link: "#",
  },
  {
    title: "MERN Full-Stack Web App",
    description: "Full authentication, dashboards, analytics, and real-time updates.",
    tech: "React · Node · MongoDB",
    link: "#",
  },
  {
    title: "ML Classification Model",
    description: "End-to-end ML pipeline deployed with FastAPI & cloud hosting.",
    tech: "Python · Scikit-Learn · FastAPI",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#030712] text-white py-24 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Portfolio
        </h2>

        <p className="text-slate-300 mb-12 max-w-2xl">
          A showcase of projects I've built in AI, full-stack development, and machine learning.
        </p>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827] border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-3">
                {item.description}
              </p>

              {/* Tech Stack */}
              <p className="text-indigo-400 text-xs font-medium mb-4">
                {item.tech}
              </p>

              {/* Button */}
              <a
                href={item.link}
                className="text-sm flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition"
              >
                View Project <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
