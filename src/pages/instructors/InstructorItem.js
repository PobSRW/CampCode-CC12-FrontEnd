function InstructorItem({ firstName, lastName, reviewScore, profileImage }) {
	return (
		<div>
			<div className='flex w-[530px] h-[280px] bg-slate-200 my-3 rounded-xl border-[4px] border-slate-800 shadow-lg'>
				<div className='rounded-l-xl w-1/2 p-[10px] mt-[6px]'>
					<img
						className='rounded-full border-[4px] border-slate-800 '
						alt='instructor'
						src={
							profileImage ||
							'https://i.pinimg.com/280x280_RS/e2/34/fe/e234fe6524a9bd9079a369e6e9228f64.jpg'
						}
					/>
				</div>
				<div className='w-1/2 text-center mt-[30px]'>
					<h1>
						{firstName} {lastName}
					</h1>
					<h1>{reviewScore}</h1>
				</div>
			</div>
		</div>
	);
}

export default InstructorItem;
