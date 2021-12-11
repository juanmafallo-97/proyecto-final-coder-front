import * as userApi from "../api/user";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_PENDING" });
    const response = await userApi.register(userData);
    if (response.data.error) {
      dispatch({ type: "REGISTER_FAILURE", payload: response.data.message });
    } else dispatch({ type: "REGISTER_SUCCESS", payload: userData.name });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: "REGISTER_FAILURE", payload: err.message });
  }
};

export const validateUser = (email, token) => async (dispatch) => {
  try {
    const response = await userApi.getCurrentUser(email, token);
    console.log(response);
    const user = response.data.user;
    dispatch({ type: "LOGIN_SUCCESS", payload: { user } });
  } catch (err) {
    console.log(err.message, err.request, err.response);
    dispatch({ type: "LOGIN_FAILURE", payload: "Session expired" });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const response = await userApi.login(userData);
    console.log(response);
    const { user } = response.data;
    dispatch({ type: "LOGIN_SUCCESS", payload: { user } });
  } catch (err) {
    const error = err.response.data.message;
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("authToken");
    dispatch({ type: "LOGOUT" });
  } catch (err) {
    console.log(err.message);
  }
};
