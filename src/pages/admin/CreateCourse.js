// import { useState } from 'react';

function CreateCourse() {
	// const [file, setFile] = useState('');
	return (
		<>
			<div className='px-[400px] mt-[50px] '>
				<div className='bg-slate-100 w-full h-[500px] rounded-lg border-[3px] border-slate-400'>
					<div className='text-center mt-4'>
						<h1 className='text-5xl font-bold'>Create Course</h1>
					</div>
					<div className='flex flex-col justify-center gap-5 px-[150px] mt-[50px]'>
						<input
							className='h-[40px] bg-slate-300 p-4 placeholder-gray-600 rounded-xl'
							placeholder='Course Name'
						/>
						<input
							className='h-[40px] bg-slate-300 p-4 placeholder-gray-600 rounded-xl'
							placeholder='Description'
						/>
						<input
							className='h-[40px] bg-slate-300 p-4 placeholder-gray-600 rounded-xl'
							placeholder='Price'
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateCourse;
