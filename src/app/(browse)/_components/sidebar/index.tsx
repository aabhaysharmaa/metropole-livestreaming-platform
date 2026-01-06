import { getRecommended } from '@/lib/recommended-service';
import Recommended, { RecommendedSkeleton } from './recommended';
import Toggle, { ToggleSkeleton } from './toggle'
import Wrapper from './wrapper';
import { getFollowedUsers } from '@/lib/follow-service';
import Following, { FollowingSkeleton } from './following';
import { TitleSkeleton } from './title-skeleton';
const Sidebar = async () => {
	const recommended = await getRecommended();
	const following = await getFollowedUsers();

	return (
		<Wrapper>
			<Toggle />
			<div className="pt-4 lg:pt-0">
				<Following data={following} />
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	)
}

export default Sidebar;

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0  h-full  w-17.5 md:w-60 bg-[#252731] border-r border-[#2D2E35]">
      <ToggleSkeleton />
      <TitleSkeleton />
      <RecommendedSkeleton />
      <TitleSkeleton />
      <FollowingSkeleton />
    </aside>
  );
};
