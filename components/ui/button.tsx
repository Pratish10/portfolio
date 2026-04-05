import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-[var(--burnt-orange)] px-6 text-slate-950 shadow-[0_18px_50px_rgba(231,111,81,0.25)] hover:-translate-y-0.5 hover:bg-[var(--coral)]',
				outline: 'border-[color:var(--line-strong)] bg-white/5 px-6 text-[var(--ink)] hover:-translate-y-0.5 hover:bg-white/8',
				ghost: 'border-transparent bg-transparent px-4 text-[var(--ink)] hover:bg-white/6',
				link: 'border-transparent bg-transparent px-0 text-[var(--warm-sand)] underline-offset-4 hover:underline',
				destructive: 'border-transparent bg-red-500 px-6 text-white hover:bg-red-400',
				secondary: 'border-transparent bg-white/10 px-6 text-[var(--ink)] hover:bg-white/16',
			},
			size: {
				default: 'h-11 px-5',
				sm: 'h-9 px-4 text-xs',
				lg: 'h-12 px-6 text-sm',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return <Comp data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
