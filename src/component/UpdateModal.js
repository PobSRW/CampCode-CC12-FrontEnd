import React, { useState } from 'react';
import { useCourseContext } from '../context/courseContext';
import { useInstructorsContext } from '../context/instructorContext';

function UpdateModal({
	openUpdateModal,
	courseName,
	closeUpdateModal,
	description,
	price,
	instructorId,
	id,
}) {
	const { onUpdateCourse, fetchCourseItem } = useCourseContext();
	const { instructors } = useInstructorsContext();
	const [data, setData] = useState({
		courseName,
		description,
		price,
		instructorId,
	});

	const [image, setImage] = useState('');

	const handleOnChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleClickSubmit = async () => {
		try {
			const formData = new FormData();
			formData.append('courseName', data.courseName.toUpperCase());
			formData.append('description', data.description);
			formData.append('priceCurrent', data.price);
			formData.append('instructorId', data.instructorId);
			if (image) {
				formData.append('courseImage', image);
			}

			await onUpdateCourse(id, formData);
			fetchCourseItem();
			closeUpdateModal();
		} catch (err) {
			console.log(err);
		}
	};

	if (!openUpdateModal) {
		return null;
	}
	return (
		<div
			className='fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-opacity-75 z-40'
			onClick={() => closeUpdateModal()}
		>
			<div className='flex justify-center items-center h-full'>
				<div
					className='flex-col bg-white w-[700px] h-[500px] rounded-lg '
					onClick={(e) => e.stopPropagation()}
				>
					<button
						className=' w-[840px] mt-3 ml-[250px]'
						onClick={() => closeUpdateModal()}
					>
						<i className='fa-solid fa-xmark text-black'></i>
					</button>

					<div>
						<span className='text-2xl font-bold  text-black'>
							Update
							<span className='text-2xl font-bold  text-blue-600'>
								{' '}
								{courseName}
							</span>{' '}
							Course
						</span>
					</div>

					<div className='px-[80px]'>
						<div className='flex items-center mt-4'>
							<div className='w-[170px] flex justify-end pr-4'>
								<span className='font-bold'>CourseName : </span>
							</div>

							<input
								className='bg-slate-300 rounded-xl px-4  h-[40px] w-full'
								type='text'
								placeholder='Course Name'
								name='courseName'
								value={data.courseName}
								onChange={handleOnChange}
							/>
						</div>

						<div className='flex items-center mt-4'>
							<div className='w-[170px] flex justify-end pr-4'>
								<span className='font-bold'>Description : </span>
							</div>

							<input
								className='bg-slate-300 rounded-xl px-4  h-[40px] w-full'
								type='text'
								placeholder='Description'
								name='description'
								value={data.description}
								onChange={handleOnChange}
							/>
						</div>

						<div className='flex items-center  mt-4 '>
							<div className=' w-[170px] flex justify-end pr-4 '>
								<span className='font-bold '>Price :</span>
							</div>

							<input
								className='bg-slate-300 rounded-xl px-4  h-[40px] w-full'
								type='text'
								name='price'
								placeholder='Price'
								value={data.price}
								onChange={handleOnChange}
							/>
						</div>

						<div>
							<div>
								<select
									className='mt-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
									defaultValue={instructorId}
									onChange={(e) =>
										setData((prev) => {
											return { ...prev, instructorId: e.target.value };
										})
									}
								>
									<option>Select Instructor</option>

									{instructors?.map((instructor) => {
										return (
											<option value={instructor.id} key={instructor.id}>
												{instructor.firstName} {instructor.lastName}
											</option>
										);
									})}
								</select>
							</div>
						</div>
						<div className='flex gap-5 h-[40px] items-center bg-slate-300 rounded-xl p-4 mt-4'>
							<h1 className='text-black font-bold'> Course Image : </h1>
							<input
								type='file'
								name='courseImage'
								onChange={(e) => {
									setImage(e.target.files[0]);
								}}
							/>
						</div>
						<div className='flex gap-5 h-[40px] items-center bg-slate-300 rounded-xl p-4 mt-4'>
							<h1 className='text-black font-bold'> Course Video : </h1>
							<input type='file' id='courseImage' />
						</div>
					</div>
					<div className='mt-5 gap-5 flex justify-center'>
						<div>
							<button
								className='bg-blue-700 w-[150px] h-[40px] text-slate-100 text-m font-bold border-2 border-sky-600 rounded-xl'
								onClick={() => {
									onUpdateCourse(data);
									handleClickSubmit();
								}}
							>
								Update
							</button>
						</div>
						<div>
							<button
								className='bg-zinc-100 w-[150px] h-[40px] border-2 border-slate-500 rounded-xl text-m font-bold'
								onClick={() => closeUpdateModal()}
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

export default UpdateModal;
