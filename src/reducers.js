import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from "./constants.js";

const initialStateSearch = {
	searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
	// console.log(action.type)
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			// return Object.assign({}, state, {searchField:action.payload})
			return { ...state, searchField: action.payload };
		default:
			return state;
	}
};

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  console.log(action.type)
	switch (action.type) {
		case REQUEST_ROBOTS_PENDING:
			return { ...state, isPending: true };
		// return Object.assign({}, state, {isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return { ...state, robots: action.payload, isPending: false };
		// return Object.assign({}, state, {robots: action.payload })
		case REQUEST_ROBOTS_FAILED:
			return { ...state, isPending: false, error: action.payload };
		// return Object.assign({}, state, {isPending: true })
		default:
			return state;
	}
};
