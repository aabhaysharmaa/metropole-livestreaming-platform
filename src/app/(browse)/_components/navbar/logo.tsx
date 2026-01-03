import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={"/"} className="cursor-pointer">
			<div className="flex  items-center gap-x-4 hover:opacity-75 ">
				<Image src={"/metropole.png"} alt="logo" height={80} width={80} />
			</div>
		</Link>
	)
}

export default Logo
