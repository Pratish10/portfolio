import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: { unoptimized: true },
	basePath: isProd ? '/portfolio' : '',
	assetPrefix: isProd ? '/portfolio/' : '',
	output: 'export',
	env: {
		NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio' : '',
	},
};

export default nextConfig;
