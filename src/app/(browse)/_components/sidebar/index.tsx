import { getRecommended } from '@/lib/recommended-service';
import Recommended, { RecommendedSkeleton } from './recommended';
import Toggle, { ToggleSkeleton } from './toggle'
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
		<aside className='left-0 w-17.5 min-h-screen md:w-60  bg-[#252731] border-r border-[#2D2E35]'>
			<ToggleSkeleton/>
			<RecommendedSkeleton />
		</aside>
	)
}