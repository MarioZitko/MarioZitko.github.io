import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<motion.div
			className="h-screen flex flex-col items-center justify-center text-center"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
			<p className="mt-4 text-lg">I create amazing web experiences.</p>
			<Button className="mt-6">View My Work</Button>
		</motion.div>
	);
}
