
import { getSelfByUsername } from "@/lib/auth-service"
import { redirect } from "next/navigation"
import { ReactNode } from "react";
import NavBar from "./_components/navbar";
import {SideBar} from "./_components/sidebar";
import { Container } from "./_components/sidebar/container";

interface CreatorLayoutProps {
	params: { username: string }
	children: ReactNode
}

const CreatorLayout = async ({
	params,
	children
}: CreatorLayoutProps) => {
	const { username } = await params
	const self = await getSelfByUsername(username)

	if (!self) {
		redirect("/")
	}

	return (
		<div>
			<NavBar />
			<div className="flex h-full pt-20">
				<SideBar/>
				<Container>
				{children}
				</Container>
			</div>
		</div>
	)
}

export default CreatorLayout
