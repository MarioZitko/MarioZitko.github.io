import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import cv from "@/assets/CV.pdf";
import { scrollToSection } from "@/utils/scroll";

export default function HeroSection() {
	return (
		<motion.div
			className="h-screen flex flex-col items-center justify-center text-center px-4"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h1 className="text-5xl font-bold mb-4">Mario Žitković</h1>
			<h2 className="text-2xl text-gray-200 mb-6">Software Developer</h2>

			<p className="max-w-2xl text-lg mb-8 text-gray-300">
				Passionate about creating efficient, scalable solutions with modern
				technologies. Specialized in full-stack development.
			</p>

			<div className="flex gap-4 mb-8">
				<Button
					asChild
					variant="outline"
					className="gap-2 text-neutral-800 hover:text-black"
				>
					<a href={cv} download>
						<FaFileDownload className="w-4 h-4" />
						Download CV
					</a>
				</Button>
				<Button
					asChild
					variant="outline"
					className="gap-2 text-neutral-800 hover:text-black"
				>
					<a href="#projects" onClick={scrollToSection("projects")}>
						View My Work
					</a>
				</Button>
			</div>

			<div className="flex gap-6">
				<a
					href="https://github.com/MarioZitko"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:text-blue-400 transition-colors"
				>
					<SiGithub size={24} />
					<span>GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/mariozitkovic/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:text-blue-400 transition-colors"
				>
					<SiLinkedin size={24} />
					<span>LinkedIn</span>
				</a>
			</div>
		</motion.div>
	);
}
