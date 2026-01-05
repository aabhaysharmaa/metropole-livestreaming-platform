"use client";
import { cn } from "@/lib/utils";
import { useCreatorSideBar } from "@/store/use-cretor-sidebar";
import { ReactNode, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
	children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	const { collapsed, onCollapse, onExpand } = useCreatorSideBar();
	const mediaQuery = useMediaQuery("(max-width : 1020px)");

	useEffect(() => {
		if (mediaQuery) {
			onCollapse()
		} else {
			onExpand()
		}
	}, [onCollapse , onExpand , mediaQuery])

	return (
		<div className={cn("flex-1", collapsed ? "ml-17.5" : " ml-17.5 lg:ml-60")}>
			{children}
		</div>
	)
}