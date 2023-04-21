import { useContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { AppContext } from "../../context/AppContext";

const BASE_URL = 'https://bicimaps.herokuapp.com/api'

function useAxios(){

    const { authTokens, setAuthTokens } = useContext(AppContext) 

    const axiosIntance = axios.create({
        baseURL : BASE_URL,
        headers : {
            Authorization : `Bearer ${authTokens?.access}`
        }
    })

    axiosIntance.interceptors.request.use( async req => {

        const user = jwtDecode(authTokens?.access)
        const expiredToken = (user.exp - new Date().now()) < 0

        if( !expiredToken ){ return req }

        let response = await axios.post(`${BASE_URL}/token/refresh/`, {
            refresh : authTokens.refresh
        })

        const tokens = response.data

        localStorage.setItem('authTokens', JSON.stringify(tokens))
        setAuthTokens(tokens)

        req.headers.Authorization = `Bearer ${tokens.access}`

        return req

    } )

    return axiosIntance
}

export { useAxios }