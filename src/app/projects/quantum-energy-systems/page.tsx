"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function QuantumEnergySystemsPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-0 md:pt-12 md:pb-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(83,127,202,0.15),transparent)] dark:bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(126,160,216,0.12),transparent)]"
        />
        
        <div className="container-max">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors font-medium"
            >
              ← Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-brand-600 dark:text-brand-400"
            >
              Quantum Energy Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Exploring quantum mechanical principles to develop next-generation energy storage 
              and conversion systems that leverage quantum coherence effects for unprecedented efficiency.
            </motion.p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="container-max pt-0 pb-8 md:pt-0 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/50"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl md:text-9xl mb-4 opacity-40">⚡</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                /projects/project-1-header.png
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="container-max pt-0 pb-12 md:pt-0 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 md:grid-cols-2 mb-16"
          >
            {/* Project Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Our Quantum Energy Systems project represents a groundbreaking approach to energy 
                  storage and conversion, utilizing quantum mechanical phenomena to achieve efficiency 
                  levels previously thought impossible.
                </p>
                <p>
                  By harnessing quantum coherence, superposition, and entanglement, we're developing 
                  revolutionary energy systems that could transform how we generate, store, and 
                  distribute clean energy on a global scale.
                </p>
                <p>
                  This interdisciplinary research combines theoretical quantum physics with practical 
                  engineering applications, bridging the gap between cutting-edge science and 
                  real-world energy solutions.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Efficiency Improvement</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Energy Density</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">2.3x Higher</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Project Duration</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">3 Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Team Size</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">12 Researchers</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "🔬",
                  title: "Quantum Coherence",
                  description: "Investigating how quantum coherence can be maintained in macroscopic energy systems to enhance performance."
                },
                {
                  icon: "⚡",
                  title: "Energy Conversion",
                  description: "Developing novel quantum-enhanced photovoltaic and thermoelectric conversion mechanisms."
                },
                {
                  icon: "🔋",
                  title: "Storage Systems",
                  description: "Creating quantum-based energy storage solutions with unprecedented capacity and efficiency."
                }
              ].map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="card p-6 text-center"
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Analysis</h2>
            <div className="relative h-64 md:h-80 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-30">📊</div>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  Efficiency vs. Time Graph Placeholder
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Interactive performance visualization will be displayed here
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Findings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Current Findings</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">
                  Breakthrough Discovery
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We've successfully demonstrated quantum coherence preservation in energy storage 
                  systems at room temperature, achieving a 40% improvement in storage density 
                  compared to conventional batteries.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">
                  Efficiency Gains
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our quantum-enhanced solar cells have achieved 47% efficiency in laboratory 
                  conditions, nearly doubling the performance of traditional photovoltaic systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team & Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-12 text-center bg-brand-50/80 dark:bg-gray-800/30"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Research</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              We're looking for passionate researchers, graduate students, and industry partners 
              to join this groundbreaking project. Together, we can revolutionize the future of energy.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
              >
                Get Involved
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}