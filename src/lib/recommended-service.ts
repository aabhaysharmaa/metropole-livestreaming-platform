import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
	let userId;
	try {
		const self = await getSelf();
		userId = self.id;
	} catch {
		userId = null
	}

	let users = [];

	if (userId) {
		users = await prisma.user.findMany({
			where: {
				AND: [{
					NOT: {
						id: userId
					}
				}, {
					NOT: {
						followedBy: {
							some: {
								followerId: userId
							}
						}
					}
				},
				{
					NOT: {
						blocking: {
							some: {
								BlockedId: userId
							}
						}
					}
				}]
			},
			include: {
				stream: true
			},
			orderBy: {
				createdAt: "desc"
			}
		})
		return users
	} else {
		users = await prisma.user.findMany({
			orderBy: {
				createdAt: "desc"
			}, include: {
				stream: {
					select : {
						isLive : true
					}
				}
			}

		})
	}
	return users

}