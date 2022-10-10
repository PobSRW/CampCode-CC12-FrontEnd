import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as courseApi from '../../api/courseApi';

function LearningCourse() {
	const [learningCourse, setLearningCourse] = useState('');

	const params = useParams();
	console.log(learningCourse);

	const fetchLearningCourse = async (id) => {
		try {
			const res = await courseApi.getLearningCourse(id);
			setLearningCourse(res.data.userLearningCourse);
			// console.log(res.data.userLearningCourse);
		} catch (err) {
			console.log('Fetch fetchUserCourse Error');
		}
	};

	useEffect(() => {
		fetchLearningCourse(params.courseid);
	}, []);

	// console.log(learningCourse);
	// console.log(learningCourse.Course);

	const video = learningCourse?.Course?.courseVideo;
	console.log(video);

	return (
		<div>
			<div>
				<h1>Course Name :{learningCourse?.Course?.courseName}</h1>
				{video ? (
					<video width='600' height='400' controls>
						<source src={video} type='video/mp4' />
					</video>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default LearningCourse;
