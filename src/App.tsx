import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navigationbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "./components/Education";
import SEO from "@/components/seo";
import backgroundImage from "@/assets/black-background.jpg";

export default function App() {
	return (
		<>
			{/* Global SEO for the homepage */}
			<SEO />

			{/* Additional structured data */}
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Mario Žitković",
						jobTitle: "Software Developer",
						description:
							"Experienced Software Developer specializing in full-stack development with React, Next.js, Django, and modern web technologies.",
						url: "https://mariozitko.github.io/",
						image: "https://mariozitko.github.io/og-image.png",
						sameAs: [
							"https://github.com/MarioZitko",
							"https://www.linkedin.com/in/mariozitkovic/",
						],
						address: {
							"@type": "PostalAddress",
							addressLocality: "Zagreb",
							addressCountry: "Croatia",
						},
						alumniOf: [
							{
								"@type": "EducationalOrganization",
								name: "Zagreb University of Applied Sciences",
								description:
									"Master of Engineering in Information Security and Digital Forensics",
							},
						],
						knowsAbout: [
							"React",
							"Next.js",
							"Django",
							"TypeScript",
							"JavaScript",
							"Python",
							"Full-Stack Development",
							"Information Security",
							"Digital Forensics",
						],
					})}
				</script>
			</Helmet>

			<div
				className="relative min-h-screen bg-fixed bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="absolute inset-0 bg-black/50"></div>
				<Navbar />
				<section id="hero"></section>
				<div className="relative z-10 flex flex-col items-center justify-center text-white">
					<HeroSection />
					<Projects />
					<Education />
					<Contact />
				</div>
			</div>
		</>
	);
}
