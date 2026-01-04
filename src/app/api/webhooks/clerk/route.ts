import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server';
import prisma from '@/lib/prismadb';
export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)


    //  create User
    if (evt.type === "user.created") {
      await prisma.user.create({
        data: {
          username: evt.data.username ?? "",
          imageUrl: evt.data.image_url,
          externalUserId: evt.data.id
        }
      })
    }

    //  update users
    if (evt.type === "user.updated") {
      await prisma.user.update({
        where: {
          externalUserId: evt.data.id
        },
        data: {
          imageUrl: evt.data.image_url,
          username: evt.data.username!,
        }
      })
    }

    // Delete  users
    if (evt.type === "user.deleted") {
      await prisma.user.delete({
        where: {
          externalUserId: evt.data.id
        }
      })
    }

    //  return response 200 its everything is good
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}