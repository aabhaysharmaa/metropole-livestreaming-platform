import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";


export async function POST(req: NextRequest) {
	if (!process.env.CLERK_WEBHOOK_SIGNING_SECRET) {
		throw new Error("No CLERK_WEBHOOK_SIGNING_SECRET Found")
	}
	try {
		const evt = await verifyWebhook(req);
		console.log(evt)
		//  Create the User
		if (evt.type === "user.created") {
			await prisma.user.create({
				data: {
					username: evt.data.username!,
					externalUserId: evt.data.id,
				}
			})
		}

		// Update The User
		if (evt.type === "user.updated") {
			await prisma.user.update({
				where:
					{ externalUserId: evt.data.id }
				, data: {
					username: evt.data.username!,
					imageUrl: evt.data.image_url
				}
			})
		}
		// Delete the User
		if (evt.type === "user.deleted") {
			await prisma.user.delete({
				where: {
					externalUserId: evt.data.id
				}
			})
		}

		const { id } = evt.data
		const eventType = evt.type
		console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
		console.log('Webhook payload:', evt.data)


		return new Response("ok", { status: 200 })
	} catch (error) {
		console.error("Error verifying webhook:", error)
		return new Response("Error verifying webhook", { status: 400 })
	}
}