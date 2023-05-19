import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

export function PublicRoutes( {children} ){

    const { loggedIn } = useContext(AppContext)
    return (
        <>
            {
                
                loggedIn ? (
                    <Navigate to="/map"/>
                ) :
                children
            }            
        </>
    )
}
