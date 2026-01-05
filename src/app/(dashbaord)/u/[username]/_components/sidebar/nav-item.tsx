"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useCreatorSideBar } from "@/store/use-cretor-sidebar";
import { LucideIcon } from "lucide-react"
import Link from "next/link";


interface NavItemProps {
	icon?: LucideIcon  ,
	isActive: boolean;
	href: string;
	label: string
}

const NavItem = ({
	isActive,
	icon: Icon,
	href,
	label
}: NavItemProps) => {
	const { collapsed } = useCreatorSideBar();
	return (
		<Button
			asChild
			variant={"button"}
			className={cn("w-full h-12", collapsed ? "justify-center" : "justify-start", isActive && "bg-neutral-900")}
		>
			<Link href={href}>
				<div className="flex items-center gap-x-4">
					<Icon className={cn("size-4", collapsed ? "mr-0" : "mr-2")} />
					{!collapsed && (
						<span>{label}</span>
					)}
				</div>
			</Link>
		</Button>
	)
}

export default NavItem

export const NavItemSkeleton = () => {
	return (
		<li className="flex items-center gap-x-4 px-3 py-2">
			<Skeleton className="min-h-10 min-w-10 rounded-md " />
			<div className="flex-1 hidden lg:block">
				<Skeleton className="h-6" />
			</div>
		</li>
	)
}