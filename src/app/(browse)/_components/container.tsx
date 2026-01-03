"use client";

import { useSideBar } from '@/store/use-sidebar';
import React, { ReactNode, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Container = ({ children }: { children: ReactNode }) => {
	const matches = useMediaQuery("(max-width : 64rem)");
	const { onExpand, onCollapse
	} = useSideBar((state) => state)
	useEffect(() => {
        if(matches) {
			onCollapse()
		}else{
			onExpand()
		}
	}, [matches,onCollapse, onExpand])

	return (
		<div>
			{children}
		</div>
	)
}

export default Container
