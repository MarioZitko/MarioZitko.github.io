/// <reference types="gtag.js" />

declare global {
	interface Window {
		gtag: Gtag.Gtag;
		dataLayer: unknown[];
	}
}

export {};
