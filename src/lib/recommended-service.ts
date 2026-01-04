import prisma from "@/lib/prismadb";
// import { getSelf } from "./auth-service";



export const getRecommended = async () => {
	await new Promise(resolve => setTimeout(resolve,10000))
	const users = await prisma.user.findMany({
		orderBy: {
			createdAt: "desc"
		}
	})
	return users
}