"use server";

import {
	IngressClient,
	IngressInput,
	IngressVideoEncodingPreset,
	RoomServiceClient,
	TrackSource,
	type CreateIngressOptions
} from "livekit-server-sdk";

import { getSelf } from "@/lib/auth-service";
import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";



const roomService = new RoomServiceClient(
	process.env.LIVEKIT_API_URL!,
	process.env.LIVEKIT_API_KEY!,
	process.env.LIVEKIT_API_SECRET!,
)

const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL!);

export const resetIngresses = async (hostIdentity: string) => {
	const ingresses = await ingressClient.listIngress({
		roomName: hostIdentity
	})
	const rooms = await roomService.listRooms([hostIdentity]);

	for (const room of rooms) {
		await roomService.deleteRoom(room.name);
	}
	for (const ingress of ingresses) {
		if (ingress.ingressId) {
			await ingressClient.deleteIngress(ingress.ingressId)
		}
	}

}

export const createIngress = async (ingressType: IngressInput) => {
	const self = await getSelf();

	await resetIngresses(self.id);

	const options: CreateIngressOptions = {
		name: self.username,
		roomName: self.id,
		participantName: self.username,
		participantIdentity: self.id,
	};
	if (ingressType === IngressInput.WHIP_INPUT) {
		options.bypassTranscoding = true;
		options.video = {
			source: TrackSource.CAMERA,
			preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS, //  valid preset
		};
	} else {
		options.audio = {
			source: TrackSource.MICROPHONE,
			codec: "opus",       // or AudioCodec.OPUS if imported
			bitrate: 96000,      // 96   kbps
			channels: 2,         // stereo
			sampleRate: 48000,   // typical for Opus
		};
	}

	const ingress = await ingressClient.createIngress(ingressType, options);

	if (!ingress?.url || !ingress?.streamKey) {
		throw new Error("Failed to create ingress");
	}

	await prisma.stream.update({
		where: { userId: self.id },
		data: {
			ingressId: ingress.ingressId,
			serverUrl: ingress.url,
			streamKey: ingress.streamKey,
		},
	});

	revalidatePath(`/u${self.username}/keys`);

	//  return plain object, not class instance
	return {
		ingressId: ingress.ingressId,
		url: ingress.url,
		streamKey: ingress.streamKey,
	};
};


