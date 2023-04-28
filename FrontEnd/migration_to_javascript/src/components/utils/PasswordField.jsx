import { useState } from "react";
import openEye from '../../assets/eye-solid.svg'
import closeEye from '../../assets/eye-slash-solid.svg'



function PasswordField({value, name, onChange, placeholder}){

    const [show, setShow] = useState(false) 

    const handleShow =  () => setShow(!show)
        
    return(
        <div className='password_field'>
            <input  value={value} 
                name={name} 
                onChange={onChange} 
                placeholder= {placeholder}
                type={show ? "text": "password"}
                required
            />
            <button type="button"
                    className="show_password_btn"
                    onClick={handleShow}>
                    {show?<img src={closeEye}/> : <img src={openEye}/> }
            </button>   
        </div>
    ) 
}

export { PasswordField }
