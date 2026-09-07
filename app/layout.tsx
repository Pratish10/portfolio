import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site-config';

const display = Space_Grotesk({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const body = Manrope({
	variable: '--font-body',
	subsets: ['latin'],
});

const mono = JetBrains_Mono({
	variable: '--font-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>{children}</body>
		</html>
	);
}
