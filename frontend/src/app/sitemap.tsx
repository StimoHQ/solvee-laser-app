import { MetadataRoute } from "next";
import { APP_URL } from "./data/constants";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: APP_URL,
			lastModified: new Date().toISOString(),
			priority: 1.0,
		},
	];
}
