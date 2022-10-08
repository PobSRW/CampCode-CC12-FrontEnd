import { useCourseContext } from '../context/courseContext';

function DeleteModal({ openDeleteModal, closeDeleteModal, id, courseName }) {
	const { onDeleteCoure } = useCourseContext();

	if (!openDeleteModal) {
		return document.body.classList.remove('overflow-hidden');
	} else {
		document.body.classList.add('overflow-hidden');
	}

	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-opacity-75 z-40'>
			<div className='flex justify-center items-center h-full'>
				<div className='flex flex-col bg-white w-[450px] h-[190px] rounded-lg justify-items-center'>
					<button
						className=' w-[350px] mt-3 ml-[250px]'
						onClick={closeDeleteModal}
					>
						<i className='fa-solid fa-xmark text-black'></i>
					</button>
					<div className='mt-3'>
						<span className='text-xl font-bold mt-4 text-black'>
							Do you want to delete
						</span>
						<span className='text-xl font-bold mt-4 text-red-500'>
							{' '}
							{courseName}{' '}
						</span>
						<span className='text-xl font-bold mt-4 text-black'>course ?</span>
					</div>
					<div className='mt-5 gap-5 flex justify-center'>
						<div>
							<button
								className='bg-blue-700 w-[80px] h-[40px] text-slate-100 text-m font-bold border-2 border-sky-600 rounded-xl'
								onClick={() => {
									onDeleteCoure(id);
									closeDeleteModal();
								}}
							>
								Confirm
							</button>
						</div>
						<div>
							<button
								className='bg-zinc-100 w-[80px] h-[40px] border-2 border-slate-500 rounded-xl text-m font-bold'
								onClick={closeDeleteModal}
							>
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
