// import { useState } from 'react';
import { useState } from 'react';
import { useInstructorsContext } from '../../context/instructorContext';
import { useCourseContext } from '../../context/courseContext';

function CreateCourse() {
	const { createCourse, fetchCourseItem, fetchNewCourseItem } =
		useCourseContext();
	const { instructors } = useInstructorsContext();

	const [createCourseData, setCreateCourseData] = useState({
		courseName: '',
		description: '',
		price: '',
		instructorId: '',
	});

	const [image, setImage] = useState('');
	const [video, setVideo] = useState('');

	const handleOnChange = (e) => {
		setCreateCourseData({
			...createCourseData,
			[e.target.name]: e.target.value,
		});
	};

	const handleClickSubmit = async () => {
		try {
			const formData = new FormData();
			formData.append('courseName', createCourseData.courseName.toUpperCase());
			formData.append('description', createCourseData.description);
			formData.append('priceCurrent', createCourseData.price);
			formData.append('instructorId', createCourseData.instructorId);
			formData.append('courseImage', image);
			formData.append('courseVideo', video);
			await createCourse(formData);
			await fetchCourseItem();
			await fetchNewCourseItem();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className='px-[330px] mt-[50px] '>
				<div className='bg-slate-100 w-full h-[500px] rounded-lg border-[3px] border-slate-400'>
					<div className='text-center mt-4'>
						<h1 className='text-5xl font-bold'>Create Course</h1>
					</div>
					<div className='flex flex-col justify-center gap-5 px-[150px] mt-[50px]'>
						<input
							className='h-[40px] bg-slate-300 p-4 placeholder-gray-600 rounded-xl'
							placeholder='Course Name'
							name='courseName'
							onChange={handleOnChange}
						/>
						<input
							className='h-[40px] bg-slate-300 p-4 placeholder-gray-600 rounded-xl'
							placeholder='Description'
							name='description'
							onChange={handleOnChange}
						/>
						<div className='flex gap-5 justify-between'>
							<input
								className='h-[40px] bg-slate-300 p-4 placeholder-gray-600 rounded-xl w-3/5'
								placeholder='Price'
								name='price'
								onChange={handleOnChange}
							/>
							<div className='w-2/5'>
								<select
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									onChange={(e) =>
										setCreateCourseData((prev) => {
											return { ...prev, instructorId: e.target.value };
										})
									}
								>
									<option defaultValue>Select Instructor</option>
									{instructors?.map((instructor) => (
										<option value={instructor.id} key={instructor.id}>
											{instructor.firstName} {instructor.lastName}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='flex gap-5 h-[40px] items-center bg-slate-300 rounded-xl p-4'>
							<h1 className='text-gray-600'> Course Image : </h1>
							<input
								type='file'
								name='courseImage'
								onChange={(e) => {
									setImage(e.target.files[0]);
								}}
							/>
						</div>
						<div className='flex gap-5 h-[40px] items-center bg-slate-300 rounded-xl p-4'>
							<h1 className='text-gray-600'> Course Video : </h1>
							<input
								type='file'
								id='courseVideo'
								name='courseVideo'
								onChange={(e) => {
									setVideo(e.target.files[0]);
								}}
							/>
						</div>
						<button
							className='h-[40px] text-2xl bg-blue-500 rounded-xl text-gray-50'
							onClick={handleClickSubmit}
						>
							Create
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateCourse;
