import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { AppContext } from "../../context/AppContext";


function DropDown( {children} ){

    const [ open, setOpen] = useState(false) 
    const { setLoggedIn } = useContext(AppContext)

    const toggleMenu = () =>{
        setOpen(!open);
    }

    const handleLoggout = () => { 
        localStorage.removeItem('authTokens')
        setLoggedIn(false)
        setOpen(false)
    }

    return(
        <div className={"dropdown"}>
            <a onClick={toggleMenu}>{children}</a>
            <div className={'dropdown_container'}>
                {open ? 
                <ul className={'dropdown_menu'}>
                    <li> <Link to={"/profile"} onClick={ () => setOpen(false) }  >Ver perfil</Link> </li>
                    <li> <Link to={"/home"} onClick={handleLoggout} >Salir</Link> </li>
                </ul> : null
                }
            </div>
        </div>
    )
}

export { DropDown } 