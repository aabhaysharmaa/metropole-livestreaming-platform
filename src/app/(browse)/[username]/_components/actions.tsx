"use client";
import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { startTransition, useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
	isFollowing: boolean
	userId: string
	isBlocked: boolean
}

export const Actions = ({ isFollowing, userId, isBlocked }: ActionsProps) => {

	const [isPending, setTransition] = useTransition();
	const handleFollow = () => {
		setTransition(() => {
			onFollow(userId)
				.then((data) => toast.success(`You are now following ${data?.following.username}`))
				.catch(() => toast.error("Something went wrong!"))
		})
	}

	const handleUnFollow = () => {
		setTransition(() => {
			onUnFollow(userId)
				.then((data) => {
					toast.success(`You unFollowed user ${data?.following.username}`)
				}).catch(() => {
					toast.error("something went Wrong!")
				})
		})
	}

	const onClick = () => {
		if (isFollowing) {
			return handleUnFollow();
		} else {
			return handleFollow();
		}
	}


	const handleBlock = () => {
		startTransition(() => {
			onBlock(userId).then((data) => {
				toast.success(` ${data?.blocked.username && "Blocked User"}  ${data?.blocked.username ? data.blocked.username : "Already Blocked User"}`)
			}).catch(() => {
				toast.error("Something went Wrong!");
			})
		})
	}

	const handleUnBlock = async () => {
		setTransition(() => {
			onUnBlock(userId).then((data) => {
				toast.success(`Unblocked user ${data?.blocked.username}`)
			}).catch(() => {
				toast.error("something went Wrong!")
			})
		})
	}



	return (
		<div className="flex w-full flex-row space-x-5">
			<Button
				className="cursor-pointer disabled:cursor-not-allowed"
				onClick={onClick}
				disabled={isPending}
				variant="primary" >
				{isFollowing ? "unFollow" : "Follow"}
			</Button>
			<Button
				variant="primary"
				onClick={handleBlock}
				disabled={isPending}>
				Block
			</Button>
		</div>
	)
}