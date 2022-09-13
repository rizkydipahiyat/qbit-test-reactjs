import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from "../constants/userConstant";

export const login = (username, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: {
				username,
				password,
			},
		});
		localStorage.setItem("userInfo", JSON.stringify({ username, password }));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	dispatch({ type: USER_LOGOUT });
};
