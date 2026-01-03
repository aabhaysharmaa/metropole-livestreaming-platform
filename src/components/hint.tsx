import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip";
import { ReactNode } from "react";


interface HintProps {
	label: string;
	align?: "start" | "center" | "end"
	children: ReactNode
	side?: "right" | "bottom" | "left" | "top";
	asChild?: boolean
}


export const Hint = ({
	children,
	label,
	side,
	asChild,
	align
}: HintProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild={asChild}>
					{children}
				</TooltipTrigger>
				<TooltipContent align={align} side={side}>
					<p className="font-bold">
						{label}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}