import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"


export const TitleSkeleton = ({ className }: { className?: string }) => {
	return (
		<div className="px-4 my-3">
			<Skeleton className={cn("w-30 px-4 py-4",className)} />
		</div>
	)
}


