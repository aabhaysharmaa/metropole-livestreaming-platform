import { Input } from "@/components/ui/input"
import CopyButton from "./copy-button"

interface UrlCardProps {
	value: string | null
}

const UrlCard = ({ value }: UrlCardProps) => {
	return (
		<div className="rounded-xl p-6 flex space-x-10 bg-[#252731]">
			<div className="flex items-center">
				<p className="shrink-0 font-semibold">Server URL</p>
			</div>
			<div className="space-y-2 w-full">
				<div className="w-full flex items-center gap-x-2">
					<Input placeholder="Server URL" value={value || ""} className="bg-[#0A0C10] border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0
					" disabled />
					<CopyButton
					 value={value || ""}
					/>
				</div>
			</div>

		</div>
	)
}

export default UrlCard
