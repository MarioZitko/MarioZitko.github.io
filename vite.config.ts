import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/MarioZitko.github.io/", // Ensure this matches your GitHub repo name
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		emptyOutDir: true, // Ensure a fresh build
		rollupOptions: {
			input: "index.html",
		},
	},
});
