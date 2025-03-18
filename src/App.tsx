import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
	return (
		<div
			className="relative min-h-screen bg-fixed bg-cover bg-center"
			style={{ backgroundImage: "url('./assets/black-background.jpg')" }}
		>
			<div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
			{/* Navbar */}
			<Navbar />
			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center justify-center text-white">
				<HeroSection />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
