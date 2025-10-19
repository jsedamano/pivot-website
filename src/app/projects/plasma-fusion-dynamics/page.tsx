"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Link from "next/link";

export default function PlasmaFusionDynamicsPage() {
  // Removed unused variables to satisfy lint warnings
  const { } = useTheme();

  useEffect(() => {}, []);

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
              Plasma Fusion Dynamics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Advanced computational modeling and experimental validation of plasma behavior in 
              fusion reactors to optimize confinement and bring clean fusion energy to reality.
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
          className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900/30 dark:to-red-800/50"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl md:text-9xl mb-4 opacity-40">🔬</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                /projects/project-2-header.png
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
                  The Plasma Fusion Dynamics project focuses on understanding and controlling the 
                  complex behavior of plasma in fusion reactors through advanced computational 
                  modeling and cutting-edge experimental techniques.
                </p>
                <p>
                  Our research aims to solve critical challenges in plasma confinement, stability, 
                  and energy output that are essential for making fusion energy commercially viable 
                  and sustainable.
                </p>
                <p>
                  By combining theoretical plasma physics with high-performance computing and 
                  experimental validation, we&apos;re pushing the boundaries of what&apos;s possible in 
                  clean energy generation.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Plasma Temperature</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">150M °C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Confinement Time</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">12.5 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Energy Gain (Q)</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">1.8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Simulations Run</span>
                  <span className="font-bold text-brand-600 dark:text-brand-400">2,847</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Research Methodologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "💻",
                  title: "Computational Modeling",
                  description: "Advanced MHD simulations and particle-in-cell modeling to predict plasma behavior."
                },
                {
                  icon: "🧪",
                  title: "Experimental Validation",
                  description: "Laboratory experiments using tokamak and stellarator configurations."
                },
                {
                  icon: "📊",
                  title: "Data Analysis",
                  description: "Machine learning algorithms to identify patterns in plasma dynamics."
                }
              ].map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="card p-6 text-center"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Simulation Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Plasma Confinement Analysis</h2>
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              <div className="relative h-48 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-30">🌀</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Magnetic Field Topology
                  </p>
                </div>
              </div>
              <div className="relative h-48 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-30">🔥</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Temperature Distribution
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              3D visualization of plasma dynamics and magnetic confinement fields
            </p>
          </motion.div>

          {/* Research Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Research Progress</h2>
            <div className="space-y-8">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-600 dark:text-brand-400">
                      Phase 1: Completed (2023)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Developed comprehensive computational models for plasma behavior in tokamak 
                      reactors. Successfully validated models against experimental data from 
                      international fusion facilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-600 dark:text-brand-400">
                      Phase 2: In Progress (2024)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Optimizing plasma confinement through advanced magnetic field configurations. 
                      Testing novel stellarator designs that could improve stability and reduce 
                      energy losses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-6 border-2 border-brand-200 dark:border-brand-800">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-600 dark:text-brand-400">
                      Phase 3: Upcoming (2025)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Integration of AI-driven control systems for real-time plasma optimization. 
                      Preparation for full-scale reactor design incorporating our research findings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-12 text-center bg-brand-50/80 dark:bg-gray-800/30"
          >
            <h2 className="text-3xl font-bold mb-6">International Collaboration</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              This project involves partnerships with leading fusion research facilities worldwide, 
              including ITER, Princeton Plasma Physics Laboratory, and the Max Planck Institute 
              for Plasma Physics.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
              >
                Join Our Research
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