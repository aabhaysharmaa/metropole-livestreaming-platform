import React from 'react'
import { ToggleCardSkeleton } from './_components/toggle-card'
import { TitleSkeleton } from '@/app/(browse)/_components/sidebar/title-skeleton'

const Loading = () => {
	return (
		<div className='space-y-6 p-4'>
			<TitleSkeleton className='p-4 h-12 w-50 mb-4' />
			<ToggleCardSkeleton />
			<ToggleCardSkeleton />
			<ToggleCardSkeleton />
		</div>
	)
}

export default Loading
