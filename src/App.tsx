import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navigationbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SEO from "@/components/seo";

export default function App() {
	return (
		<>
			<SEO />

			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Mario Žitković",
						jobTitle: "Software Engineer | Tech Lead",
						description:
							"Experienced Software Engineer and Tech Lead specializing in full-stack development with React, ASP.NET Core, Next.js, and modern web technologies.",
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
							"ASP.NET Core",
							"TypeScript",
							"JavaScript",
							"Python",
							"Django",
							"Full-Stack Development",
							"Information Security",
							"Digital Forensics",
							"Technical Leadership",
						],
					})}
				</script>
			</Helmet>

			{/* Animated aurora background */}
			<div className="aurora-bg" aria-hidden="true">
				<div className="aurora-orb aurora-orb-1" />
				<div className="aurora-orb aurora-orb-2" />
				<div className="aurora-orb aurora-orb-3" />
			</div>

			{/* Page content */}
			<div className="relative z-10 min-h-screen text-white">
				<Navbar />
				<section id="hero" aria-hidden="true" />
				<div className="flex flex-col items-center">
					<HeroSection />
					<Experience />
					<Projects />
					<Education />
					<Contact />
				</div>
			</div>
		</>
	);
}
