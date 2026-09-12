import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// TODO: kalkulatoruvoza.png is a blank placeholder. Replace it with the real
// screenshot at src/assets/projects/kalkulatoruvoza.png (same filename, no code change needed)
import kalkulatorUvozaImg from "../assets/projects/kalkulatoruvoza.png";
import uplatkoImg from "../assets/projects/uplatko.png";
import kolikoPlacamImg from "../assets/projects/koliko-placam.png";
import liftforgeImg from "../assets/projects/liftforge.png";
import securityImg from "../assets/projects/securityTest.png";
import sunProfitImg from "../assets/projects/sunProfit.png";
import { useAnalytics } from "@/hooks/useAnalytics";
import { JSX } from "react";

interface Project {
	title: string;
	summary: string;
	highlights: string[];
	image: string;
	github?: string;
	githubApi?: string;
	demo?: string;
	technologies: string[];
	category: string;
	wip?: boolean;
	// Featured projects span the full grid row with a side-by-side layout
	featured?: boolean;
}

interface OtherProject {
	title: string;
	description: string;
	github: string;
	demo?: string;
	category: string;
}

const projects: Project[] = [
	{
		title: "Kalkulator uvoza",
		summary:
			"Croatian car import tax (PPMV) calculator. Paste a listing link from mobile.de, AutoScout24 or njuškalo and get an itemised tax breakdown.",
		highlights: [
			"Built and run solo, from the tax engine to production on a Hetzner VPS with Docker",
			"Tax engine written from Croatian law (NN 156/22) and verified to the cent against the official carina.gov.hr example, backed by 243 automated tests",
			"Scrapers for 4 car sites with Playwright, plus an Apify fallback for mobile.de, which blocks bots with Akamai",
			"Ingested 2,163 official customs price list Excel files, using an LLM to map each sheet's columns into one schema",
			"Fills in missing CO2 values from the customs catalogue, or suggests a range from 8,700+ engine rows parsed from German Wikipedia",
			"Unsure matches and estimates are shown to the user to confirm instead of guessing, so a wrong match never skews the result",
		],
		image: kalkulatorUvozaImg,
		demo: "https://kalkulatoruvoza.com",
		technologies: [
			"FastAPI",
			"Python",
			"Next.js",
			"PostgreSQL",
			"Web Scraping",
			"Docker",
			"Hetzner VPS",
		],
		category: "Full-Stack Development",
		featured: true,
	},
	{
		title: "Sun Profit",
		summary: "Solar panel ROI calculator for Croatian homeowners.",
		highlights: [
			"Draw your roof on a satellite map and it works out how many panels fit",
			"Real sun data from the EU PVGIS API, served through Vercel serverless proxies",
			"25-year financial model with Croatia's 2026 net billing rules and battery options",
			"Break-even and savings projections with interactive charts",
		],
		image: sunProfitImg,
		github: "https://github.com/MarioZitko/suncani-profit",
		demo: "https://suncani-profit.vercel.app/",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Leaflet",
			"PVGIS API",
			"Vercel",
		],
		category: "Frontend Development",
	},
	{
		title: "Uplatko",
		summary:
			"Payment slip generator for Croatian freelancers. Upload an invoice and get a scannable HUB-3 barcode.",
		highlights: [
			"Reads PDF invoices and UBL 2.1 XML e-invoices (Fiskalizacija 2.0)",
			"AI parsing with Groq or Gemini for invoice layouts that regex can't handle",
			"Drag the PDF417 barcode anywhere on the invoice and download the finished PDF",
			"Runs in the browser with no backend, and AI parsing is opt-in with your own API key",
		],
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
		title: "LiftForge",
		summary:
			"Workout tracking platform with training programs for coaches and their clients.",
		highlights: [
			"NestJS REST API with Prisma, JWT auth and Google and Facebook login",
			"Programs organised into training blocks and weeks, with a calendar view",
			"Drag-and-drop exercise ordering and progress charts",
			"GitHub Actions deploys to separate test, UAT and production environments with Docker",
		],
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
		title: "Koliko Plaćam",
		summary:
			"Calculator for Croatian residents to estimate yearly utility fees (komunalna naknada) and waste collection costs.",
		highlights: [
			"Covers 24 cities, with data taken from official city decisions",
			"Pick a city on an interactive map and get a zone-based cost breakdown",
			"Sortable table to compare costs across cities",
		],
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
		title: "Security Test API",
		summary:
			"Master's thesis project that automates security testing of web APIs.",
		highlights: [
			"Tests APIs against the OWASP Top 10 vulnerabilities",
			"Django REST Framework backend with a React interface",
			"Authentication, authorisation and a dashboard for managing test runs",
		],
		image: securityImg,
		github: "https://github.com/MarioZitko/Security-Test-API",
		technologies: ["Django", "React", "Python", "REST API"],
		category: "Security & Backend Development",
	},
];

