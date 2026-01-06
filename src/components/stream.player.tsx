"use client";

import { Stream, User } from "@/generated/prisma/client";
import { useViewerToken } from "@/hooks/user-viewer-token";

interface StreamPlayerProps {
	user: User & { stream: Stream | null };
	stream: Stream;
	isFollowing: boolean
}

export const StreamPlayer = ({
	user,
	stream,
	isFollowing
}: StreamPlayerProps) => {
	const {
		token,
		name,
		identity
	} = useViewerToken(user.id) ;

	if (!token || !name || !identity) {
		return (
			<div>
				Cannot watch stream
			</div>
		)
	}
	return (
		<div className="">
			Allowed to watch the stream
		</div>
	)
}