"use server";

import { followUser, unFollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
	try {
		const followedUser = await followUser(id);
		revalidatePath("/");
		if (followedUser) {
			revalidatePath(`/${followedUser?.following.username}`)
		}
		return followedUser;
	} catch (error) {
		throw new Error("Internal Error", (error as Error))
	}
}

export const onUnFollow = async (id: string) => {
	try {
		const unfollowedUser = await unFollowUser(id);
		revalidatePath("/")
		if (unfollowedUser) {
			revalidatePath(`/${unfollowedUser.following.username}`)
		}
		return unfollowedUser;
	} catch (error) {
		console.log(`Error in onUnFollow Action `, error)
		throw new Error("Internal Server Error")
	}
}