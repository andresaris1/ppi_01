import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";


function UserIconOptions( { setOpen } ) {

    const { setLoggedIn } = useContext(AppContext)
    
    const handleLoggout = () => { 
        localStorage.removeItem('authTokens')
        setLoggedIn(false)
        setOpen(false)
    }

    return(
        <ul style = { {top: "41px"} } >
            <li> <Link to={"/profile"} onClick={ () => setOpen(false) }> Ver perfil</Link> </li>
            <li> <Link to={"/home"} onClick={handleLoggout} >Salir </Link> </li>
        </ul>
    )
}

export { UserIconOptions }