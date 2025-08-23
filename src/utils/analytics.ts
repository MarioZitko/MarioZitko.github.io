import { GA_MEASUREMENT_ID, SHOULD_TRACK } from "@/config/analytics";

// Check if gtag is available
const isGtagReady = (): boolean => {
	return typeof window !== "undefined" && typeof window.gtag === "function";
};

// Initialize GA4
export const initGA = (): void => {
	if (!SHOULD_TRACK) {
		console.log(
			"Analytics disabled in development or missing GA_MEASUREMENT_ID"
		);
		return;
	}

	if (!isGtagReady()) {
		console.log("gtag not ready yet");
		return;
	}

	window.gtag("config", GA_MEASUREMENT_ID, {
		page_title: document.title,
		page_location: window.location.href,
	});
};

// Track page views
export const trackPageView = (path: string, title?: string): void => {
	if (!SHOULD_TRACK || !isGtagReady()) return;

	window.gtag("config", GA_MEASUREMENT_ID, {
		page_path: path,
		page_title: title || document.title,
	});
};

// Track custom events - Fixed TypeScript typing
export const trackEvent = (
	action: string,
	parameters?: {
		event_category?: string;
		event_label?: string;
		event_value?: number;
		file_name?: string;
		file_extension?: string;
		project_name?: string;
		link_type?: string;
		platform?: string;
		[key: string]: string | number | boolean | undefined;
	}
): void => {
	if (!SHOULD_TRACK || !isGtagReady()) return;

	window.gtag("event", action, parameters);
};

// Portfolio-specific tracking functions
export const trackCVDownload = (): void => {
	trackEvent("file_download", {
		event_category: "engagement",
		event_label: "CV Download",
		file_name: "Mario-Zitkovic-CV.pdf",
		file_extension: "pdf",
	});
};

export const trackProjectClick = (
	projectName: string,
	linkType: "github" | "demo"
): void => {
	trackEvent("click", {
		event_category: "project_interaction",
		event_label: `${projectName} - ${linkType}`,
		project_name: projectName,
		link_type: linkType,
	});
};

export const trackSocialClick = (platform: string): void => {
	trackEvent("click", {
		event_category: "social_media",
		event_label: platform,
		platform: platform,
	});
};
