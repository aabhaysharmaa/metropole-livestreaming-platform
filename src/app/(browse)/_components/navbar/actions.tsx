import { Button } from "@/components/ui/button";
import {
	SignInButton,
	UserButton
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
	const user = await currentUser();
	return (
		<div className="flex items-center gap-x-2 ml-4 justify-end ">
			{!user && (
				<SignInButton>
					<Button variant={"primary"} className="cursor-pointer ">
						Log In
					</Button>
				</SignInButton>
			)}
			{!!user &&
				<div className="flex items-center gap-x-4">
					<Button   size={"sm"} className="flex items-center cursor-pointer text-zinc-400 hover:text-white/70"  asChild>
						<Link href={`/u/${user.username}`} className="flex gap-2 items-center justify-center text-muted-foreground">
							<Clapperboard className="size-5" />
							<span className="hidden lg:flex ">Dashboard</span>
						</Link>
					</Button>
					<UserButton afterSignOutUrl="/sign-in" />
				</div>
			}
		</div>
	)
}
export default Actions
