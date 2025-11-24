export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-slate-800 py-6 flex justify-center">
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left side */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Dev Gokha. All rights reserved.
        </p>

        {/* Right side */}
        <p className="text-xs text-slate-500">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>

      </div>
    </footer>
  );
}
