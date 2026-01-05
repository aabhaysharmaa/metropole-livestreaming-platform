"use client";

import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";


type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
	field: FieldTypes
	label: string
	value: boolean
}

const ToggleCard = ({
	field,
	label,
	value = false
}: ToggleCardProps) => {
	const [isPending, startTransition] = useTransition();
	const onChange = () => {
		startTransition(() => {
			updateStream({ [field]: !value })
				.then(() => toast.success("Chat settings updated!"))
				.catch(() => toast.error("Something went wrong"))
		})
	}
	return (
		<div className="bg-neutral-800 p-6 rounded-xl">
			<div className="flex items-center justify-between">
				<p className="font-bold">{label}</p>
				<Switch
					className="
                    data-[state=checked]:bg-green-500
                      data-[state=unchecked]:bg-gray-400"
					onCheckedChange={onChange} disabled={isPending} checked={value} >{value ? "On" : "Off"}</Switch>
			</div>
		</div>
	)
}

export default ToggleCard

export const ToggleCardSkeleton = () => {
	return (
		<Skeleton className="w-full p-10  rounded-xl" />
	)
}
