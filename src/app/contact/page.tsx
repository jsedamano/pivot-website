"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "connect@vtpivot.org",
      href: "mailto:connect@vtpivot.org",
      description: "Send us an email for inquiries, collaborations, or questions"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "PIVOT at VT",
      href: "https://www.linkedin.com/company/pivotatvt/",
      description: "Connect with us professionally and stay updated on our work"
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@vtpivot",
      href: "https://www.instagram.com/vtpivot?igsh=M3NoNmRpNzVibjlx",
      description: "Follow our journey and behind-the-scenes content"
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
            Contact
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mb-12"
          >
            Let&apos;s connect and collaborate
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="container-max pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re interested in collaboration, have questions about our research, 
              or want to learn more about PIVOT, we&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
                className="card p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    transition: { duration: 0.2 } 
                  }}
                  className="text-5xl mb-4 inline-block"
                >
                  {method.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2 text-brand-600 dark:text-brand-400">
                  {method.label}
                </h3>
                
                <p className="text-lg font-medium mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {method.value}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Additional Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8 md:p-12 text-center mt-12 bg-brand-50/80 dark:bg-gray-800/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Join us in our mission to bridge the gap between cutting-edge physics research 
              and real-world applications. Together, we can create solutions that matter.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:connect@vtpivot.org"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
              >
                Start the Conversation
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
