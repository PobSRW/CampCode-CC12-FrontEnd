import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './context/authContext';
import CourseContextProvider from './context/courseContext';
import InstructorContextProvider from './context/instructorContext';
import CartContextProvider from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<CourseContextProvider>
					<InstructorContextProvider>
						<CartContextProvider>
							<App />
						</CartContextProvider>
					</InstructorContextProvider>
				</CourseContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
