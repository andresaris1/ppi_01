import { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';


function DropDown( {children} ){

    const [ open, setOpen] = useState(false) 

    const toggleMenu = () =>{
        setOpen(!open);
    }

    return(
        <div className={"dropdown"}>
            <a onClick={toggleMenu}>{children}</a>
            <div className={'dropdown_container'}>
                {open ? 
                <ul className={'dropdown_menu'}>
                    <li> <Link to={"/profile"} >Ver perfil</Link> </li>
                    <li> <Link to={"/home"}>Salir</Link> </li>
                </ul> : null
                }
            </div>
        </div>
    )
}

export { DropDown } 