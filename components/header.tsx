'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeSelect } from './theme-select';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{ name: 'Work Experience', href: '#experience' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Certifications', href: '#certifications' },
		{ name: 'Contact', href: '#contact' },
	];

	const onClickHref = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: { href: string }) => {
		e.preventDefault();
		document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className='sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					<div className='flex-shrink-0'>
						<h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer'>
							<a
								href='#pratish'
								onClick={(e) => {
									onClickHref(e, { href: '#pratish' });
								}}
							>
								Pratish
							</a>
						</h1>
					</div>

					<nav className='hidden md:block'>
						<ul className='flex items-center space-x-8 lg:space-x-12'>
							{navItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className='relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 group'
										onClick={(e) => {
											onClickHref(e, item);
										}}
									>
										{item.name}
										<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300'></span>
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className='flex items-center space-x-4'>
						<div className='hidden sm:block'>
							<ThemeSelect />
						</div>

						<button
							onClick={toggleMenu}
							className='md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
							aria-label='Toggle menu'
						>
							{isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
						</button>
					</div>
				</div>

				<div
					className={`md:hidden transition-all duration-300 ease-in-out ${
						isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
					}`}
				>
					<nav className='pt-4 border-t border-gray-200 dark:border-gray-700'>
						<ul className='space-y-4'>
							{navItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										onClick={(e) => {
											e.preventDefault();
											setIsMenuOpen(false);
											document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
										}}
										className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200'
									>
										{item.name}
									</a>
								</li>
							))}
							<li className='sm:hidden pt-4 border-t border-gray-200 dark:border-gray-700'>
								<div className='px-4'>
									<ThemeSelect />
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
