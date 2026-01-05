"use client";
import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";
import { useState } from "react";

interface KeyCardProps {
	value: string | null
}
const KeyCard = ({ value }: KeyCardProps) => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		if(!value) return
		setShow((value) => !value)
	}
	return (
		<div className="bg-[#252731] p-6 rounded-xl flex space-x-6">
			<div className="shrink-0">
				<p className="font-semibold">Stream Key</p>
			</div>
			<div className="w-full">
				<div className="w-full flex items-center gap-x-2">
					<Input  value={value || ""} type={show ? "text" : 'password'} placeholder="Stream Key " disabled className=" bg-[#0A0C10] border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0" />
					<CopyButton value={value || ""} />
				</div>
				<p onClick={handleShow} className="text-sm font-semibold mt-2 ml-2 hover:underline cursor-pointer">{show ? "Hide" : "Show"}</p>
			</div>
		</div>
	)
}

export default KeyCard
