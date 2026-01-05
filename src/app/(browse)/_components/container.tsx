"use client";

import { cn } from '@/lib/utils';
import { useSideBar } from '@/store/use-sidebar';
import React, { ReactNode, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Container = ({ children }: { children: ReactNode }) => {
	const matches = useMediaQuery("(max-width : 64rem)");
	const { collapsed, onExpand, onCollapse
	} = useSideBar((state) => state)
	useEffect(() => {
		if (matches) {
			onCollapse()
		} else {
			onExpand()
		}
	}, [matches, onCollapse, onExpand])

	return (
		<div className={cn("flex-1", collapsed ? "ml-17.5" : "ml-60")}>
			{children}
		</div>
	)
}

export default Container
