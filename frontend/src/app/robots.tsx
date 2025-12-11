import { MetadataRoute } from "next";
import { APP_URL } from "./data/constants";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/privacy-policy", "/term-of-use"],
		},
		sitemap: `${APP_URL}/sitemap.xml`,
	};
}
