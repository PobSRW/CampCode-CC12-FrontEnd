import { createContext, useContext, useEffect, useState } from 'react';
import * as authAPI from '../api/authAPI';
import {
	addLocalStorage,
	getLocalStorage,
	removeLocalStorage,
} from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(false);

	useEffect(() => {
		if (getLocalStorage()) {
			setUser(true);
		}
	}, [user]);

	const register = async (input) => {
		const res = await authAPI.register(input);
		addLocalStorage(res.data.token);
		setUser(true);
	};

	const login = async ({ email, password }) => {
		const res = await authAPI.login({ email, password });
		addLocalStorage(res.data.token);
		setUser(true);
	};

	const logout = async () => {
		removeLocalStorage();
		setUser(false);
	};

	return (
		<AuthContext.Provider value={{ register, login, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthContextProvider;
