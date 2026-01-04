"use client";
import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
	isFollowing: boolean
	userId: string
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {

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

	return (
		<div className="flex w-full flex-row space-x-5">
			<Button
				className="cursor-pointer disabled:cursor-not-allowed"
				onClick={onClick}
				disabled={isPending}
				variant="primary" >
				{isFollowing ? "unFollow" : "Follow"}
			</Button>
		</div>
	)
}