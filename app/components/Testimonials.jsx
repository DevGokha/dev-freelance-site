"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Software Engineer",
    message:
      "Dev built an amazing AI chatbot for our project. Fast delivery, clean code, and excellent communication!",
  },
  {
    name: "Anita Verma",
    role: "Startup Founder",
    message:
      "The MERN dashboard exceeded expectations. Dev understands requirements quickly and delivers professional work.",
  },
  {
    name: "Rahul Patil",
    role: "Data Analyst",
    message:
      "Great ML model with 95% accuracy! Dev helped me deploy it and explained everything clearly.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#030712] text-white py-24 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Testimonials
        </h2>

        <p className="text-slate-300 mb-12 max-w-2xl">
          What people say about working with me.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-[#111827] border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-shadow"
            >
              {/* Stars */}
              <div className="flex text-indigo-400 mb-3">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              {/* Message */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                “{item.message}”
              </p>

              {/* Footer */}
              <h4 className="text-white font-semibold">{item.name}</h4>
              <p className="text-indigo-400 text-xs">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
