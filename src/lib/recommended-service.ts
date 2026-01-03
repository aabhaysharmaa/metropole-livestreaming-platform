import prisma from "@/lib/prismadb";
// import { getSelf } from "./auth-service";



export const getRecommended = async () => {
	const users = await prisma.user.findMany({
		orderBy: {
			createdAt: "desc"
		}
	})
	return users
}