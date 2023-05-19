import React, { useState } from "react";
import '../../App.css';


function DropDown( {children, optionsConfig} ){

    const [ open, setOpen ] = useState(false) 
    
    const toggleMenu = () =>{
        setOpen(!open);
    }

    return(
        <div className={"dropdown"}>
            <a onClick={ toggleMenu }> { children } </a>
                {
                    open ?
                    <>
                        { React.cloneElement(optionsConfig, { setOpen : setOpen }) }
                    </> : 
                    null
                }
        </div>
    )
}

export { DropDown } 