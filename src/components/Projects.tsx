import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import vekomImg from "../assets/projects/vekom.png";
import uplatkoImg from "../assets/projects/uplatko.png";
import kolikoPlacamImg from "../assets/projects/koliko-placam.png";
import liftforgeImg from "../assets/projects/liftforge.png";
import securityImg from "../assets/projects/securityTest.png";
import portfolioImage from "../assets/portfolio.png";
import { useAnalytics } from "@/hooks/useAnalytics";
import { JSX } from "react";

interface Project {
	title: string;
	description: string;
	image: string;
	github: string;
	githubApi?: string;
	demo?: string;
	technologies: string[];
	category: string;
	wip?: boolean;
}

const projects: Project[] = [
	{
		title: "Uplatko",
		description:
			"Browser-based fintech tool for Croatian freelancers — parses PDF invoices and UBL 2.1 XML e-invoices (Fiskalizacija 2.0), extracts payment data, and generates HUB-3/PDF417 barcodes embeddable directly into PDFs. Optional AI parsing via Gemini/Groq API. Zero backend — all processing runs locally in the browser.",
		image: uplatkoImg,
		github: "https://github.com/MarioZitko/uplatko",
		demo: "https://uplatko.com",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"PDF.js",
			"pdf-lib",
			"bwip-js",
		],
		category: "Full-Stack Development",
	},
	{
		title: "Koliko Plaćam",
		description:
			"Interactive calculator for Croatian residents to estimate annual komunalna naknada and waste collection costs across 24 cities. Features an interactive Leaflet map for city selection, zone-based cost breakdowns, and a sortable city comparison table — all computed client-side with no backend. Data sourced from official JLS decisions and public records.",
		image: kolikoPlacamImg,
		github: "https://github.com/MarioZitko/koliko-placam",
		demo: "https://koliko-placam.vercel.app",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Leaflet",
			"react-leaflet",
		],
		category: "Frontend Development",
	},
	{
		title: "LiftForge",
		description:
			"A full-stack workout tracking platform — log sessions, visualise progress with charts, and organise exercises with drag-and-drop. Features JWT auth with Google & Facebook OAuth, a NestJS REST API with Prisma ORM, and a React dashboard powered by Recharts.",
		image: liftforgeImg,
		github: "https://github.com/MarioZitko/liftforge-web",
		githubApi: "https://github.com/MarioZitko/liftforge-api",
		technologies: [
			"React",
			"TypeScript",
			"NestJS",
			"Prisma",
			"Zustand",
			"Recharts",
			"OAuth",
		],
		category: "Full-Stack Development",
		wip: true,
	},
	{
		title: "Portfolio Website",
		description:
			"My personal portfolio with a sleek design and animations built with React and Tailwind CSS to showcase my projects and skills.",
		image: portfolioImage,
		github: "https://github.com/MarioZitko/MarioZitko.github.io",
		demo: "https://mariozitko.github.io",
		technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
		category: "Frontend Development",
	},
	{
		title: "Vekom",
		description:
			"A modern, SEO-optimized website for Vekom, built with Next.js 15, React, TypeScript, and Tailwind CSS, featuring a dynamic product catalog, responsive design, and enhanced accessibility for an improved user experience.",
		image: vekomImg,
		github: "https://github.com/MarioZitko/Vekom",
		demo: "https://vekom.vercel.app",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		category: "Full-Stack Development",
	},
	{
		title: "Security Test API",
		description:
			"Security Test API is a web application for automated security testing of web APIs, focusing on OWASP Top 10 vulnerabilities. Built with Django Rest Framework and React. Features include authentication, authorization, and a user-friendly interface for managing tests.",
		image: securityImg,
		github: "https://github.com/MarioZitko/Security-Test-API",
		technologies: ["Django", "React", "Python", "REST API"],
		category: "Security & Backend Development",
	},
	{
		title: "Desert Tempest",
		description:
			"Desert tempest is a Rougelite 2D Platformer developed for the Android platform in Unity using C# for the needs of my undergraduate thesis.",
		image: "https://i.ibb.co/P5C7gw5/Screenshot-2.jpg",
		github: "https://github.com/MarioZitko/Desert-Tempest",
		technologies: ["Unity", "C#", "Android"],
		category: "Game Development",
	},
	{
		title: "Evilopers",
		description:
			"Evilopers is a single-level game developed in a team as part of a 2021 Game Development study. It was among the top projects of the year and was showcased at the Nikola Tesla Technical Museum in Croatia.",
		image: "https://i.ibb.co/Y7LTCjm/Screenshot-4.jpg",
		github: "https://github.com/bjurak/Evilopers-Game",
		technologies: ["Unity", "C#", "Team Project"],
		category: "Game Development",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 },
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

