import { motion } from "framer-motion";

interface EducationEntry {
	degree: string;
	field: string;
	institution: string;
	period: string;
	grade: string;
	highlights: string[];
	skills?: string[];
}

const educationData: EducationEntry[] = [
	{
		degree: "Master's Degree",
		field: "Information Security & Digital Forensics",
		institution: "Zagreb University of Applied Sciences",
		period: "Sep 2022 – Jul 2024",
		grade: "GPA: 4.6",
		highlights: [
			"Specialised in web application security, network security, and digital forensics",
			"Completed the CISCO Network Security course as part of the curriculum",
			"Covered advanced topics including malware analysis, incident response, and forensic investigation",
		],
		skills: ["Web App Security", "Digital Forensics", "OWASP ZAP", "Splunk", "Network Security", "Information Security"],
	},
	{
		degree: "Bachelor's Degree",
		field: "Information Technology",
		institution: "Zagreb University of Applied Sciences",
		period: "Oct 2019 – Jul 2022",
		grade: "Excellent",
		highlights: [
			"Graduated with an excellent grade, completing an undergraduate thesis building a game in Unity using C#",
			"Competed in the TVZ MC2 competition, developing an Android app in Kotlin as part of a two-person team",
			"Collaborated in a team of four to design and build a second Unity game project during studies",
		],
		skills: ["C#", "Unity", "Game Development", "Frontend Development", "Web Design", "3D Modeling"],
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.18 },
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
				className="flex flex-col gap-6 max-w-3xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
			>
				{educationData.map((edu, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						whileHover={{ y: -4, transition: { duration: 0.2 } }}
						className="bg-white/5 backdrop-blur-sm border border-zinc-800/50 hover:border-indigo-500/30 transition-colors duration-300 rounded-xl p-6"
					>
						<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
							<div>
								<h3 className="text-base font-semibold text-zinc-200">{edu.degree}</h3>
								<p className="text-sm text-indigo-300/80 mt-0.5">{edu.field}</p>
								<p className="text-sm text-zinc-400 mt-0.5">{edu.institution}</p>
							</div>
							<div className="text-right shrink-0">
								<span className="text-xs text-zinc-500">{edu.period}</span>
								<p className="text-xs text-zinc-400 mt-0.5">{edu.grade}</p>
							</div>
						</div>

						<ul className="space-y-1.5 mb-4">
							{edu.highlights.map((point, i) => (
								<li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
									<span className="text-indigo-400 shrink-0 leading-relaxed">›</span>
									<span>{point}</span>
								</li>
							))}
						</ul>

						{edu.skills && (
							<div className="flex flex-wrap gap-1.5">
								{edu.skills.map((skill, i) => (
									<span
										key={i}
										className="text-xs px-2 py-0.5 bg-indigo-950/50 border border-indigo-500/20 rounded text-indigo-300/80"
									>
										{skill}
									</span>
								))}
							</div>
						)}
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
