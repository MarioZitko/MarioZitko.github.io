import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from "react-icons/hi";
import { scrollToSection } from "@/utils/scroll";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
	{ label: "Home", id: "hero" },
	{ label: "Experience", id: "experience" },
	{ label: "Projects", id: "projects" },
	{ label: "Education", id: "education" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { scrollYProgress } = useScroll();

	return (
		<nav className="fixed top-0 left-0 w-full z-50" aria-label="Main navigation">
			<div className="bg-black/40 backdrop-blur-md border-b border-white/5">
				<div className="container mx-auto flex justify-between items-center px-4 py-3">
					<a
						href="#hero"
						onClick={() => scrollToSection("hero")}
						className="text-lg font-bold text-zinc-50 hover:text-blue-300 transition-colors duration-300"
					>
						Mario Žitković
					</a>

					{/* Desktop menu */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map(({ label, id }) => (
							<Button
								key={id}
								asChild
								variant="ghost"
								className="text-zinc-300 hover:text-white hover:bg-white/8 transition-colors duration-200 text-sm"
							>
								<a href={`#${id}`} onClick={() => scrollToSection(id)}>
									{label}
								</a>
							</Button>
						))}
					</div>

					{/* Mobile menu */}
					<div className="md:hidden">
						<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setIsOpen(!isOpen)}
									aria-label="Toggle navigation menu"
								>
									{isOpen ? (
										<HiX className="w-5 h-5 text-white" />
									) : (
										<HiMenu className="w-5 h-5 text-white" />
									)}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="bg-zinc-900/95 border border-zinc-700/50 rounded-lg backdrop-blur-md"
							>
								{navLinks.map(({ label, id }) => (
									<DropdownMenuItem key={id}>
										<a
											href={`#${id}`}
											className="text-zinc-200 w-full block py-1.5 text-sm hover:text-white"
											onClick={() => {
												scrollToSection(id);
												setIsOpen(false);
											}}
										>
											{label}
										</a>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>

			{/* Scroll progress bar */}
			<motion.div
				className="h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 origin-left"
				style={{ scaleX: scrollYProgress }}
			/>
		</nav>
	);
}
