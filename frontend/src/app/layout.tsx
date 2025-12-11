import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/Components/Layout/Footer/Footer";
import Header from "@/Components/Layout/Header/Header";
import { GlobalEffects } from "@/Components/Shared/GlobalEffects";
import { APP_URL, SEO } from "./data/constants";
import JsonLd from "@/Components/Shared/JsonLd";
import AnalyticProvider from "@/Components/Shared/AnalyticProvider";

const anticva = localFont({
	src: "../../public/fonts/Anticva.ttf",
});

export const metadata: Metadata = {
	title: `Лазерная эпиляция в Екатеринбурге | ${SEO.SITE_NAME}`,
	description: SEO.SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	applicationName: SEO.SITE_NAME,
	keywords: SEO.SITE_KEYWORDS,
	generator: "NextJS",
	icons: {
		icon: [
			{ url: "/icons/favicon.ico" },
			{ url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		shortcut: "/icons/favicon.ico",
		apple: "/icons/icon-256x256.png",
		other: [
			{
				rel: "touch-icon",
				url: "/icons/icon-256x256.png",
				sizes: "256x256",
				type: "image/png",
			},
			{ rel: "mask-icon", url: "/icons/icon.svg" },
		],
	},
	openGraph: {
		title: `${SEO.SITE_NAME} — лазерная эпиляция в Екатеринбурге.`,
		description: SEO.SITE_DESCRIPTION,
		url: new URL(APP_URL),
		siteName: SEO.SITE_NAME,
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 605,
				type: "image/png",
				alt: `${SEO.SITE_NAME} — лазерная эпиляция в Екатеринбурге.`,
			},
		],
	},
	alternates: {
		canonical: new URL(APP_URL),
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ru"
			data-scroll-behavior="smooth"
		>
			<head>
				<JsonLd />
			</head>
			<body className={anticva.className}>
				<NextTopLoader color="white" />
				<GlobalEffects />
				<AnalyticProvider>
					<Header />
					{children}
					<Footer />
				</AnalyticProvider>
			</body>
		</html>
	);
}
