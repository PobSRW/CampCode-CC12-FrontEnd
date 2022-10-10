import { useState } from 'react';
import DeleteModal from '../../component/DeleteModal';
import UpdateModal from '../../component/UpdateModal';
import { useAuthContext } from '../../context/authContext';
import { useCourseContext } from '../../context/courseContext';
import { useCartContext } from '../../context/cartContext';

function CourseItem({
	courseName,
	price,
	image,
	id,
	disable = false,
	description,
	instructorId,
	instructorFirstName,
	instructorLastName,
}) {
	const { addItemToCart } = useCartContext();
	const { isAdmin } = useAuthContext();
	const { fetchCourseItemById } = useCourseContext();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);

	return (
		<div className='bg-stone-200 w-[260px] h-[350px] rounded-2xl text-center border-[2px] border-gray-300 shadow-xl relative'>
			{isAdmin && !disable ? (
				<>
					<div className='absolute -right-5 -top-5'>
						<button
							className='bg-lime-500 w-[40px] h-[40px] rounded-full mr-2'
							onClick={() => {
								// console.log(id);
								setOpenUpdateModal(true);
								fetchCourseItemById(id);
							}}
						>
							<i className='fa-solid fa-pen-to-square text-2xl text-slate-50'></i>
						</button>
						<button
							className='bg-red-500 w-[40px] h-[40px] rounded-full'
							onClick={() => {
								setOpenDeleteModal(true);
							}}
						>
							<i className='fa-solid fa-trash text-2xl text-slate-50'></i>
						</button>
						<DeleteModal
							openDeleteModal={openDeleteModal}
							closeDeleteModal={() => setOpenDeleteModal(false)}
							id={id}
							courseName={courseName}
						/>
						<UpdateModal
							openUpdateModal={openUpdateModal}
							closeUpdateModal={() => setOpenUpdateModal(false)}
							courseName={courseName}
							description={description}
							price={price}
							instructorId={instructorId}
							id={id}
						/>
					</div>
				</>
			) : (
				''
			)}
			<div className='w-[256px] h-[210px] flex justify-center '>
				<img
					className='rounded-t-2xl  min-w-full'
					alt='Course'
					src={
						image ||
						'https://p4.wallpaperbetter.com/wallpaper/153/716/917/anime-original-animal-ears-black-hair-computer-hd-wallpaper-preview.jpg'
					}
				/>
			</div>
			<h1 className='mt-2'>{courseName}</h1>
			<h2>
				{instructorFirstName} {instructorLastName}
			</h2>
			<div className=''>
				<h3>{price} Baht</h3>
				<button
					className='bg-pink-500 w-[160px] h-[45px]'
					onClick={() =>
						addItemToCart({
							courseName,
							price,
							image,
							id,
							description,
							instructorId,
							instructorFirstName,
							instructorLastName,
						})
					}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default CourseItem;
