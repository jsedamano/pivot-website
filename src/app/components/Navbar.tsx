"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/research", label: "RESEARCH" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 backdrop-glass">
      <nav className="container-max flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          {/* Logo (usa tu /public/next.svg como placeholder o tu logo) */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/next.svg" alt="PIVOT" width={28} height={28} className="opacity-80 dark:invert-0" />
            <span className="font-semibold tracking-wider">PIVOT @ VT</span>
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide hover:text-brand-600 dark:hover:text-brand-400 transition"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={clsx(
          "md:hidden transition-[max-height] overflow-hidden border-t border-black/5 dark:border-white/10",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container-max py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm tracking-wide hover:text-brand-600 dark:hover:text-brand-400"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
