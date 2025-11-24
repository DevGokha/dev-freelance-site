"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="w-full bg-[#030712] py-12 px-6 flex justify-center">
      <div className="max-w-6xl w-full text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Connect With Me
        </h2>

        <div className="flex items-center justify-center gap-6">

          {/* GitHub */}
          <motion.a
            href="https://github.com/Devgokha/"
            target="_blank"
            whileHover={{ scale: 1.15 }}
            className="p-3 rounded-full bg-[#111827] border border-slate-700 text-slate-200 hover:text-indigo-400 hover:border-indigo-400 transition"
          >
            <FaGithub size={22} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/dev-gokha-44ba90260/"
            target="_blank"
            whileHover={{ scale: 1.15 }}
            className="p-3 rounded-full bg-[#111827] border border-slate-700 text-slate-200 hover:text-indigo-400 hover:border-indigo-400 transition"
          >
            <FaLinkedin size={22} />
          </motion.a>

          {/* Email */}
          <motion.a
            href="Devgokha434@gmail.com"
            whileHover={{ scale: 1.15 }}
            className="p-3 rounded-full bg-[#111827] border border-slate-700 text-slate-200 hover:text-indigo-400 hover:border-indigo-400 transition"
          >
            <FaEnvelope size={22} />
          </motion.a>

        </div>
      </div>
    </section>
  );
}
