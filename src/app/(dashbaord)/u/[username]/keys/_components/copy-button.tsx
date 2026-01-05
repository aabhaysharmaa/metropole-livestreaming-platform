"use client";

interface CopyButtonProps {
	value: string
}

import { Button } from '@/components/ui/button';
import { CheckCheck, Copy } from 'lucide-react';
import React, { useState } from 'react'

const CopyButton = ({ value }: CopyButtonProps) => {

	const [isCopied, setIsCopied] = useState(false);
	const onCopy = () => {
		if (!value) return
		navigator.clipboard.writeText(value)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1000)
	}

	const Icon = isCopied ? CheckCheck : Copy

	return (
		<Button size={"sm"} disabled={!value || isCopied} className='cursor-pointer hover:bg-neutral-500 bg-neutral-700 text-white' onClick={onCopy} >
			<Icon className='size-4' />
		</Button>
	)
}

export default CopyButton;
