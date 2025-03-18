import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
	return (
		<motion.div
			className="container mx-auto my-16 p-10 text-white bg-black/70 rounded-lg"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h2 className="text-3xl font-bold text-center">Contact Me</h2>
			<form className="mt-6 flex flex-col items-center">
				<Button className="mt-2">Send Message</Button>
			</form>
		</motion.div>
	);
}
