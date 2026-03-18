import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import graduation from "../assets/graduation.jpg";
import graduation2 from "../assets/graduation2.jpg";

const educationData = [
	{
		title: "Master of Engineering",
		subtitle: "Information Security and Digital Forensics",
		institution: "Zagreb University of Applied Sciences",
		year: "2022 – 2024 · GPA: 4.6",
		image: graduation2,
	},
	{
		title: "Bachelor of IT Engineering",
		subtitle: "",
		institution: "Zagreb University of Applied Sciences",
		year: "2019 – 2022 · GPA: 4.5",
		image: graduation,
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export default function Education() {
	return (
		<section id="education" className="container mx-auto my-24 px-4 w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold text-center mb-12">Education</h2>
			</motion.div>

			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
			>
				{educationData.map((edu, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						whileHover={{ y: -6, transition: { duration: 0.2 } }}
					>
						<Card className="overflow-hidden h-full bg-white/5 backdrop-blur-sm border-zinc-800/50 hover:border-indigo-500/30 transition-colors duration-300">
							<div className="relative h-56 w-full overflow-hidden">
								<img
									src={edu.image}
									alt={edu.title}
									className="w-full h-full object-cover p-2 rounded-t-md transition-transform duration-500 hover:scale-105"
									loading="lazy"
								/>
							</div>
							<CardHeader className="pb-2">
								<CardTitle className="text-lg text-zinc-200">
									{edu.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{edu.subtitle && (
									<p className="text-sm text-indigo-300/80 mb-1">{edu.subtitle}</p>
								)}
								<p className="text-sm text-zinc-400">{edu.institution}</p>
								<p className="text-sm text-zinc-500 mt-1">{edu.year}</p>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
