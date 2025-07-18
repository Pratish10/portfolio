import { PortfolioData } from '@/types/portfolio-types';
import { useEffect, useState } from 'react';

export const useGetProfileInfo = () => {
	const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await fetch('pratish.json');
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const data: PortfolioData = await response.json();
				setPortfolio(data);
			} catch (err: unknown) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setIsLoading(false);
			}
		};

		const timer = setTimeout(fetchProfile, 2000);
		return () => clearTimeout(timer);
	}, []);

	return { portfolio, error, isLoading };
};
