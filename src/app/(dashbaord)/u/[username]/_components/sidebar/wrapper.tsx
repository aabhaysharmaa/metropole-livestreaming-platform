
"use client";
import { cn } from "@/lib/utils";
import { useCreatorSideBar } from "@/store/use-cretor-sidebar";
import { ReactNode } from "react";

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
	const { collapsed } = useCreatorSideBar((state) => state)

	return (
		<aside className={cn("fixed left-0 flex flex-col w-17.5   h-full lg:w-60 border-r border-[#2d2E35] bg-[#252731] z-50", collapsed && "lg:w-17.5" )}>
			{children}
		</aside>
	)
}

export default Wrapper
