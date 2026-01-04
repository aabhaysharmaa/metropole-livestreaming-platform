"use client";

import { cn } from '@/lib/utils';
import { useSideBar } from '@/store/use-sidebar';
import { ReactNode } from 'react';
import { useIsClient } from 'usehooks-ts';
import { ToggleSkeleton } from './toggle';
import { RecommendedSkeleton } from './recommended';

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient() ;
	const { collapsed } = useSideBar((state) => state);

  if(!isClient) {
	return (
		<aside className='fixed left-0 w-17.5 md:w-60 h-full bg-zinc-800 z-50'>
			<ToggleSkeleton/>
			<RecommendedSkeleton/>
		</aside>
	)
  }


	return (
		<aside className={cn('fixed left-0 flex flex-col h-full w-60 bg-[#252731] z-50', collapsed && "w-17.5")}>
			{children}
		</aside>
	)
}

export default Wrapper
