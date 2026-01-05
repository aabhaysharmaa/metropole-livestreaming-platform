import { cn } from "@/lib/utils";

interface LiveBadgeProps {
	className?: string
}

const LiveBadge = ({ className }: LiveBadgeProps) => {
	return (
		<div className={cn("bg-rose-500   hover:text-white border-rose-500 text-center p-0.5 px1.5 rounded-md text-[10px] border-2 font-semibold tracking-wide uppercase", className)}>
			LIVE
		</div>
	)
}

export default LiveBadge ;

