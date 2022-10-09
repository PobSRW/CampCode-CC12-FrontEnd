import { createContext, useContext, useEffect, useState } from 'react';
import * as authAPI from '../api/authApi';
import {
	addLocalStorage,
	getLocalStorage,
	removeLocalStorage,
} from '../utils/localStorage';
import jwt from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(false);
	const [userData, setUserData] = useState({});
	const [isAdmin, setIsAdmin] = useState(false);

	// const navigate = useNavigate();

	useEffect(() => {
		if (getLocalStorage()) {
			setUser(true);
		}
		if (getLocalStorage()) {
			const token = getLocalStorage();
			const userData = jwt(token);
			setUserData(userData);
			if (userData.role === 'Admin') {
				// .role มาจากหลังบ้าน
				setIsAdmin(true);
			}
		}
	}, [user]);

	const register = async (input) => {
		const res = await authAPI.register(input);
		addLocalStorage(res.data.token);
		const token = res.data.token;
		const userData = jwt(token);
		if (userData.role === 'Admin') {
			// .role มาจากหลังบ้าน
			setIsAdmin(true);
		}
		setUser(true);
		setUserData(userData);
	};

	const login = async ({ email, password }) => {
		const res = await authAPI.login({ email, password });

		const token = res.data.token;
		const userData = jwt(token);
		if (userData.role === 'Admin') {
			setIsAdmin(true);
		}
		addLocalStorage(res.data.token);
		setUser(true);
		setUserData(userData);
		console.log(userData);
	};

	const logout = async () => {
		removeLocalStorage();
		setUser(false);
		setIsAdmin(false);
	};

	return (
		<AuthContext.Provider
			value={{ register, login, logout, user, isAdmin, userData }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthContextProvider;
