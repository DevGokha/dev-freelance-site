"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex justify-center bg-[#030712] py-16 px-4"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* LEFT IMAGE */}
        <div className="flex-shrink-0">
          <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-xl overflow-hidden border border-slate-700 shadow-lg shadow-slate-900/50">
            <Image
              src="/dev.jpg"
              alt="Dev Gokha"
              fill
              sizes="(max-width: 768px) 128px, 144px"
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Dev Gokha
          </h1>

          <p className="text-lg md:text-xl text-indigo-400 font-semibold mt-2">
            AI & MERN Developer | ML Engineer
          </p>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4 max-w-xl">
            🇮🇳 India • AI Engineer, MERN Stack Developer, and Machine Learning Developer.
            I build AI chatbots, document Q&A systems, full-stack web apps, and deploy
            ML models with clean APIs and high performance.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-slate-800 px-4 py-1 rounded-full text-xs text-slate-200">
              MERN
            </span>
            <span className="bg-slate-800 px-4 py-1 rounded-full text-xs text-slate-200">
              LangChain
            </span>
            <span className="bg-slate-800 px-4 py-1 rounded-full text-xs text-slate-200">
              Machine Learning
            </span>
            <span className="bg-slate-800 px-4 py-1 rounded-full text-xs text-slate-200">
              AI Agents
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-semibold hover:bg-indigo-400 text-white"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-slate-500 px-6 py-2 text-sm hover:border-indigo-400 hover:text-indigo-300 text-slate-200"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
