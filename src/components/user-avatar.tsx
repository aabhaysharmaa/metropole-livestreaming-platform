import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LiveBadge from "./live-badge";
const avatarSizes = cva(
	"",
	{
		variants: {
			size: {
				default: "h-8 w-8",
				lg: "h-14 w-14"
			}
		},
		defaultVariants: {
			size: "default"
		}
	}
)

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
	imageUrl: string | null
	username: string
	isLive?: boolean
	showBadge?: boolean
}
const UserAvatar = ({
	isLive,
	imageUrl,
	username,
	showBadge,
	size
}: UserAvatarProps) => {
	const canShowBadge = showBadge && isLive;
	return (
		<div className="relative">
			<Avatar className={cn("", isLive && "ring-2 ring-offset-2 ring-offset-neutral-800   ring-rose-500",
				avatarSizes({ size })
			)}>
				<AvatarImage src={imageUrl || "/placeholder.png"} className="object-cover" />
				<AvatarFallback>
					{username[0]}
					{username[username.length - 1]}
				</AvatarFallback>
			</Avatar>
			{canShowBadge && (
				<div className="absolute  -bottom-2 left-1/2 transform  -translate-x-1/2">
					<LiveBadge />
				</div>
			)}
		</div>
	)
}

export default UserAvatar ;

type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes>;

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
	return <>
		<Skeleton className={cn("rounded-full",
			avatarSizes({ size })
		)}
		/>
	</>
}