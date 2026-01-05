import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { LogOut } from "lucide-react"
import Link from "next/link"

const Actions = async () => {
	return (
		<div className="flex items-center justify-end gap-x-4">
			<Button
				size="sm"
				className="cursor-pointer bg-[#252731] hover:bg-[#252731] text-muted-foreground hover:text-white"
				asChild
			>
				<Link
					href={"/"}>
						<LogOut className="size-5 mr-2"/>
					Exit
				</Link>
			</Button>
			<UserButton
			 afterSignOutUrl="/"
			/>
		</div>
	)
}
export default Actions
