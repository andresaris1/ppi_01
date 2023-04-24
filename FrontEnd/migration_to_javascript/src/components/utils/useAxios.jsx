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
            Authorization : `Bearer ${authTokens?.access}`,
            'Content-Type' : 'application/json'
        }
    })

    axiosIntance.interceptors.request.use( async req => {
        console.log( "tokens", authTokens )
        const user = jwtDecode(authTokens?.access)
        const expiredToken = user.exp < Date.now() / 1000

        console.log(expiredToken)

        if( !expiredToken ){ return req }

        const response = await axios.post(`${BASE_URL}/token/refresh/`, {
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