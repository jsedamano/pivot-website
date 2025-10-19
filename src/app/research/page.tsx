"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResearchPage() {
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
            Research
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-12"
          >
            Physics-driven innovation in progress
          </motion.p>
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section className="container-max pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-full opacity-30"
              />
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -8, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-12 left-12 w-12 h-12 bg-brand-200 dark:bg-brand-800/40 rounded-full opacity-40"
              />
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 6, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute top-1/2 left-8 w-8 h-8 bg-brand-300 dark:bg-brand-700/50 rounded-full opacity-20"
              />
            </div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center"
              >
                Coming Soon...
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4 mb-8 text-center"
              >
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  We&apos;re working hard to bring you detailed insights into our research initiatives, 
                  methodologies, and groundbreaking discoveries.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our research spans across multiple disciplines, combining theoretical physics 
                  with practical applications to solve real-world challenges.
                </p>
              </motion.div>

              {/* Meanwhile Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-brand-50/80 dark:bg-gray-800/30 rounded-xl p-6 md:p-8 mb-8 shadow-sm text-center"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Meanwhile, check out our projects!
                </h3>
                <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
                  Explore our current initiatives and see how we&apos;re applying physics-driven 
                  solutions to tackle challenges in energy, environment, and technology.
                </p>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link
                    href="/projects"
                    className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium inline-flex items-center gap-2"
                  >
                    View Our Projects
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Features Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {[
                  { icon: "📊", title: "Research Data", desc: "Detailed analysis and findings" },
                  { icon: "🔬", title: "Methodologies", desc: "Our research approaches" },
                  { icon: "📝", title: "Publications", desc: "Academic papers and reports" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * i,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 } 
                    }}
                    className="card p-6 text-center cursor-pointer dark:bg-gray-400"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="container-max pt-6 pb-2 md:pt-8 md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to collaborate on research?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We&apos;re always looking for passionate researchers, students, and institutions 
            to collaborate with. Reach out to discuss potential partnerships!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
