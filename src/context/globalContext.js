import React, { createContext, useReducer, useContext } from "react";
import { globalReducer } from "./reducer";
const GlobalStore = createContext();
const Context = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, {
		movies: [],
	});
	return (
		<GlobalStore.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStore.Provider>
	);
};
export default Context;
export const GlobalState = () => {
	return useContext(GlobalStore);
};
