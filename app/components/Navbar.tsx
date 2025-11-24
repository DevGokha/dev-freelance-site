"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `block py-2 hover:text-indigo-300 transition ${
      active === id ? "text-indigo-400 font-semibold" : "text-slate-300"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-indigo-500/80 text-center text-lg font-bold leading-8">
            D
          </span>
          <span className="text-sm font-semibold tracking-wide">Dev Gokha</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#portfolio" className={linkClass("portfolio")}>Portfolio</a>
          <a href="#process" className={linkClass("process")}>How I Work</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
          <a href="#testimonials" className={linkClass("testimonials")}>Reviews</a>
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-semibold shadow-md shadow-indigo-500/30 hover:bg-indigo-400"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800 px-6 py-4 space-y-3">
          <a href="#services" onClick={() => setOpen(false)} className={linkClass("services")}>Services</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className={linkClass("portfolio")}>Portfolio</a>
          <a href="#process" onClick={() => setOpen(false)} className={linkClass("process")}>How I Work</a>
          <a href="#contact" onClick={() => setOpen(false)} className={linkClass("contact")}>Contact</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className={linkClass("testimonials")}>Reviews</a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold shadow-md text-center hover:bg-indigo-400"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
