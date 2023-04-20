import '../../App.css';
import { useState, useEffect } from 'react';
import { postSignup } from '../utils/signup';
import { useNavigate } from 'react-router-dom';
import { PasswordField } from '../utils/PasswordField';
const URL_SIGNUP = 'https://bicimaps.herokuapp.com/api/sign-up/';

function SignUp(){

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        first_name: '',
        last_name: '',
        has_bike: ''
    })

    const [password , setPassword] = useState({
        password: '',
        password_confirmation: ''
    })
    const [ invalidPassword, setInvalidPassword] = useState(false);
    const [ invalidPasswordLength, setInvalidPasswordLength] = useState(false)
    const [error, setError] = useState('');
    
    useEffect( () => {
        if(password.password && password.password_confirmation){
            if(password.password !== password.password_confirmation){
                setInvalidPassword(true)
            }
            else{
                setInvalidPassword(false)
            }
        }

        if(password.password && password.password.length < 6){
            setInvalidPasswordLength(true)
        }else{
            setInvalidPasswordLength(false)
        }

    }, [password])

    const readyToSend = () => {
        if(password.password){
            return invalidPassword ===false && invalidPasswordLength ===false
        }
    }

    const handleInputChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handlePasswordChange = (e) =>{
        setPassword({...password, [e.target.name] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(readyToSend() === false){ return }
        setError('');
        const parsedUserInfo = JSON.stringify({...userInfo, ...password})
        postSignup(URL_SIGNUP, parsedUserInfo)
            .then(( data ) => data.success && navigate('/login'))
            .catch((error) => setError(error.response.data.error))
    }

    return(
        <>
            <div className="wrapper box-config">
                <h2 className="subtitle" >Regístrate</h2>
                <form className='form_format' onSubmit={handleSubmit}>
                    <div className="input_box">
                        <input value={userInfo.email} name='email' onChange={handleInputChange} type="email" placeholder='Correo Electrónico' required/>
                    </div>
                    <div className="input_box">
                        <input value={userInfo.first_name} name='first_name' onChange={handleInputChange} type="text" placeholder='Nombres' required/>
                    </div>
                    <div className="input_box">
                        <input value={userInfo.last_name} name='last_name' onChange={handleInputChange} type="text" placeholder='Apellido' required/>
                    </div>
                    <div className="input_box">
                        <select name='has_bike' value={userInfo.has_bike} onChange={handleInputChange}  id='has_bike_field'>
                            <option value="" disabled >¿Tienes bici?</option>
                            <option value="True">Sí</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                    <div className="input_box">
                        <PasswordField value={userInfo.password} 
                                        name={"password"}
                                        onChange={handlePasswordChange} 
                                        placeholder={"Contraseña"}
                                        />
                    </div>
                    <div className="input_box">
                        <PasswordField  value={userInfo.password_confirmation} 
                                        name={'password_confirmation'}
                                        onChange={handlePasswordChange} 
                                        placeholder={'Confirmar contraseña'}
                                        />
                    </div>
                    {error ? <p className='error' >{error}</p>: null}
                    {invalidPassword ? <p className='error' >Las contraseñas no coinciden.</p> : null }
                    {invalidPasswordLength ? <p className='error' >La contraseña debe tener al menos 6 carácteres.</p> : null }
                    <button type="submit" className="btn-ing">Registrarme</button>

                </form>
            </div>
        </>
    )
}

export { SignUp }