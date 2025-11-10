"use client";


import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


function ImageGallery() {
	const images = Array.from({ length: 9 }, (_, i) => `/projects/linear-generator/linear-generator-${i + 1}.png`);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (!open) return;
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") setOpen(false);
			if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
			if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<div>
			<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{images.map((src, i) => (
					<motion.button
						key={src}
						onClick={() => { setIndex(i); setOpen(true); }}
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.45 + 0.05 * i }}
						whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
						className="relative h-48 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg p-0 border-0"
					>
						<Image
							src={src}
							alt={`Linear Generator ${i + 1}`}
							fill
							sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 25vw"
							className="object-cover"
						/>
					</motion.button>
				))}
			</div>
			{open && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={() => setOpen(false)}
					/>
					<motion.div
						initial={{ y: 20, scale: 0.98 }}
						animate={{ y: 0, scale: 1 }}
						transition={{ duration: 0.28 }}
						className="relative z-10 w-full max-w-4xl rounded-xl overflow-hidden"
					>
						<div className="relative bg-black/90 aspect-[16/10]">
							<Image
								src={images[index]}
								alt={`Linear Generator large ${index + 1}`}
								fill
								sizes="(max-width: 1024px) 90vw, 1200px"
								className="object-contain"
								priority
							/>
						</div>
						<button
							aria-label="Previous"
							onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
							className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-900/70 p-2 shadow"
						> ‹
						</button>
						<button
							aria-label="Next"
							onClick={() => setIndex((i) => (i + 1) % images.length)}
							className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-900/70 p-2 shadow"
						> ›
						</button>
						<button
							aria-label="Close"
							onClick={() => setOpen(false)}
							className="absolute right-4 top-4 rounded-full bg-white/90 dark:bg-gray-900/70 p-2 shadow"
						> ✕
						</button>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}

export default function LinearGeneratorPage() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();
	useEffect(() => { setMounted(true); }, []);

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
							Wearable Power Generation
						</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
								className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
								style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#4b5563' }}
							>
								Humans use millions of joules daily, while an iPhone 17 Pro Max battery holds just ~70 kJ (under 5% of daily human energy). PIVOT aims to save money, support green energy, and ease grid demand by capturing the energy people naturally expend.
							</motion.p>
					</div>
				</div>
			</section>

			{/* PROJECT STORY & INFOGRAPHIC */}
			<section className="container-max pt-0 pb-12 md:pt-0 md:pb-16">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<h2 className="text-3xl font-bold mb-6">The PIVOT Approach</h2>
							<div className="space-y-4 leading-relaxed text-lg">
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.7, delay: 0.2 }}
									style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#374151' }}
								>
									Our method? Personal generators. By applying Faraday’s law, a magnet moving through a copper coil, we can decrease your reliance on home electricity. Imagine charging your phone while walking around campus, or powering emergency devices on a hike, all from your own movement.
								</motion.p>
								<motion.p
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.7, delay: 0.4 }}
									style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#374151' }}
								>
									PIVOT’s 3D “linear” generator is designed to go anywhere you go. The concept is simple, but our team’s ingenuity and unique mindsets are creating a compact, efficient product that can change how you power your life.
								</motion.p>
							</div>
					</motion.div>

					{/* Infographic / Comparison */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="mb-16 flex flex-col md:flex-row gap-8 items-center justify-center"
					>
						<motion.div
							className="card p-6 text-center"
							initial={{ scale: 0.95, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.7, delay: 0.2 }}
						>
							<div className="text-5xl mb-4">🧍‍♂️</div>
							<h3 className="text-xl font-bold mb-3">1 Human (Daily Energy)</h3>
							<p className="text-gray-600 dark:text-gray-300 text-2xl font-extrabold">2,000,000 J</p>
						</motion.div>
						<motion.div
							className="card p-6 text-center"
							initial={{ scale: 0.95, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.7, delay: 0.3 }}
						>
							<div className="text-5xl mb-4">📱</div>
							<h3 className="text-xl font-bold mb-3">iPhone 17 Pro Max Battery</h3>
							<p className="text-gray-600 dark:text-gray-300 text-2xl font-extrabold">70,000 J</p>
						</motion.div>
						<motion.div
							className="card p-6 text-center"
							initial={{ scale: 0.95, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.7, delay: 0.4 }}
						>
							<div className="text-5xl mb-4">🔋</div>
							<h3 className="text-xl font-bold mb-3">Potential Savings</h3>
							<p className="text-gray-600 dark:text-gray-300 text-2xl font-extrabold">Up to 95%</p>
						</motion.div>
					</motion.div>

					{/* How it Works + Featured Image */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<h2 className="text-3xl font-bold mb-8 text-center">How Does It Work?</h2>
						<div className="grid gap-8 md:grid-cols-4 items-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.7 }}
								className="md:col-span-2 col-span-1 flex items-center justify-center"
							>
								<motion.div
									className="relative w-full max-w-xs md:max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
									initial={{ scale: 1.05 }}
									animate={{ scale: [1.05, 1, 1.05] }}
									transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
								>
									<Image
										src="/projects/linear-generator/linear-generator-1.png"
										alt="Linear Generator wearable concept"
										fill
										sizes="(max-width: 768px) 80vw, 400px"
										className="object-cover"
										priority
									/>
								</motion.div>
							</motion.div>
								<div className="md:col-span-2 col-span-1 grid gap-6">
									{[
										{
											icon: "🧲",
											title: "Faraday’s Law",
											description: "A magnet moves through a copper coil, generating electricity from your motion."
										},
										{
											icon: "🎒",
											title: "Wearable Design",
											description: "Compact, 3D linear generator fits in your bag, on your belt, or in your gear."
										},
										{
											icon: "🔋",
											title: "Charge On the Go",
											description: "Power your phone or emergency devices while you walk, hike, or commute."
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
											<p
												className="text-sm leading-relaxed"
												style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#6b7280' }}
											>
												{area.description}
											</p>
										</motion.div>
									))}
								</div>
						</div>
					</motion.div>

					{/* Image gallery (expanded to 9 images) with interactive modal */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>

						{/* image sources */}
						{/* Local array so it's easy to update images */}
						<ImageGallery />
					</motion.div>

					{/* Call to Action */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="card p-8 md:p-12 text-center bg-brand-50/80 dark:bg-gray-800/30"
					>
						<h2 className="text-3xl font-bold mb-6">Ready to Power Up?</h2>
							<p
								className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
								style={{ color: mounted && resolvedTheme === 'dark' ? '#d1d5db' : '#374151' }}
							>
								Join us in revolutionizing personal energy. Whether you’re a student, hiker, or just want to save on your electric bill, PIVOT’s linear generator is designed for you. Let’s build a greener, more independent future together.
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
								> →
								</motion.span>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}