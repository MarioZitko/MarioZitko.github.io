import { MouseEventHandler } from "react";

export const scrollToSection =
	(sectionId: string): MouseEventHandler<HTMLAnchorElement> =>
	(event) => {
		event.preventDefault();
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: "smooth" });
	};
