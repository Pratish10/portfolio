import { useEffect, useState } from 'react';

export const useScroll = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const updateScrollProgress = () => {
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
			const totalScrollableHeight = scrollHeight - clientHeight;

			if (totalScrollableHeight === 0) {
				setScrollProgress(0);
				return;
			}

			const progress = (scrollTop / totalScrollableHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', updateScrollProgress);
		return () => window.removeEventListener('scroll', updateScrollProgress);
	}, []);

	return scrollProgress;
};
