"use server"

import { blockUser, unBlockUser } from "@/lib/block-service"
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
	try {
		//  TODO : Adapt to disconnect from livestream
		// TODO : Allow ability to kick the guests
		const blockedUser = await blockUser(id);
		revalidatePath("/");

		if (blockedUser) {
			revalidatePath(`/${blockedUser.blocked.username}`)
		}
		return blockedUser;
	} catch (error) {
		console.log("Error in onBlock : ", error)
		throw new Error("Internal Server Error")
	}

}

export const onUnBlock = async (id: string) => {
	try {
		const unBlockedUser = await unBlockUser(id);
		revalidatePath("/");

		if (unBlockedUser) {
			revalidatePath(`/${unBlockedUser.blocked.username}`)
		}
		return unBlockedUser;
	} catch (error) {
		console.log("Error in unBlockedUser : ", error)
		throw new Error("Internal Server Error")
	}

}