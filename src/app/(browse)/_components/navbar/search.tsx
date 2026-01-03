"use client";
import queryString from "query-string";
import { FormEvent, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export const Search = () => {
	const router = useRouter();
	const [value, setValue] = useState("");

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(!value) return  ;
		const url = queryString.stringifyUrl({
			url: "/search",
			query:{term : value}
		}, { skipEmptyString: true })
		router.push(url)
	}

	const clear = () => {
		setValue("")
	}
	return (
		<form onSubmit={onSubmit} className="relative ml-2 w-full lg:w-100 flex">
			<Input type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="bg-[#0A0C10]/60 placeholder:text-sm  border-0 p-1 border-r-0 rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent
			 focus-visible:right-offset-0
			"
				placeholder="Search"
			/>
			{value && (
				<X onClick={clear} className="size-5 hover:text-white/60 transition absolute right-12 top-2.5 text-muted-foreground cursor-pointer" />
			)}
			<Button   className="rounded-l-none cursor-pointer hover:bg-[#3B9797]/80 bg-[#3B9797]/50"  >
				<SearchIcon className="size-5 text-white/60" />
			</Button>
		</form>
	)
}


