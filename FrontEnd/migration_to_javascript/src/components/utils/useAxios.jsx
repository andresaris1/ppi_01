import { useContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { AppContext } from "../../context/AppContext";

const BASE_URL = "https://bicimaps.herokuapp.com/api";

// Custom hook for Axios instance with token handling
function useAxios() {
  const { authTokens, setAuthTokens } = useContext(AppContext);

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${authTokens?.access}`,
      "Content-Type": "application/json",
    },
  });

  // Intercept the requests and handle token expiration
  axiosInstance.interceptors.request.use(async (req) => {
    // Decode the token to check for expiration
    const user = jwtDecode(authTokens?.access);
    const expiredToken = user.exp < Date.now() / 1000;

    if (!expiredToken) {
      return req; // Return the request if token is not expired
    }

    // Refresh the token using the refresh token
    const response = await axios.post(`${BASE_URL}/token/refresh/`, {
      refresh: authTokens.refresh,
    });

    const tokens = response.data;
    // Store the new tokens in local storage and update the context
    localStorage.setItem("authTokens", JSON.stringify(tokens));
    setAuthTokens(tokens);
    req.headers.Authorization = `Bearer ${tokens.access}`;

    return req;
  });

  return axiosInstance;
}

export { useAxios };
