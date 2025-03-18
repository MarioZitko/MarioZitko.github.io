import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
	{ title: "Project 1", description: "A cool web app", link: "#" },
	{ title: "Project 2", description: "An innovative tool", link: "#" },
	{ title: "Project 3", description: "A portfolio showcase", link: "#" },
];

export default function Projects() {
	return (
		<motion.div
			className="container mx-auto my-16 text-black bg-white p-10 rounded-lg shadow-lg"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h2 className="text-3xl font-bold text-center">My Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				{projects.map((project, index) => (
					<Card key={index} className="p-4">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{project.description}</p>
							<a
								href={project.link}
								className="text-blue-500 underline mt-2 inline-block"
							>
								View Project
							</a>
						</CardContent>
					</Card>
				))}
			</div>
		</motion.div>
	);
}
