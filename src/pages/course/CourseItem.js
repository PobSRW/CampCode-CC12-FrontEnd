import { useState } from 'react';
import DeleteModal from '../../component/DeleteModal';
import { useAuthContext } from '../../context/authContext';

function CourseItem({ courseName, price, image }) {
	const { isAdmin } = useAuthContext();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	return (
		<div className='bg-stone-200 w-[260px] h-[350px] rounded-2xl text-center border-[2px] border-gray-300 shadow-xl relative'>
			{isAdmin ? (
				<>
					<div className='absolute -right-5 -top-5'>
						<button className='bg-lime-500 w-[40px] h-[40px] rounded-full mr-2'>
							<i className='fa-solid fa-pen-to-square text-2xl text-slate-50'></i>
						</button>
						<button
							className='bg-red-500 w-[40px] h-[40px] rounded-full'
							onClick={() => setOpenDeleteModal(true)}
						>
							<i className='fa-solid fa-trash text-2xl text-slate-50'></i>
						</button>
						<DeleteModal
							openDeleteModal={openDeleteModal}
							closeDeleteModal={() => setOpenDeleteModal(false)}
						/>
					</div>
				</>
			) : (
				''
			)}
			<img
				className='rounded-t-2xl'
				alt='Course'
				src={
					image ||
					'https://p4.wallpaperbetter.com/wallpaper/153/716/917/anime-original-animal-ears-black-hair-computer-hd-wallpaper-preview.jpg'
				}
			/>
			<h1 className='mt-2'>{courseName}</h1>
			<h2>Instructor</h2>
			<div className=''>
				<h3>B{price}</h3>
				<button className='bg-pink-500 w-[160px] h-[45px]'>Add to cart</button>
			</div>
		</div>
	);
}

export default CourseItem;
