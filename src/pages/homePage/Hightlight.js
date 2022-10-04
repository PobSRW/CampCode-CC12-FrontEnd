function Hightlight() {
	return (
		<div className='px-[220px] mt-5'>
			<div className='flex items-center text-center bg-gray-100 rounded-2xl'>
				<div className='w-1/2 '>
					<h1 className='text-4xl font-extrabold'>
						DISCOVERY A NEW WAY OF LEARNING
					</h1>
					<h2 className='text-m mt-4'>
						Hope's mission is to provide an individualized and personalized
						<br />
						online academic experience
					</h2>
					<button className='mt-8 bg-orange-300'> Start now</button>
				</div>

				<div className='w-1/2'>
					<img
						className=' rounded-r-2xl z-[-1]'
						src='https://www.nuttaputch.com/wp-content/uploads/2020/03/cropped-behind-the-mac-ad.jpg'
						alt='student'
						// 'https://pedagoo.com/wp-content/uploads/2020/06/2250x1500_czy-warto-korzystac-ze-szkolen-online-ollh.jpg'
					/>
				</div>
			</div>
		</div>
	);
}

export default Hightlight;
