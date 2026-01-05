import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";

export const isBlockedByUser = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await prisma.user.findUnique({
			where: { id }
		})
		if (!otherUser) {
			throw new Error("User not found")
		}

		if (self.id === otherUser.id) {
			return false
		}

		const existingBlock = await prisma.block.findUnique({
			where: {
				blockerId_BlockedId: {
					blockerId: self.id,
					BlockedId: otherUser.id
				}
			}
		});
		return !!existingBlock;
	} catch (error) {
		console.log("Error in isBlockedByUser", error);
		return false;
	}
}


export const blockUser = async (id: string) => {
	try {
		const self = await getSelf();

		if (self.id === id) {
			throw new Error("cannot block yourself");
		}

		const otherUser = await prisma.user.findUnique({
			where: { id }
		})
		if (!otherUser) {
			throw new Error("User not found")
		}

		const existingBlock = await prisma.block.findUnique({
			where: {
				blockerId_BlockedId: {
					blockerId: self.id,
					BlockedId: otherUser.id
				}
			}
		})
		if (existingBlock) {
			throw new Error("Already Blocked!")
		}
		const block = await prisma.block.create({
			data: {
				blockerId: self.id,
				BlockedId: otherUser.id
			}, include: {
				blocked: true
			}
		})
		return block;
	} catch (error) {
		console.log("Error in Blocked User :", error)
	}
}


export const unBlockUser = async (id: string) => {
	const self = await getSelf();

	if (self.id === id) {
		throw new Error("Cannot unblock yourself");
	}

	const otherUser = await prisma.user.findUnique({
		where: { id }
	})

	if (!otherUser) {
		throw new Error("User is not Found!")
	}

	const existingBlock = await prisma.block.findUnique({
		where: {
			blockerId_BlockedId: {
				blockerId: self.id,
				BlockedId: otherUser.id
			}
		}
	})
	if (!existingBlock) {
		throw new Error("Not blocked")
	}

	const unBlock = await prisma.block.delete({
		where: {
			id: existingBlock.id
		}, include: {
			blocked: true
		}
	})
	return unBlock
}






