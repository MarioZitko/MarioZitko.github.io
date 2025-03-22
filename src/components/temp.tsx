import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from "react-icons/hi"; // Using react-icons
import { scrollToSection } from "@/utils/scroll";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// Toggle mobile menu
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 z-50">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold text-zinc-50">My Portfolio</h1>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-4">
					<Button asChild variant="outline">
						<a href="#hero" onClick={() => scrollToSection("hero")}>
							Home
						</a>
					</Button>
					<Button asChild variant="outline">
						<a href="#projects" onClick={() => scrollToSection("projects")}>
							Projects
						</a>
					</Button>
					<Button asChild variant="outline">
						<a href="#education" onClick={() => scrollToSection("education")}>
							Education
						</a>
					</Button>
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon" onClick={toggleMenu}>
								{isOpen ? (
									<HiX className="w-6 h-6 text-white" />
								) : (
									<HiMenu className="w-6 h-6 text-white" />
								)}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="bg-zinc-900 border border-zinc-700 rounded-md"
						>
							<DropdownMenuItem>
								<a
									href="#hero"
									className="text-white w-full block py-2"
									onClick={() => scrollToSection("hero")}
								>
									Home
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a
									href="#projects"
									className="text-white w-full block py-2"
									onClick={() => scrollToSection("projects")}
								>
									Projects
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a
									href="#education"
									className="text-white w-full block py-2"
									onClick={() => scrollToSection("education")}
								>
									Education
								</a>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	);
}
