import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
	return (
		<motion.div
			className="container mx-auto my-16 p-10 text-white backdrop-blur-md bg-black/30 rounded-lg shadow-lg"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>
			<div className="flex justify-center gap-6">
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
