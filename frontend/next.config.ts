import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	allowedDevOrigins: ["192.168.0.95", "localhost"],
	experimental: {
		optimizeCss: true,
	},
};

export default nextConfig;
