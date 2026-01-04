"use client";

import { cn } from '@/lib/utils';
import { useSideBar } from '@/store/use-sidebar';
import { ReactNode } from 'react';

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
	const { collapsed } = useSideBar((state) => state);
	return (
		<aside className={cn('fixed left-0 flex flex-col h-full w-60 bg-[#252731] z-50', collapsed && "w-17.5")}>
			{children}
		</aside>
	)
}

export default Wrapper
