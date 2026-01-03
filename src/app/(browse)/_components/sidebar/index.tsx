import { getRecommended } from '@/lib/recommended-service';
import Recommended, { RecommendedSkeleton } from './recommended';
import Toggle from './toggle'
import Wrapper from './wrapper';
const Sidebar = async () => {
	const recommended = await getRecommended();

	return (
		<Wrapper>
			<Toggle />
			<div className="pt-4 lg:pt-0">
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	)
}

export default Sidebar;


export const SidebarSkeleton = () => {
	return (
		<aside className='flex left-0 flex-col w-17.5 lg:w-60 h-full bg-background border-r border-[#2D2E35]'>
			<RecommendedSkeleton />
		</aside>
	)
}