const otherProjects: OtherProject[] = [
	{
		title: "Vekom",
		description:
			"Company website with a dynamic product catalogue, built with Next.js 15 and Tailwind CSS.",
		github: "https://github.com/MarioZitko/Vekom",
		demo: "https://vekom.vercel.app",
		category: "Full-Stack Development",
	},
	{
		title: "Desert Tempest",
		description:
			"Roguelite 2D platformer for Android, built in Unity for my undergraduate thesis.",
		github: "https://github.com/MarioZitko/Desert-Tempest",
		category: "Game Development",
	},
	{
		title: "Evilopers",
		description:
			"Team-built Unity game, one of the top projects of 2021 and showcased at the Nikola Tesla Technical Museum.",
		github: "https://github.com/bjurak/Evilopers-Game",
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

const cardClassName =
	"overflow-hidden h-full bg-white/5 backdrop-blur-sm border-zinc-800/50 hover:border-indigo-500/30 transition-colors duration-300";

const secondaryLinkClassName =
	"text-sm px-4 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-zinc-200 border border-zinc-700/50 hover:border-zinc-600";

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

	const featuredProjects = projects.filter((project) => project.featured);
	const gridProjects = projects.filter((project) => !project.featured);

	// Keep a lone card on the last row centred instead of hugging the left edge
	const lastRowClassName = (index: number): string => {
		if (index !== gridProjects.length - 1) return "";
		const classes: string[] = [];
		if (gridProjects.length % 2 === 1) {
			classes.push(
				"md:col-span-2 md:justify-self-center md:w-[calc(50%-1rem)] lg:col-span-1 lg:justify-self-stretch lg:w-auto",
			);
		}
		if (gridProjects.length % 3 === 1) classes.push("lg:col-start-2");
		return classes.join(" ");
	};

	const renderBadges = (project: Project) => (
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
	);

	const renderDetails = (project: Project) => (
		<>
			<div itemProp="description">
				<p className="text-zinc-300 text-sm mb-3 leading-relaxed">
					{project.summary}
				</p>
				<ul className="space-y-1.5 mb-5">
					{project.highlights.map((highlight, highlightIndex) => (
						<li
							key={highlightIndex}
							className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed"
						>
							<span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-indigo-400/60" />
							{highlight}
						</li>
					))}
				</ul>
			</div>

			<div className="mb-4">
				<div className="flex flex-wrap gap-1.5">
					{project.technologies.map((tech: string, techIndex: number) => (
						<span
							key={techIndex}
							className="text-xs px-2 py-0.5 bg-indigo-950/50 border border-indigo-500/20 rounded text-indigo-300/80 hover:border-indigo-400/40 hover:text-indigo-200 transition-colors duration-200"
							itemProp="keywords"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div className="flex gap-3 flex-wrap">
				{project.github && (
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className={secondaryLinkClassName}
						onClick={handleProjectClick(project.title, "github")}
						aria-label={`View ${project.title} source code on GitHub`}
						itemProp="url"
					>
						{project.githubApi ? "Web" : "GitHub"}
					</a>
				)}
				{project.githubApi && (
					<a
						href={project.githubApi}
						target="_blank"
						rel="noopener noreferrer"
						className={secondaryLinkClassName}
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
		</>
	);

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
				{featuredProjects.map((project: Project) => (
					<motion.article
						key={project.title}
						variants={cardVariants}
						whileHover={{ y: -4, transition: { duration: 0.2 } }}
						className="md:col-span-2 lg:col-span-3"
						itemScope
						itemType="https://schema.org/CreativeWork"
					>
						<Card
							className={`${cardClassName} gap-0 py-0 lg:flex-row border-indigo-500/30 bg-indigo-500/[0.06] hover:border-indigo-400/50`}
						>
							<div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-80 lg:w-5/12 shrink-0 overflow-hidden">
								<img
									src={project.image}
									alt={`Screenshot of ${project.title} project by Mario Žitković`}
									className="absolute inset-0 w-full h-full object-cover p-2 rounded-md transition-transform duration-500 hover:scale-105"
									itemProp="image"
									loading="lazy"
								/>
								{renderBadges(project)}
							</div>

							<div className="flex flex-col py-6 lg:w-7/12">
								<CardHeader className="pb-4">
									<CardTitle className="text-xl text-zinc-100" itemProp="name">
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent>{renderDetails(project)}</CardContent>
							</div>
						</Card>
					</motion.article>
				))}

				{gridProjects.map((project: Project, index: number) => (
					<motion.article
						key={project.title}
						variants={cardVariants}
						whileHover={{ y: -6, transition: { duration: 0.2 } }}
						className={lastRowClassName(index)}
						itemScope
						itemType="https://schema.org/CreativeWork"
					>
						<Card className={cardClassName}>
							<div className="relative h-56 w-full overflow-hidden">
								<img
									src={project.image}
									alt={`Screenshot of ${project.title} project by Mario Žitković`}
									className="w-full h-full object-cover p-2 rounded-t-md transition-transform duration-500 hover:scale-105"
									itemProp="image"
									loading="lazy"
								/>
								{renderBadges(project)}
							</div>

							<CardHeader className="pb-2">
								<CardTitle className="text-lg text-zinc-200" itemProp="name">
									{project.title}
								</CardTitle>
							</CardHeader>

							<CardContent>{renderDetails(project)}</CardContent>
						</Card>
					</motion.article>
				))}
			</motion.div>

			<motion.div
				className="mt-20"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h3 className="text-xl font-semibold text-center text-zinc-300 mb-6">
					Other Work
				</h3>
				<ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{otherProjects.map((project: OtherProject) => (
						<li
							key={project.title}
							className="flex flex-col rounded-lg border border-zinc-800/50 bg-white/[0.02] p-4"
						>
							<div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-1.5">
								<span className="text-sm font-medium text-zinc-300">
									{project.title}
								</span>
								<span className="text-[10px] text-zinc-500">
									{project.category}
								</span>
							</div>
							<p className="text-xs text-zinc-500 leading-relaxed mb-3 flex-1">
								{project.description}
							</p>
							<div className="flex gap-4 text-xs">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-400 hover:text-indigo-300 transition-colors duration-200"
									onClick={handleProjectClick(project.title, "github")}
									aria-label={`View ${project.title} source code on GitHub`}
								>
									GitHub →
								</a>
								{project.demo && (
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="text-zinc-400 hover:text-indigo-300 transition-colors duration-200"
										onClick={handleProjectClick(project.title, "demo")}
										aria-label={`View live demo of ${project.title}`}
									>
										Live Demo →
									</a>
								)}
							</div>
						</li>
					))}
				</ul>
			</motion.div>
		</section>
	);
}
