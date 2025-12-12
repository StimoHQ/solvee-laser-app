import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	experimental: {
		optimizeCss: true,
	},
	output: "standalone",
};

export default nextConfig;
