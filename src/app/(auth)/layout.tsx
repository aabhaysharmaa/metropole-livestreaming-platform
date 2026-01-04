import { ReactNode } from "react"
import Logo from "./_components/logo"

const AuthLayout = ({children} : { children: ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col space-y-10  items-center justify-center h-full w-full">
			<Logo/>
			{children}
		</div>
	)
}

export default AuthLayout
