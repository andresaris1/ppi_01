import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function PasswordField({value, name, onChange, placeholder}){

    const [show, setShow] = useState(false) 
    const handleShow =  () => setShow(!show)
        
    return(
        <div className="mt-2 relative">
            <input  
                value = { value } 
                name = { name } 
                onChange = { onChange }
                placeholder = { placeholder }
                type = { show ? "text" : "password" }
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-green sm:text-sm sm:leading-6"
            />
            <button type="button" className="absolute top-1/2 right-3 transform -translate-y-1/2">
                {
                    show ?
                    <HiEyeOff onClick={handleShow} className="h-5 w-5 text-gray-400" aria-hidden="true" /> :
                    <HiEye onClick={handleShow} className="h-5 w-5 text-gray-400" aria-hidden="true" />    
                }
            </button>
        </div>
    ) 
}

export { PasswordField }
