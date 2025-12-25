import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	allowedDevOrigins: ["192.168.0.95", "localhost"],
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		optimizeCss: true,
	},
};

export default nextConfig;
