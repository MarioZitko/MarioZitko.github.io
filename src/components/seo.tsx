import { Helmet } from "react-helmet-async";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
}

export default function SEO({
	title = "Mario Žitković - Software Developer | Full-Stack Developer Portfolio",
	description = "Mario Žitković - Experienced Software Developer specializing in React, Next.js, .NET, and modern web technologies. View my portfolio of full-stack projects and get in touch for collaboration.",
	keywords = "Mario Žitković, Software Developer, Full-Stack Developer, React Developer, Next.js, .NET, Web Development, Portfolio, Zagreb, Croatia",
	image = "https://mariozitko.github.io/og-image.png",
	url = "https://mariozitko.github.io/",
	type = "website",
}: SEOProps) {
	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href={url} />

			{/* Open Graph */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
}
