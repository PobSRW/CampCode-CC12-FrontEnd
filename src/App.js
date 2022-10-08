import './App.css';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<>
			<Router />
			<ToastContainer autoClose='2000' position='bottom-right' />
		</>
	);
}

export default App;
