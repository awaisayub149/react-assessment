import { MOVIES } from "../helpers/constants";
require("es6-promise").polyfill();

export const globalReducer = (state, action) => {
	switch (action.type) {
		case MOVIES: {
			return {
				...state,
				movies: action.payload,
			};
		}
		default: {
			if (action.type.indexOf("@@") === -1) {
			}
		}
	}
	return state;
};
