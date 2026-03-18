import { JSX } from "react";
import { motion } from "framer-motion";

interface Role {
	title: string;
	period: string;
	type: string;
	bullets?: string[];
	description?: string;
}

interface ExperienceEntry {
	company: string;
	location: string;
	totalDuration: string;
	roles: Role[];
	technologies: string[];
}

const experiences: ExperienceEntry[] = [
	{
		company: "KONČAR – Electrical Engineering Institute",
		location: "Zagreb, Croatia · Hybrid",
		totalDuration: "1 yr 11 mos (and ongoing)",
		roles: [
			{
				title: "Software Engineer | Tech Lead",
				period: "Jan 2026 – Present",
				type: "Full-time",
				bullets: [
					"Managing and delivering features to 6 production enterprise applications across multiple clients — owning the entire lifecycle from architectural planning and client meetings through to IIS deployment",
					"Directly mentoring and unblocking developers across multiple parallel projects, conducting in-depth code reviews, and enforcing high architectural standards",
					"Partnering with the Team Lead on feature design, technical roadmaps, and sprint planning to align engineering with business goals",
					"Owning code quality through merge request reviews and establishing team-wide standards.",
				],
			},
			{
				title: "Full-Stack Developer",
				period: "May 2024 – Jan 2026",
				type: "Full-time",
				bullets: [
					"Built complex React components with domain-specific transformer test calculations, used daily by engineers in KONČAR's live testing labs in real production environments",
					"Engineered automated generation of formal client-facing PDF and Excel test reports featuring custom branding, embedded graphs, and structured measurement data — replacing manual reporting workflows",
					"Mentored junior developers within a Scrum framework, driving code quality and team velocity across all active projects",
				],
			},
		],
		technologies: [
			"React.js",
			"ASP.NET Core",
			"MSSQL",
			"Excel reports",
			"PDF Reports",
			"Scrum",
		],
	},
	{
		company: "gipSoft",
		location: "Zagreb, Croatia",
		totalDuration: "1 yr 9 mos",
		roles: [
			{
				title: "Software Developer",
				period: "Sep 2022 – May 2024",
				type: "Full-time",
				bullets: [
					"Co-led the migration from .NET Framework to .NET Core of a large-scale industrial MES — a system integrated with every machine across a manufacturing plant, managing real-time production data, scales, and hardware control (valve open/close) via SOAP/WCF protocols",
					"Executed the .NET Framework → .NET Core migration including an Entity Framework 4.8 → EF Core upgrade, eliminating legacy debt while maintaining system stability",
					"Ported desktop interfaces from WPF to .NET MAUI, extending the application to modern cross-platform targets",
				],
			},
		],
		technologies: [
			".NET Core",
			"Entity Framework Core",
			"MSSQL",
			"WPF",
			"MAUI",
			"SOAP/WCF",
		],
	},
	{
		company: "HGSPOT",
		location: "Zagreb, Croatia",
		totalDuration: "2 yrs 4 mos",
		roles: [
			{
				title: "Call Center Agent",
				period: "Jun 2020 – Sep 2022",
				type: "Part-time",
				description:
					"Customer support role held alongside university studies. Built strong communication, problem-solving under pressure, and client-handling skills.",
			},
		],
		technologies: ["Communication", "Customer Support", "Teamwork"],
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const entryVariants = {
	hidden: { opacity: 0, x: -32 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export default function Experience(): JSX.Element {
	return (
		<section
			id="experience"
			className="container mx-auto my-24 px-4 max-w-3xl w-full"
			aria-label="Work experience section"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
			</motion.div>

			<motion.div
				className="relative"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-60px" }}
			>
				{/* Vertical timeline line */}
				<div className="absolute left-4 top-2 bottom-2 w-px timeline-line" />

				<div className="space-y-14">
					{experiences.map((entry, i) => (
						<motion.div
							key={i}
							variants={entryVariants}
							className="relative pl-12"
						>
							{/* Timeline dot */}
							<motion.div
								className="absolute left-0 top-1.5 w-8 h-8 rounded-full border border-indigo-500/40 bg-indigo-950/60 flex items-center justify-center"
								whileInView={{ scale: [0.6, 1.15, 1] }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
							>
								<div className="w-2 h-2 rounded-full bg-indigo-400" />
							</motion.div>

							{/* Company header */}
							<div className="mb-4">
								<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
									<h3 className="text-xl font-semibold text-white">
										{entry.company}
									</h3>
									<span className="text-sm text-indigo-400/80 font-medium">
										{entry.totalDuration}
									</span>
								</div>
								<p className="text-sm text-gray-500 mt-0.5">{entry.location}</p>
							</div>

							{/* Roles */}
							<div className="space-y-6">
								{entry.roles.map((role, j) => (
									<div key={j}>
										<div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
											<span className="text-base font-medium text-gray-200">
												{role.title}
											</span>
											<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
												{role.type}
											</span>
											<span className="text-xs text-gray-500">
												{role.period}
											</span>
										</div>

										{role.bullets && (
											<ul className="space-y-1.5 ml-1">
												{role.bullets.map((bullet, k) => (
													<li
														key={k}
														className="flex gap-2.5 text-sm text-gray-400 leading-relaxed"
													>
														<span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-indigo-400/60" />
														{bullet}
													</li>
												))}
											</ul>
										)}

										{role.description && (
											<p className="text-sm text-gray-400 leading-relaxed ml-1">
												{role.description}
											</p>
										)}
									</div>
								))}
							</div>

							{/* Tech tags */}
							<div className="flex flex-wrap gap-1.5 mt-5">
								{entry.technologies.map((tech, k) => (
									<span
										key={k}
										className="text-xs px-2.5 py-1 rounded-md bg-indigo-950/50 border border-indigo-500/20 text-indigo-300/80 hover:border-indigo-400/40 hover:text-indigo-200 transition-colors duration-200"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
