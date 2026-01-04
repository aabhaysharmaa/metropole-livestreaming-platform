"use client";;

import { User } from "@/generated/prisma/client";
import { useSideBar } from "@/store/use-sidebar";
import UserItem, { UserItemSkeleton } from "./user-item";
interface RecommendedProps {
	data: User[]
}
const Recommended = ({ data }: RecommendedProps) => {
	const { collapsed } = useSideBar();

	const showLabel = !collapsed && data.length > 0;
	return (
		<div className="mt-4">
			{showLabel && (
				<div className="pl-6 mb-4">
					<p className="text-sm text-muted-foreground">Recommended</p>
				</div>
			)}
			<ul className="space-y-2 px-2">
				{data.map((user) => (
					<UserItem key={user.id} username={user.username}
						imageUrl={user.imageUrl}
						isLive
					/>
				))}
			</ul>
		</div>
	)
}

export default Recommended;

export const RecommendedSkeleton = () => {
	return (
		<ul className="px-2">
			{[...Array(6)].map((_, idx) => (
				<UserItemSkeleton key={idx} />
			))}
		</ul>
	)
}
