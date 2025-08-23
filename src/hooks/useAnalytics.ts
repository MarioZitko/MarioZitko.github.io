import { useCallback, useEffect } from "react";
import {
	initGA,
	trackCVDownload as _trackCVDownload,
	trackProjectClick as _trackProjectClick,
	trackSocialClick as _trackSocialClick,
} from "@/utils/analytics";

export const useAnalytics = () => {
	// Initialize on mount with delay to ensure gtag is loaded
	useEffect(() => {
		const initializeAnalytics = (): void => {
			if (
				typeof window !== "undefined" &&
				"gtag" in window &&
				typeof window.gtag === "function"
			) {
				initGA();
			} else {
				// Retry after a short delay if gtag isn't ready
				setTimeout(initializeAnalytics, 1000);
			}
		};

		initializeAnalytics();
	}, []);

	const trackCVDownload = useCallback((): void => {
		_trackCVDownload();
	}, []);

	const trackProjectClick = useCallback(
		(projectName: string, linkType: "github" | "demo"): void => {
			_trackProjectClick(projectName, linkType);
		},
		[]
	);

	const trackSocialClick = useCallback((platform: string): void => {
		_trackSocialClick(platform);
	}, []);

	return {
		trackCVDownload,
		trackProjectClick,
		trackSocialClick,
	};
};
