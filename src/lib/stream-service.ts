import prisma from "./prismadb";

export const getStreamByUserId = async (userId: string) => {
await new Promise(res => setTimeout(res, 5000));

	const stream = await prisma.stream.findUnique({
		where: {
			userId
		}
	})
	return stream
}