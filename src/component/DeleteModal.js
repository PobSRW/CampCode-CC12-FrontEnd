function DeleteModal({ openDeleteModal, closeDeleteModal }) {
	if (!openDeleteModal) {
		return null;
	}
	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-opacity-75 z-40'>
			<div className='flex justify-center items-center h-full'>
				<div className='flex flex-col bg-white w-[300px] h-[200px] rounded-lg justify-items-center'>
					<button
						className=' w-[50px] mt-3 ml-[250px]'
						onClick={closeDeleteModal}
					>
						<i className='fa-solid fa-xmark text-black'></i>
					</button>
					<div>
						<h1 className='text-xl font-bold mt-4 text-black'>
							Do you want to delete this course ?
						</h1>
					</div>
					<div className='mt-5 gap-5 flex justify-center'>
						<div>
							<button className='bg-blue-700 w-[80px] h-[40px] text-slate-100 text-m font-bold border-2 border-sky-600 rounded-xl'>
								{' '}
								Confirm
							</button>
						</div>
						<div>
							<button
								className='bg-zinc-100 w-[80px] h-[40px] border-2 border-slate-500 rounded-xl text-m font-bold'
								onClick={closeDeleteModal}
							>
								{' '}
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
