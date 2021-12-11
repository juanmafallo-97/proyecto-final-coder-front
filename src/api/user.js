import axios from "axios";

const baseUrl = "http://localhost:8080/users";

export const register = (userData) =>
  axios({
    method: "post",
    url: baseUrl + "/signup",
    data: userData,
    headers: {
      accept: "application/json",
      "Content-Type": "multipart/form-data"
    }
  });

export const login = (userData) => axios.post(baseUrl + "/login", userData);

export const logout = () => axios.get(baseUrl + "/logout");

export const getCurrentUser = (email, token) =>
  axios.post(baseUrl + "/me", { email }, { headers: { authorization: token } });
