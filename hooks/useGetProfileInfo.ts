import { PortfolioData } from '@/types/portfolio-types';
import { useEffect, useState } from 'react';

export const useGetProfileInfo = () => {
	const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await fetch('/pratish.json');

				if (!response.ok) {
					throw new Error(`HTTP error ${response.status}`);
				}

				const data: PortfolioData = await response.json();
				setPortfolio(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('Unknown error occurred.');
				}
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => {
			fetchProfile();
		}, 2000);
	}, []);

	return { portfolio, error, isLoading };
};
