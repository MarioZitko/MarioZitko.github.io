import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import backgroundImage from "@/assets/black-background.jpg";
import Education from "./components/Education";

export default function App() {
	return (
		<div
			className="relative min-h-screen bg-fixed bg-cover bg-center"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
			{/* Navbar */}
			<Navbar />
			{/* Main Content */}
			<section id="hero"></section>
			<div className="relative z-10 flex flex-col items-center justify-center text-white">
				<HeroSection />
				<Projects />
				<Education />
				<Contact />
			</div>
		</div>
	);
}
