"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918319848434?text=Hi%20Dev,%20I%20want%20to%20hire%20you."
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-400 transition transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
