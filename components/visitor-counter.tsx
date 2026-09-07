'use client';

import { useEffect, useState } from 'react';

const GOATCOUNTER_SITE = 'razor';

const VisitorCounter = () => {
	const [count, setCount] = useState<number | null>(null);

	useEffect(() => {
		let cancelled = false;

		fetch(`https://${GOATCOUNTER_SITE}.goatcounter.com/counter/TOTAL.json`)
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.then((data: { count_unique?: string }) => {
				if (cancelled || !data.count_unique) return;
				setCount(Number(data.count_unique.replace(/[^\d]/g, '')));
			})
			.catch(() => {
				if (!cancelled) setCount(null);
			});

		return () => {
			cancelled = true;
		};
	}, []);

	if (count === null) return null;

	return (
		<p className='mono mt-8 text-xs tracking-[0.08em] text-[color:var(--muted-ink)]'>
			<span className='text-[color:var(--accent)]'>[</span> {count.toLocaleString()} visitors{' '}
			<span className='text-[color:var(--accent)]'>]</span>
		</p>
	);
};

export default VisitorCounter;
