"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function QuantumMechanicsTradingBotPage() {

	return (
		<main>
			{/* HERO SECTION */}
			<section className="relative overflow-hidden pt-8 pb-8 md:pt-12 md:pb-12">
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
							Quantum Mechanics Trading Bot
						</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
						className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
					>
						PIVOT uses physics to highlight real-world applications. We explore a niche idea in finance—treating stocks like quantum objects. Since both markets and quantum systems feel unpredictable, we built a proof-of-concept bot that trades on paper, not for profit, but to show the power of physics-driven thinking.
					</motion.p>
					</div>
				</div>
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
									We represented NYSE stocks as quantum‑like objects and kept the math at a
									manageable level. The goal was clarity and demonstration over complexity—bringing
									physics and finance together in a way that’s hands‑on and testable.
								</p>
								<p>
									The outcome is a bot that can place automatic trades on a paper‑trading account
									via API. Its purpose is educational: to show we can translate core physics ideas
									into working software.
								</p>
							</div>
						</div>

						{/* Key Metrics */}
						<div className="card p-8">
							<h3 className="text-xl font-bold mb-6">At a Glance</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600 dark:text-gray-400">Mode</span>
									<span className="font-bold text-brand-600 dark:text-brand-400">Paper Trading</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600 dark:text-gray-400">Focus</span>
									<span className="font-bold text-brand-600 dark:text-brand-400">Proof‑of‑Concept</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600 dark:text-gray-400">Discipline</span>
									<span className="font-bold text-brand-600 dark:text-brand-400">Physics × Finance</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600 dark:text-gray-400">Automation</span>
									<span className="font-bold text-brand-600 dark:text-brand-400">API‑Driven</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* The Idea in One Equation */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<h2 className="text-3xl font-bold mb-6 text-center">The Idea in One Equation</h2>
						<div className="card p-6 md:p-10 text-center">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-2xl md:text-3xl font-semibold tracking-wide"
							>
								Ĥ = −ℏ²/(2m) · ∂²/∂r² + e · F · r · cos(ωt)
							</motion.div>
							<p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
								This Hamiltonian represents total energy of a particle. We kept the math simple
								enough to be practical, then mapped each term to market features for a clear
								demonstration.
							</p>
						</div>
					</motion.div>

					{/* Mapping Physics to Markets */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<h2 className="text-3xl font-bold mb-8 text-center">Mapping Physics to Markets</h2>
						<div className="grid gap-6 md:grid-cols-3">
							{[ 
								{ icon: "⚖️", title: "m → Market Cap", desc: "Mass corresponds to market capitalization—heavier stocks move differently." },
								{ icon: "📦", title: "F → Volume", desc: "Field strength maps to trading volume—the push from market activity." },
								{ icon: "⏱️", title: "ω → Volume Cycle", desc: "Frequency reflects cyclical volume patterns observed in some assets." },
							].map((m, i) => (
								<motion.div
									key={m.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.6, delay: 0.1 * i }}
									whileHover={{ scale: 1.04 }}
									className="card p-6 text-center"
								>
									<div className="text-4xl mb-3">{m.icon}</div>
									<h3 className="text-lg font-bold mb-2">{m.title}</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{m.desc}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

				{/* Implementation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-bold mb-8 text-center">Implementation</h2>
					<div className="grid gap-8 md:grid-cols-2 items-stretch mb-8">
						<div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900/30 dark:to-purple-800/50">
							<Image
								src="/projects/qm-trading-bot/qm-trading-bot-1.png"
								alt="Quantum Mechanics Trading Bot"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>

						<div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800">
							<Image
								src="/projects/qm-trading-bot/qm-trading-bot-2.png"
								alt="Illustrative backtest visualization"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
								className="object-cover"
							/>
						<div className="absolute bottom-2 right-3 text-xs text-white/80 bg-black/30 px-2 py-1 rounded">
							</div>
						</div>
					</div>

					<div className="card p-8">
						<h3 className="text-2xl font-bold mb-4">How We Built It</h3>
						<div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
							<p>
								We implemented the concept with a simple, modular pipeline—ingesting market data,
								applying the physics‑inspired logic, and sending orders to a paper‑trading API.
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li><span className="font-medium">Education first:</span> the goal wasn&apos;t profit, it was demonstration.</li>
								<li><span className="font-medium">Fast iteration:</span> keep math and code lightweight to move quickly.</li>
								<li><span className="font-medium">Clear mapping:</span> tie each physics term to an intuitive market feature.</li>
							</ul>
						</div>
					</div>
				</motion.div>
				{/* Next Steps */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="card p-8 md:p-12 text-center bg-brand-50/80 dark:bg-gray-800/30"
					>
						<h2 className="text-3xl font-bold mb-6">Collaboration</h2>
						<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
							We love turning physics ideas into practical demos. If you’re interested in data
							partnerships, validation, or exploring real‑time experiments, we’d love to connect.
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
				</div>
			</section>
		</main>
	);
}