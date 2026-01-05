"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSideBar } from "@/store/use-cretor-sidebar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";



export const Toggle = () => {

	const { collapsed, onCollapse, onExpand } = useCreatorSideBar((state) => state);
	const label = collapsed ? "Expand" : "Collapse"
	return (
		<>
			{collapsed && (
				<div className="w-full hidden lg:flex items-center  justify-center pt-4 mb-4">
					<Hint label={label} asChild side="right">
						<Button variant={"button"} onClick={onExpand} className="h-auto p-2 ">
							<ArrowRightToLine className="size-4 cursor-pointer " />
						</Button>
					</Hint>
				</div>
			)}
			{!collapsed && (
				<div className="p-3 pl-6 mb-2  hidden lg:flex items-center w-full">
					<p className="font-semibold text-white">Dashboard</p>
					<Hint label={label} asChild side="right">
						<Button
							variant={"button"}
							onClick={onCollapse}
							className="h-auto p-2 ml-auto  bg-[#252731]"
						>
							<ArrowLeftToLine className="size-4 cursor-pointer
" />
						</Button>
					</Hint>
				</div>
			)}
		</>
	)
}