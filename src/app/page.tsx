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
              className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 px-6 py-3 transition font-medium transform-gpu transition-transform duration-150 ease-out hover:scale-105"
            >
              Explore Projects
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 px-6 py-3 transition font-medium transform-gpu transition-transform duration-150 ease-out hover:scale-105"
            >
              About Us
            </Link>
          </motion.div>

          {/* GobblerConnect Animated Link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: "easeOut" }}
            className="mt-6"
          >
            <motion.a
              href="https://gobblerconnect.vt.edu/organization/pivot"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
              className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 px-6 py-3 transition font-medium inline-flex items-center transform-gpu transition-transform duration-150 ease-out hover:scale-105"
            >
              <span className="text-sm font-medium">GobblerConnect</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-max pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-12 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#4b5563' }}
              >
                Already composed of members from over{" "}
                <motion.span 
                  whileHover={{ scale: 1.1, color: "rgb(83, 127, 202)" }}
                  className="font-bold text-brand-600 cursor-pointer transition-colors"
                >
                  9 majors
                </motion.span>
                , we are excited to start forging our path and sharing physics-driven solutions with everyone!
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#4b5563' }}
              >
                We have a couple projects under way, so stay tuned for more in depth postings of our process.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#4b5563' }}
              >
                If you or anyone you know is interested in learning more or joining our movement,{" "}
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="font-semibold text-brand-600 dark:text-brand-400"
                >
                  please reach out
                </motion.span>
                , we would love to have you!
              </motion.p>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-brand-100 dark:bg-brand-900/30 rounded-full opacity-50"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-6 left-6 w-6 h-6 bg-brand-200 dark:bg-brand-800/40 rounded-full opacity-40"
              />
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 left-4 w-4 h-4 bg-brand-300 dark:bg-brand-700/50 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
