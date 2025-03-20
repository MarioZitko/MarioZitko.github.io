import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/", // ✅ Ensure this is "/"
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		emptyOutDir: true,
		manifest: true,
		rollupOptions: {
			input: "./index.html", // ✅ This tells Vite to process index.html correctly
		},
	},
});
