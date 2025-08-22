import { useCallback, useEffect } from "react";
import {
	initGA,
	trackCVDownload as _trackCVDownload,
	trackProjectClick as _trackProjectClick,
	trackSocialClick as _trackSocialClick,
} from "@/utils/analytics";

export const useAnalytics = () => {
	// Initialize on mount
	useEffect(() => {
		initGA();
	}, []);

	const trackCVDownload = useCallback(() => {
		_trackCVDownload();
	}, []);

	const trackProjectClick = useCallback(
		(projectName: string, linkType: "github" | "demo") => {
			_trackProjectClick(projectName, linkType);
		},
		[]
	);

	const trackSocialClick = useCallback((platform: string) => {
		_trackSocialClick(platform);
	}, []);

	return {
		trackCVDownload,
		trackProjectClick,
		trackSocialClick,
	};
};
