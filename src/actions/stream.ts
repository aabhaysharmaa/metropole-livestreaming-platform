"use server";

import { revalidatePath } from "next/cache"
import prisma from "@/lib/prismadb"
import { getSelf } from "@/lib/auth-service"
import { Stream } from "@/generated/prisma/client"
import { getStreamByUserId } from "@/lib/stream-service"


export const updateStream = async (values: Partial<Stream>) => {
	try {
		const self = await getSelf();
		const selfStream = await getStreamByUserId(self.id)
		if (!selfStream) {
			throw new Error("Stream not Found")
		}

		const validDate = {
			name: values.name,
			isChatEnabled: values.isChatEnabled,
			isChatFollowersOnly: values.isChatFollowersOnly,
			isChatDelayed: values.isChatDelayed
		}

		const stream = await prisma.stream.update({
			where: {
				id: selfStream.id
			}, data: {
				...validDate
			}
		})
		revalidatePath(`/u${self.username}/chat`)
		revalidatePath(`/u${self.username}`)
		revalidatePath(`/${self.username}`)

		return stream;
	} catch (error) {
		console.log("Error in updateStream :", error)
		throw new Error("Internal Server Error")
	}
}