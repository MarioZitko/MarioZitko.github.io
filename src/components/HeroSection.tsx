import { useEffect, useState, JSX } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import cv from "@/assets/cv.pdf";
import { scrollToSection } from "@/utils/scroll";
import { useAnalytics } from "@/hooks/useAnalytics";

function useTypingAnimation(text: string, delay = 900, speed = 55) {
	const [displayed, setDisplayed] = useState("");
	const [done, setDone] = useState(false);

	useEffect(() => {
		let i = 0;
		const startTimer = setTimeout(() => {
			const interval = setInterval(() => {
				setDisplayed(text.slice(0, ++i));
				if (i >= text.length) {
					clearInterval(interval);
					setDone(true);
				}
			}, speed);
			return () => clearInterval(interval);
		}, delay);
		return () => clearTimeout(startTimer);
	}, [text, delay, speed]);

	return { displayed, done };
}

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.18, delayChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
	},
};

const socialVariants = {
	hidden: { opacity: 0, x: -16 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function HeroSection(): JSX.Element {
	const { trackCVDownload, trackSocialClick } = useAnalytics();
	const { displayed: typedRole, done: typingDone } = useTypingAnimation(
		"Software Engineer & Tech Lead",
		900,
		55,
	);

	return (
		<section className="relative h-screen flex flex-col items-center justify-center text-center px-4 w-full">
			{/* Subtle spotlight behind content */}
			<div
				className="absolute inset-0 pointer-events-none"
				aria-hidden="true"
				style={{
					background:
						"radial-gradient(ellipse 70% 60% at 50% 45%, rgba(59,130,246,0.07) 0%, transparent 100%)",
				}}
			/>

			<motion.div
				className="relative z-10 flex flex-col items-center"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Greeting */}
				<motion.p
					variants={itemVariants}
					className="text-sm font-medium tracking-[0.3em] uppercase text-blue-400/80 mb-4"
				>
					Hi, I'm
				</motion.p>

				{/* Name */}
				<motion.h1
					variants={itemVariants}
					className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text leading-tight"
				>
					Mario Žitković
				</motion.h1>

				{/* Typing subtitle */}
				<motion.div
					variants={itemVariants}
					className="text-xl md:text-2xl text-gray-300 mb-6 h-8 flex items-center"
				>
					<span>{typedRole}</span>
					{!typingDone && (
						<span className="inline-block w-0.5 h-5 bg-blue-400 ml-1 animate-pulse" />
					)}
				</motion.div>

				{/* Freelance availability badge */}
				<motion.div variants={itemVariants} className="mb-6">
					<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
						Open to freelance projects
					</span>
				</motion.div>

				{/* Description */}
				<motion.p
					variants={itemVariants}
					className="max-w-xl text-base md:text-lg mb-10 text-gray-400 leading-relaxed"
				>
					Passionate about building efficient, scalable solutions. Specialised
					in full-stack development and leading high-quality engineering teams.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div variants={itemVariants} className="flex gap-4 mb-10">
					<Button
						asChild
						variant="outline"
						className="gap-2 text-neutral-800 hover:text-black hover:scale-105 transition-transform duration-200"
					>
						<a
							href={cv}
							download="Mario-Zitkovic-CV.pdf"
							onClick={trackCVDownload}
						>
							<FaFileDownload className="w-4 h-4" />
							Download CV
						</a>
					</Button>
					<Button
						asChild
						variant="outline"
						className="gap-2 text-neutral-800 hover:text-black hover:scale-105 transition-transform duration-200"
					>
						<a href="#contact" onClick={() => scrollToSection("contact")}>
							Contact Me
						</a>
					</Button>
				</motion.div>

				{/* Social links */}
				<motion.div variants={containerVariants} className="flex gap-8">
					{[
						{
							href: "https://github.com/MarioZitko",
							icon: <SiGithub size={22} />,
							label: "GitHub",
							platform: "GitHub",
						},
						{
							href: "https://www.linkedin.com/in/mariozitkovic/",
							icon: <FaLinkedinIn size={22} />,
							label: "LinkedIn",
							platform: "LinkedIn",
						},
					].map(({ href, icon, label, platform }) => (
						<motion.a
							key={platform}
							variants={socialVariants}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
							onClick={() => trackSocialClick(platform)}
							whileHover={{ scale: 1.08 }}
						>
							{icon}
							<span className="text-sm font-medium">{label}</span>
						</motion.a>
					))}
				</motion.div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
				animate={{ y: [0, 8, 0] }}
				transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<span className="text-xs tracking-widest uppercase">Scroll</span>
				<ChevronDown size={16} />
			</motion.div>
		</section>
	);
}
