"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(83,127,202,0.15),transparent)] dark:bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(126,160,216,0.12),transparent)]"
        />
        
        <div className="container-max text-center">
          {/* Big Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Image 
              src={mounted && resolvedTheme === "dark" ? "/pivot-icon-white.png" : "/pivot-icon-black.png"}
              alt="PIVOT Logo" 
              width={200} 
              height={200} 
              className="mx-auto"
              priority
            />
          </motion.div>

          {/* Title Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            This is PIVOT!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-12"
          >
            Physics Infused Vision for Onward Thinking
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/projects"
              className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
            >
              Explore Projects
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-max pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1.6fr] items-center">
          {/* Contact Card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-brand-500/10 ring-2 ring-brand-500/40 grid place-items-center">
                <span className="text-brand-600 font-semibold">π</span>
              </div>
              <h2 className="text-xl font-semibold tracking-wide">PIVOT @ VT</h2>
            </div>

            <div className="mt-6 text-sm">
              <a className="link-underline" href="mailto:contact@pivot.edu">
                contact@pivot.edu
              </a>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400">
                ABOUT US
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                We are PIVOT (Physics Infused Vision for Onward Thinking), a student-led org at Virginia Tech. Our members
                come from 9+ majors and collaborate on innovative, physics-driven solutions to real-world challenges.
              </p>

              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 transition"
              >
                Learn more
              </Link>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="card p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Innovating Through Physics
            </h2>

            <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Already composed of members from over 9 majors, we are excited to start forging our path and sharing
                physics-driven solutions with everyone! We have a couple projects under way—stay tuned for more in-depth
                postings of our process.
              </p>
              <p>
                If you or anyone you know is interested in learning more or joining our movement, please reach out—we'd
                love to have you!
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Our Research
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 transition"
              >
                Join / Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container-max py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Focus Areas
        </motion.h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Energy Systems",
              desc: "Optimizing campus microgrids with physics-informed models.",
            },
            {
              title: "Materials & Sensors",
              desc: "Low-cost sensing for environmental monitoring.",
            },
            {
              title: "Robotics & Control",
              desc: "Autonomous platforms for field data collection.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card p-6"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.desc}</p>
              <Link href="/projects" className="link-underline">
                See projects →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
