"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MaterialsPhysicsInnovationPage() {
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
              Materials Physics Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Investigating novel material properties at the atomic level to design smart materials 
              with adaptive characteristics for revolutionary applications.
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
          className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-purple-900/30 dark:to-indigo-800/50"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl md:text-9xl mb-4 opacity-40">🧪</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                /projects/project-3-header.png
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
                  Our Materials Physics Innovation project explores the fundamental properties of 
                  matter at the atomic and molecular level to create next-generation smart materials 
                  with unprecedented adaptive capabilities.
                </p>
                <p>
                  These materials can respond to environmental changes, self-repair damage, and 
                  adapt their properties in real-time, opening up revolutionary applications in 
                  infrastructure, electronics, and environmental sensing.
                </p>
                <p>
                  By combining quantum mechanics, thermodynamics, and advanced fabrication 
                  techniques, we're developing materials that blur the line between the living 
                  and non-living world.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Self-Healing Rate</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Response Time</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">0.3 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-brand-400">Material Variants</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Patent Applications</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">12</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Material Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Material Categories</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🔧",
                  title: "Self-Healing",
                  description: "Materials that automatically repair microscopic damage"
                },
                {
                  icon: "🌡️",
                  title: "Thermoresponsive",
                  description: "Smart materials that adapt to temperature changes"
                },
                {
                  icon: "⚡",
                  title: "Conductive",
                  description: "Advanced conductors with variable electrical properties"
                },
                {
                  icon: "🎯",
                  title: "Shape Memory",
                  description: "Materials that remember and return to original shapes"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="card p-6 text-center"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Atomic Structure Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Atomic Structure Analysis</h2>
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <div className="relative h-40 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-30">⚛️</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Crystal Lattice
                  </p>
                </div>
              </div>
              <div className="relative h-40 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-30">🔬</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Molecular Bonds
                  </p>
                </div>
              </div>
              <div className="relative h-40 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-30">📊</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Property Maps
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              High-resolution analysis of atomic-level material properties and behavior
            </p>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Real-World Applications</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">
                  🏗️ Smart Infrastructure
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Self-healing concrete and adaptive building materials that respond to stress, 
                  temperature, and environmental conditions, significantly extending infrastructure 
                  lifespan and reducing maintenance costs.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">
                  🌱 Environmental Sensors
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Smart materials that change color, conductivity, or structure in response to 
                  pollutants, enabling real-time environmental monitoring and early warning 
                  systems for ecological threats.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">
                  🔧 Adaptive Electronics
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Electronic components that automatically adjust their properties based on 
                  operating conditions, leading to more efficient and longer-lasting electronic 
                  devices and systems.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-600 dark:text-brand-400">
                  🩺 Medical Devices
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Biocompatible materials that adapt to physiological conditions, enabling 
                  implants and medical devices that integrate seamlessly with the human body 
                  and respond to biological signals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 mb-16 bg-brand-50/50 dark:bg-gray-800/50"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Development Timeline</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-400">Q1 2024: Proof of Concept</h4>
                  <p className="text-gray-600 dark:text-gray-400">Successfully demonstrated self-healing properties in laboratory conditions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-400">Q3 2024: Material Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-400">Enhanced response times and durability through atomic-level engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0 animate-pulse"></div>
                <div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-400">Q1 2025: Pilot Testing</h4>
                  <p className="text-gray-600 dark:text-gray-400">Real-world testing in controlled environments and applications</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-700 dark:text-gray-400">Q4 2025: Commercial Preparation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Scaling production and preparing for market introduction</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partnership Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-12 text-center bg-brand-50/80 dark:bg-gray-800/30"
          >
            <h2 className="text-3xl font-bold mb-6">Partnership Opportunities</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              We're seeking industry partners, material scientists, and engineers to help bring 
              these revolutionary materials from the laboratory to real-world applications. 
              Join us in shaping the future of smart materials.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
              >
                Explore Partnership
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