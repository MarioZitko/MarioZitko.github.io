import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import vekomImg from "../assets/projects/vekom.png";
import securityImg from "../assets/projects/securityTest.png";
import portfolioImage from "../assets/portfolio.png";

const projects = [
	{
		title: "Portfolio Website",
		description:
			"My personal portfolio with a sleek design and animations built with React and Tailwind CSS to showcase my projects and skills.",
		image: portfolioImage,
		github: "https://github.com/MarioZitko/MarioZitko.github.io",
		demo: "https://mariozitko.github.io",
	},
	{
		title: "Vekom",
		description:
			"A modern, SEO-optimized website for Vekom, built with Next.js 15, React, TypeScript, and Tailwind CSS, featuring a dynamic product catalog, responsive design, and enhanced accessibility for an improved user experience.",
		image: vekomImg,
		github: "https://github.com/MarioZitko/Vekom",
		demo: "https://vekom.vercel.app",
	},
	{
		title: "Security Test API",
		description:
			"Security Test API is a web application for automated security testing of web APIs, focusing on OWASP Top 10 vulnerabilities. Built with Django Rest Framework and React. Features include authentication, authorization, and a user-friendly interface for managing tests.",
		image: securityImg,
		github: "https://github.com/MarioZitko/Security-Test-API",
	},
	{
		title: "Desert Tempest",
		description:
			"Desert tempest is a Rougelite 2D Platformer developed for the Android platform in Unity using C# for the needs of my undergraduate thesis.",
		image: "https://i.ibb.co/P5C7gw5/Screenshot-2.jpg",
		github: "https://github.com/MarioZitko/Desert-Tempest",
	},
	{
		title: "Evilopers",
		description:
			"Evilopers is a single-level game developed in a team as part of a 2021 Game Development study. It was among the top projects of the year and was showcased at the Nikola Tesla Technical Museum in Croatia.",
		image: "https://i.ibb.co/Y7LTCjm/Screenshot-4.jpg",
		github: "https://github.com/bjurak/Evilopers-Game",
	},
];

export default function Projects() {
	return (
		<motion.div
			className="container mx-auto my-24 px-4"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<section id="projects">
				<h2 className="text-4xl font-bold text-center mb-12">
					Featured Projects
				</h2>
			</section>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<motion.div
						key={index}
						whileHover={{ y: -5 }}
						transition={{ duration: 0.2 }}
					>
						<Card className="overflow-hidden h-full bg-white/5 backdrop-blur-sm border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
							<div className="relative h-72 w-full">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover p-2 rounded-t-md"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-xl text-zinc-200">
									{project.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-zinc-400 mb-8">{project.description}</p>
								<div className="flex gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-200"
									>
										GitHub
									</a>
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-colors text-zinc-200"
										>
											Live Demo
										</a>
									)}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
