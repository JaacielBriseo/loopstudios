import { GridGalleryItem } from './GridGalleryItem';
import {
	CuriosityDesk,
	DeepEarthDesk,
	NightDesk,
	SoccerDesk,
	GridDesk,
	AboveDesk,
	PocketDesk,
	FisheyeDesk,
} from '../assets/desktop';
import {
	CuriosityMob,
	DeepEarthMob,
	NightMob,
	SoccerMob,
	GridMob,
	AboveMob,
	PocketMob,
	FisheyeMob,
} from '../assets/mobile';
export const CreationsSection = () => {
	return (
		<section id='creations'>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div className='flex justify-center mb-20 md:justify-between'>
					<h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>Our Creations</h2>
					<button className='hidden btn md:block'>See All</button>
				</div>
				<div className='flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8'>
					<GridGalleryItem deskImg={DeepEarthDesk} mobImg={DeepEarthMob} imgtext='deep earth' />
					<GridGalleryItem deskImg={NightDesk} mobImg={NightMob} imgtext='night arcade' />
					<GridGalleryItem deskImg={SoccerDesk} mobImg={SoccerMob} imgtext='soccer team vr' />
					<GridGalleryItem deskImg={GridDesk} mobImg={GridMob} imgtext='the grid' />
				</div>
				<div className='mt-10 flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8'>
					<GridGalleryItem deskImg={AboveDesk} mobImg={AboveMob} imgtext='from up above vr' />
					<GridGalleryItem deskImg={PocketDesk} mobImg={PocketMob} imgtext='pocket borealis' />
					<GridGalleryItem deskImg={CuriosityDesk} mobImg={CuriosityMob} imgtext='the curiosity' />
					<GridGalleryItem deskImg={FisheyeDesk} mobImg={FisheyeMob} imgtext='make it fisheye' />
				</div>
				<div className='flex-justify-center mt-10 md:hidden'>
					<button className='btn w-full md:hidden'>See All</button>
				</div>
			</div>
		</section>
	);
};
