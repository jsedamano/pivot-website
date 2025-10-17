"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

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
            About Us
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-12"
          >
            Get to know the PIVOT team
          </motion.p>
        </div>
      </section>

      {/* ABOUT PIVOT SECTION */}
      <section className="container-max pt-6 pb-12 md:pt-8 md:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About PIVOT
            </h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                PIVOT (Physics Infused Vision for Onward Thinking) is a student-led organization at Virginia Tech 
                that brings together minds from diverse academic backgrounds to tackle real-world challenges through 
                physics-driven innovation.
              </p>
              <p>
                Our interdisciplinary approach combines theoretical physics with practical engineering, creating 
                solutions that are both scientifically sound and practically viable. We believe that the principles 
                of physics can unlock new possibilities in every field.
              </p>
              <p>
                Founded by passionate students who wanted to bridge the gap between academic learning and real-world 
                application, PIVOT has grown into a thriving community of innovators, researchers, and problem-solvers.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card p-4 hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/team1.png" 
                    alt="PIVOT Team Photo 1" 
                    width={300} 
                    height={200} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="card p-4 hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/team3.png" 
                    alt="PIVOT Team Photo 3" 
                    width={300} 
                    height={200} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="card p-4 hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/team2.png" 
                    alt="PIVOT Team Photo 2" 
                    width={300} 
                    height={200} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="card p-4 hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/team4.png" 
                    alt="PIVOT Team Photo 4" 
                    width={300} 
                    height={200} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="container-max pt-6 pb-12 md:pt-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Our Mission
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 md:p-12"
          >
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                To empower students from diverse academic backgrounds to develop and implement projects 
                that use physics-based reasoning to tackle practical problems in society, technology, and
                the environment.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                Innovation
              </div>
              <div className="flex items-center gap-2 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                Collaboration
              </div>
              <div className="flex items-center gap-2 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                Impact
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* GET INVOLVED SECTION */}
      <section className="container-max pt-6 pb-8 md:pt-8 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Get Involved
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {[
              {
                icon: "🎓",
                title: "Join as a Student",
                desc: "Open to all majors! Bring your unique perspective to our interdisciplinary team.",
                action: "Apply Now"
              },
              {
                icon: "🔬",
                title: "Research Collaboration",
                desc: "Partner with us on research projects or propose new initiatives.",
                action: "Contact Us"
              },
              {
                icon: "🤝",
                title: "Industry Partnership",
                desc: "Work with us to solve real-world challenges and support student innovation.",
                action: "Get in Touch"
              }
            ].map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{option.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 transition"
                >
                  {option.action}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

  {/* WE LOVE SECTION */}
  <section className="container-max pt-4 pb-6 md:pt-6 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-12">
            We Love
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                emoji: "⚛️", 
                title: "Physics", 
                desc: "The fundamental laws that govern our universe" 
              },
              { 
                emoji: "💡", 
                title: "Innovation", 
                desc: "Creating solutions that didn't exist before" 
              },
              { 
                emoji: "🤖", 
                title: "Technology", 
                desc: "Pushing the boundaries of what's possible" 
              },
              { 
                emoji: "🎯", 
                title: "Problem Solving", 
                desc: "Finding elegant solutions to complex challenges" 
              }
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
                className="card p-6 text-center cursor-pointer"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
