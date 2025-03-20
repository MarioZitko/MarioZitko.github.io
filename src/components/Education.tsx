import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import graduation from "../assets/graduation.jpg";
import graduation2 from "../assets/graduation2.jpg";

const educationData = [
	{
		title: "Master of Engineering",
		subtitle: "Information Security and Digital Forensics",
		institution: "Zagreb University of Applied Sciences",
		year: "2022 - 2024 • GPA: 4.6",
		image: graduation2,
	},
	{
		title: "Bachelor of IT Engineering",
		subtitle: "",
		institution: "Zagreb University of Applied Sciences",
		year: "2019 - 2022 • GPA: 4.5",
		image: graduation,
	},
];

export default function Education() {
	return (
		<motion.div
			className="container mx-auto my-24 px-4"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<section id="education">
				<h2 className="text-4xl font-bold text-center mb-12">Education</h2>
			</section>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{educationData.map((edu, index) => (
					<motion.div
						key={index}
						whileHover={{ y: -5 }}
						transition={{ duration: 0.2 }}
					>
						<Card className="overflow-hidden h-full bg-white/5 backdrop-blur-sm border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
							<div className="relative h-64 w-full">
								<img
									src={edu.image}
									alt={edu.title}
									className="w-full h-full object-cover p-2 rounded-t-md"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-xl text-zinc-200">
									{edu.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{edu.subtitle && (
									<p className="text-sm text-zinc-400">{edu.subtitle}</p>
								)}
								<p className="text-sm text-zinc-400">{edu.institution}</p>
								<p className="text-sm text-zinc-400 mt-1">{edu.year}</p>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
