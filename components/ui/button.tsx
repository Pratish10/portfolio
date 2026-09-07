import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'mono inline-flex items-center justify-center gap-2 whitespace-nowrap rounded border text-xs font-medium tracking-[0.12em] uppercase transition-all duration-200 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'border-[color:var(--accent)] bg-[color:var(--accent)] px-6 text-[#0c1210] shadow-[0_0_24px_rgba(0,212,160,0.2)] hover:bg-[color:var(--coral)] hover:shadow-[0_0_32px_rgba(0,255,179,0.25)]',
				outline:
					'border-[color:var(--line-strong)] bg-transparent px-6 text-[var(--ink)] hover:border-[color:var(--accent)] hover:bg-[color:var(--signal-muted)] hover:text-[color:var(--accent)]',
				ghost: 'border-transparent bg-transparent px-4 text-[var(--muted-ink)] hover:bg-[color:var(--signal-muted)] hover:text-[color:var(--accent)]',
				link: 'border-transparent bg-transparent px-0 text-[color:var(--accent)] underline-offset-4 hover:underline',
				destructive: 'border-transparent bg-red-500 px-6 text-white hover:bg-red-400',
				secondary: 'border-[color:var(--line)] bg-[color:var(--signal-muted)] px-6 text-[color:var(--accent)] hover:border-[color:var(--line-strong)]',
			},
			size: {
				default: 'h-10 px-5',
				sm: 'h-8 px-3 text-[10px]',
				lg: 'h-11 px-6',
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
