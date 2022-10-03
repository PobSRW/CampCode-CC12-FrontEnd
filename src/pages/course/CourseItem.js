function CourseItem() {
	return (
		<div className='bg-stone-200 w-[260px] h-[350px] rounded-2xl text-center border-[2px] border-gray-300 shadow-xl'>
			<img
				className='rounded-t-2xl'
				src='https://p4.wallpaperbetter.com/wallpaper/153/716/917/anime-original-animal-ears-black-hair-computer-hd-wallpaper-preview.jpg'
			/>
			<h1 className='mt-2'>Course Name</h1>
			<h2>Instructor</h2>
			<div className=''>
				<h3>B2,500</h3>
				<button className='bg-pink-500 w-[160px] h-[45px]'>Add to cart</button>
			</div>
		</div>
	);
}

export default CourseItem;
