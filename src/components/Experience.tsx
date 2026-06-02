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
	context: string;
	location: string;
	totalDuration: string;
	roles: Role[];
	technologies: string[];
}

const experiences: ExperienceEntry[] = [
	{
		company: "KONČAR – Electrical Engineering Institute",
		context:
			"R&D institute within the KONČAR Group — developing specialised software for power engineering, high-voltage electrical testing, and energy systems.",
		location: "Zagreb, Croatia · Hybrid",
		totalDuration: "2 yrs · Ongoing",
		roles: [
			{
				title: "Software Engineer | Tech Lead",
				period: "Jan 2026 – Present",
				type: "Full-time",
				bullets: [
					"Stepped into a Tech Lead role across multiple parallel projects — directly mentoring and unblocking developers, conducting deep code reviews, and raising the team's architectural standards",
					"Partnering with the Team Lead on feature design, sprint planning, and technical roadmaps to keep engineering aligned with business and client goals",
					"Owning the full merge request pipeline: enforcing code quality standards, catching regressions early, and maintaining a clean, well-documented codebase across 6 active projects",
				],
			},
			{
				title: "Full-Stack Developer",
				period: "May 2024 – Jan 2026",
				type: "Full-time",
				bullets: [
					"Delivered 6 enterprise applications across multiple clients, owning the complete lifecycle — from architecture discussions and direct client communication to production deployment on IIS",
					"Engineered complex React components featuring real-time transformer test calculations (load loss, short-circuit, efficiency) used daily by test engineers in KONČAR's live high-voltage testing labs",
					"Built an automated reporting pipeline generating formal PDF and Excel test reports with custom branding, embedded measurement graphs, and structured data — eliminating previously manual, error-prone workflows and delivering polished results directly to clients",
					"Mentored junior developers within a Scrum team, improving code quality and sprint velocity across all active projects",
				],
			},
		],
		technologies: [
			"React.js",
			"ASP.NET Core",
			"MSSQL",
			"PDF Reports",
			"Excel Reports",
			"IIS",
			"Scrum",
		],
	},
	{
		company: "gipSoft",
		context:
			"Software company specialising in industrial automation and manufacturing execution systems for production facilities across the region.",
		location: "Zagreb, Croatia",
		totalDuration: "1 yr 9 mos",
		roles: [
			{
				title: "Software Developer",
				period: "Sep 2022 – May 2024",
				type: "Full-time",
				bullets: [
					"Co-led the porting of a large-scale industrial MES from .NET Framework to .NET Core — a mission-critical system integrated with every machine on a manufacturing plant floor, tracking real-time production data, managing scales, and controlling hardware (valves, actuators) via SOAP/WCF protocols",
					"Executed the full Entity Framework 4.8 → EF Core migration: rewrote data access layers, resolved breaking API changes, and ensured zero regressions across a complex, live industrial system",
					"Ported the desktop UI layer from WPF to .NET MAUI, modernising the application and extending it to cross-platform targets while preserving all existing functionality",
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
		context:
			"Consumer electronics and IT retail chain, held alongside full-time university studies.",
		location: "Zagreb, Croatia",
		totalDuration: "2 yrs 4 mos",
		roles: [
			{
				title: "Call Center Agent",
				period: "Jun 2020 – Sep 2022",
				type: "Part-time",
				description:
					"Handled customer support and technical queries in a high-volume environment. Developed strong communication, prioritisation under pressure, and client-handling skills that carry directly into client-facing engineering work today.",
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
								<p className="text-sm text-gray-500 mt-2 leading-relaxed">
									{entry.context}
								</p>
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
