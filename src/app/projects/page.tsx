"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: "linear-generator",
      name: "Linear Generator",
      image: "/projects/linear-generator/linear-generator-1.png",
      description: "Wearable power you make. PIVOT’s 3D linear generator harvests everyday motion via Faraday’s law—charge on the go, power safety gear, cut costs, and lighten the grid load.",
      slug: "linear-generator"
    },
    {
      id: "plasma-fusion-dynamics",
      name: "Plasma Fusion Dynamics",
      image: "/projects/bluey.png", 
      description: "Advanced computational modeling and experimental validation of plasma behavior in fusion reactors. Our research aims to optimize plasma confinement and stability to bring clean fusion energy closer to commercial viability.",
      slug: "plasma-fusion-dynamics"
    }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-0 md:pt-12 md:pb-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(83,127,202,0.15),transparent)] dark:bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(126,160,216,0.12),transparent)]"
        />
        
        <div className="container-max text-center">
          {/* Big Header */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8"
          >
            Projects
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-12"
          >
            Innovation through physics
          </motion.p>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="container-max pt-6 pb-8 md:pt-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Our Current Initiatives
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            These are our flagship projects where cutting-edge physics meets real-world applications. 
            Each initiative represents our commitment to translating theoretical breakthroughs into 
            practical solutions that can make a meaningful impact on society and the environment.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="container-max pt-0 pb-12 md:pt-0 md:pb-16">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="w-full"
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="card p-0 overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="p-8 md:p-12 pb-6 md:pb-8 flex items-center">
                    <motion.h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-brand-600 dark:text-brand-400 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-300"
                    >
                      {project.name}
                    </motion.h3>
                  </div>

                  {/* Project Image */}
                  <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Project Description */}
                  <div className="p-8 md:p-12 pt-6 md:pt-8">
                    <motion.p
                      className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Read More Indicator */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="container-max pt-6 pb-4 md:pt-8 md:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="card p-8 md:p-12 text-center bg-brand-50/80 dark:bg-gray-800/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in Collaborating?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
            We're always looking for partnerships with researchers, institutions, and organizations 
            who share our vision of physics-driven innovation. Let's work together to push the 
            boundaries of what's possible.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
            >
              Get in Touch
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
