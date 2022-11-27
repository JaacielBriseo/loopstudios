export const GridGalleryItem = ({ deskImg, mobImg, imgtext }) => {
	return (
		<div className='group relative overflow-hidden md:w-1/4'>
			<img src={deskImg} alt='Earth' className='hidden w-full duration-200 md:block group-hover:scale-110' />
			<img src={mobImg} alt='Earth' className='w-full md:hidden' />

			<div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70'></div>

			<h5 className='absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black'>
				{imgtext}
			</h5>
		</div>
	);
};
