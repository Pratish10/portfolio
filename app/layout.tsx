import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site-config';

const display = Cormorant_Garamond({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['500', '600', '700'],
});

const body = Manrope({
	variable: '--font-body',
	subsets: ['latin'],
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${display.variable} ${body.variable} antialiased`}>{children}</body>
		</html>
	);
}
