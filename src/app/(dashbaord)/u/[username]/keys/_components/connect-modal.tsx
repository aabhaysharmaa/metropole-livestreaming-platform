"use client";

import { createIngress } from "@/actions/ingress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IngressInput } from "livekit-server-sdk";
import { AlertTriangle, Loader2 } from "lucide-react";
import { ElementRef, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT)


type IngressType = typeof RTMP | typeof WHIP;

const ConnectModal = () => {
	const closeRef = useRef<ElementRef<"button">>(null)
	const [isPending, startTransition] = useTransition();
	const [ingressType, setIngressType] = useState<IngressType>(RTMP)


	const onSubmit = () => {
		startTransition(() => {
			createIngress(parseInt(ingressType))
				.then(() => {
					toast.success("Ingress Created")
					closeRef.current?.click()
				})
				.catch(() => toast.error("Something went Wrong!"))
		})
	}


	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button disabled={isPending} variant="primary" className="text-white ">Generate Connection</Button>
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Generate Connection</DialogTitle>
				</DialogHeader>
				<Select
					disabled={isPending}
					value={ingressType}
					onValueChange={(value) => setIngressType(value)}
				>
					<SelectTrigger className="w-full" >
						<SelectValue placeholder="Ingress Type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={RTMP}>RTMP</SelectItem>
						<SelectItem value={WHIP}>WHIP</SelectItem>
					</SelectContent>
				</Select>
				<Alert >
					<AlertTriangle className="size-4" />
					<AlertTitle>Warning!</AlertTitle>
					<AlertDescription className="">This action will reset all the active streams using the current connection </AlertDescription>
				</Alert>
				<div className="flex justify-between">
					<DialogClose asChild ref={closeRef}>
						<Button >
							Cancel
						</Button>
					</DialogClose>
					<Button  className="w-30" onClick={onSubmit} variant={"primary"}>{isPending ? <Loader2 className="animate-spin transition"/> : "Generate" }</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ConnectModal
