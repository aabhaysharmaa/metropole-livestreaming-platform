import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";

export const isFollowingUser = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await prisma.user.findUnique({
			where: { id }
		})
		if (!otherUser) {
			throw new Error("User Not Found")
		}
		if (otherUser.id === self.id) {
			return true
		}
		const existingFollower = await prisma.follow.findFirst({
			where: {
				followerId: self.id,
				followingId: otherUser.id
			}
		})

		return !!existingFollower;
	} catch (error) {
		console.log("Error in isFollowingUser :", error)
		return false;
	}
}

export const followUser = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await prisma.user.findUnique({
			where: { id }
		})
		if (!otherUser) {
			throw new Error("User Not Found!")
		}
		if (self.id === otherUser.id) {
			throw new Error("You can't Follow to yourself")
		}

		const existingFollow = await prisma.follow.findFirst({
			where: {
				followerId: self.id,
				followingId: otherUser.id
			}
		})

		if (existingFollow) {
			throw new Error("Already Following")
		}

		const follow = await prisma.follow.create({
			data: {
				followerId: self.id,
				followingId: otherUser.id
			}, include: {
				follower: true,
				following: true
			}
		})

		return follow
	} catch (error) {
		console.log("Error in FollowUser:", error);
		throw new Error("Something went Wrong!")
	}
}

export const unFollowUser = async (id: string) => {
	try {
		const self = await getSelf();

		const otherUser = await prisma.user.findUnique({ where: { id } });
		if (!otherUser) {
			throw new Error("User Not Found");
		}
		if (otherUser.id === self.id) {
			throw new Error("You can't unfollow to your self")
		}

		const existingFollow = await prisma.follow.findFirst({
			where: {
				followerId: self.id,
				followingId: otherUser.id
			}
		})
		if (!existingFollow) {
			throw new Error("Not Following");
		}

		const Follow = await prisma.follow.delete({
			where: {
				id: existingFollow.id
			}, include: {
				following: true
			}
		})
		return Follow;
	} catch (error) {
		console.log("Error in unFollowUser :", error);
	}
}

export const getFollowedUsers = async () => {
	try {
		const self = await getSelf();
		const followedUsers = await prisma.follow.findMany({
			where: {
				followerId: self.id
			}, include: {
				following: true
			}
		})
		return followedUsers
	} catch (error) {
		console.log("Error in getFollowedUsers :", error)
		return [];
	}
}