export default function Projects(): JSX.Element {
	const { trackProjectClick } = useAnalytics();

	const handleProjectClick = (
		projectName: string,
		linkType: "github" | "demo",
	) => {
		return (event: React.MouseEvent<HTMLAnchorElement>): void => {
			event.preventDefault();
			trackProjectClick(projectName, linkType);
			const url = event.currentTarget.href;
			window.open(url, "_blank", "noopener,noreferrer");
		};
	};

	return (
		<section
			id="projects"
			className="container mx-auto my-24 px-4 w-full"
			aria-label="Featured projects section"
		>
			<motion.header
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold text-center mb-12">
					Featured Projects
				</h2>
			</motion.header>

			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
			>
				{projects.map((project: Project, index: number) => (
					<motion.article
						key={index}
						variants={cardVariants}
						whileHover={{ y: -6, transition: { duration: 0.2 } }}
						itemScope
						itemType="https://schema.org/CreativeWork"
					>
						<Card className="overflow-hidden h-full bg-white/5 backdrop-blur-sm border-zinc-800/50 hover:border-indigo-500/30 transition-colors duration-300">
							<div className="relative h-56 w-full overflow-hidden">
								<img
									src={project.image}
									alt={`Screenshot of ${project.title} project by Mario Žitković`}
									className="w-full h-full object-cover p-2 rounded-t-md transition-transform duration-500 hover:scale-105"
									itemProp="image"
									loading="lazy"
								/>
								<div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
									<span className="text-[10px] px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-gray-300 backdrop-blur-sm">
										{project.category}
									</span>
									{project.wip && (
										<span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 backdrop-blur-sm">
											In Development
										</span>
									)}
								</div>
							</div>

							<CardHeader className="pb-2">
								<CardTitle className="text-lg text-zinc-200" itemProp="name">
									{project.title}
								</CardTitle>
							</CardHeader>

							<CardContent>
								<p
									className="text-zinc-400 text-sm mb-4 leading-relaxed"
									itemProp="description"
								>
									{project.description}
								</p>

								<div className="mb-4">
									<div className="flex flex-wrap gap-1.5">
										{project.technologies.map(
											(tech: string, techIndex: number) => (
												<span
													key={techIndex}
													className="text-xs px-2 py-0.5 bg-indigo-950/50 border border-indigo-500/20 rounded text-indigo-300/80 hover:border-indigo-400/40 hover:text-indigo-200 transition-colors duration-200"
													itemProp="keywords"
												>
													{tech}
												</span>
											),
										)}
									</div>
								</div>

								<div className="flex gap-3 flex-wrap">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm px-4 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-zinc-200 border border-zinc-700/50 hover:border-zinc-600"
										onClick={handleProjectClick(project.title, "github")}
										aria-label={`View ${project.title} source code on GitHub`}
										itemProp="url"
									>
										{project.githubApi ? "Web" : "GitHub"}
									</a>
									{project.githubApi && (
										<a
											href={project.githubApi}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm px-4 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-zinc-200 border border-zinc-700/50 hover:border-zinc-600"
											aria-label={`View ${project.title} API source code on GitHub`}
										>
											API
										</a>
									)}
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm px-4 py-1.5 rounded-md bg-indigo-600/80 hover:bg-indigo-500 transition-colors duration-200 text-white border border-indigo-500/30"
											onClick={handleProjectClick(project.title, "demo")}
											aria-label={`View live demo of ${project.title}`}
											itemProp="sameAs"
										>
											Live Demo
										</a>
									)}
								</div>
							</CardContent>
						</Card>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
}
