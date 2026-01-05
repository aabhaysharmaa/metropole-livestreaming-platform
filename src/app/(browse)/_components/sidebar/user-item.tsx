"use client";
import LiveBadge from "@/components/live-badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps {
	username: string
	imageUrl: string | null;
	isLive?: boolean;
}

const UserItem = ({
	username,
	imageUrl,
	isLive
}: UserItemProps) => {
	const pathname = usePathname();
	const href = `/${username}`;
	const { collapsed } = useSideBar();
	const isActive = pathname === href;

	return (
		<Button

			className={cn("w-full text-white h-12 hover:bg-neutral-600 bg-[#252731]/50 ", collapsed ? "justify-center" : "justify-start", false && "bg-accent")}
			asChild>
			<Link href={href}>
				<div className={cn("flex items-center w-full gap-x-4", collapsed && "justify-center")}>
					<UserAvatar
						username={username}
						imageUrl={imageUrl}
						isLive={false}
					/>
					{!collapsed && (
						<p className="truncate">
							{username}
						</p>
					)}
					{/* {!collapsed && isLive && (
						<LiveBadge className="ml-auto" />
					)} */}
				</div>
			</Link>
		</Button>
	)
}

export default UserItem;
export const UserItemSkeleton = () => {
	return (
		<li className="flex items-center h-full gap-x-4 px-3 py-2">
			<Skeleton className="min-h-8 min-w-8  rounded-full" />
			<div className="flex-1">
				<Skeleton className="h-6" />
			</div>
		</li>
	)
}