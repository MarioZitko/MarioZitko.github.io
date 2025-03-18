import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 z-50">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">My Portfolio</h1>
				<div>
					<Button variant="outline" className="mr-2">
						Projects
					</Button>
					<Button variant="outline">Contact</Button>
				</div>
			</div>
		</nav>
	);
}
