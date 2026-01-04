"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSideBar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
const Toggle = () => {
	const {
		collapsed,
		onCollapse,
		onExpand
	} = useSideBar((state) => state);

	const label = collapsed ? "Expand" : "Collapse";

	return (
		<>
			{!collapsed && (
				<div className="p-3 pl-6 mb-2 flex  justify-between items-center w-full">
					<p className="font-semibold text-zinc-200">For You</p>
					<Hint label={label} asChild>
						<Button variant={"ghost"} onClick={onCollapse} className="cursor-pointer  p-2 h-auto  hover:text-zinc-400 hover:bg-[#252731] ">
							<ArrowLeftFromLine className="size-4" />
						</Button>
					</Hint>
				</div>
			)}
			{collapsed && (
				<div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
					<Hint label={label} asChild>
						<Button variant="ghost" onClick={onExpand} className="h-auto p-2 hover:text-zinc-400 hover:bg-[#252731] cursor-pointer">
							<ArrowRightFromLine className="size-4" />
						</Button>
					</Hint>
				</div>
			)}
		</>
	)
}

export default Toggle


export const ToggleSkeleton = () => {
	return (
		<div className=" p-3 pl-6 mb-2 mt-4 hidden lg:flex  items-center  justify-between w-full">
			<Skeleton className="h-6 w-25"/>
			<Skeleton className="h-6 w-6"/>
		</div>
	)
}