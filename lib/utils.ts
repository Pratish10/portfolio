import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function withBasePath(basePath: string | undefined, assetPath: string) {
	if (!basePath) {
		return assetPath;
	}

	const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
	const normalizedAssetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;

	return `${normalizedBasePath}${normalizedAssetPath}`;
}
