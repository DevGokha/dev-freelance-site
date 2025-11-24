"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Your message has been sent successfully! 🚀");
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] text-white px-6 flex justify-center">
      <div className="max-w-4xl w-full">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-slate-300 mb-8">Feel free to reach out using the form below.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#111827] border border-slate-700"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#111827] border border-slate-700"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#111827] border border-slate-700 h-32"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-400 disabled:bg-indigo-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-green-400 mt-4 font-medium">{success}</p>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-400 mt-4 font-medium">{error}</p>
        )}

      </div>
    </section>
  );
}
