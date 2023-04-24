import React, { useState, useContext } from 'react';
import '../../App.css'
import { postLogin } from '../utils/login';
import { useNavigate} from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { PasswordField } from '../utils/PasswordField';

const URL_LOGIN = 'https://bicimaps.herokuapp.com/api/login/';

function Login(){

    //Consuming context
    const { setLoggedIn, loggedIn } = useContext(AppContext)
    console.log(loggedIn)
    const [error, setError] = useState('');
     // React router helper
     const navigate = useNavigate();

     const [credentials , setCredentials] = useState({
         email: '',
         password: ''
     });

    //Handlers
    const handleChange = (e) => {
        setCredentials({...credentials, 
            [e.target.name]: e.target.value})
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedCredentials = JSON.stringify(credentials);

        postLogin(URL_LOGIN, parsedCredentials)
            .then(( data ) => {
                if(data.access){
                    setLoggedIn(true);
                    localStorage.setItem('authTokens', JSON.stringify(data))
                    navigate('/map')
                }
            })
            .catch((error) => {
                console.log(error)
                setError("Credenciales inválidas")
            })            
    }

    return(
        <>
            <div className="wrapper">
                <div className="form_box login"> 
                <h2 className='subtitle'>Bienvenid@</h2>
                    <form  onSubmit={handleSubmit}>
                        <div className="input_box">
                            <input name="email" 
                                type="email" 
                                value={credentials.email}
                                onChange = {handleChange} 
                                placeholder='Correo electrónico'
                                required/>
                        </div>
                        <div className="input_box">
                            <PasswordField  name="password" 
                                value={credentials.password}
                                onChange = {handleChange}
                                placeholder={'Contraseña'} 
                            />    
                            
                        </div>
                        <div className="recordarCuenta">
                            <label><input type="checkbox" disabled/> Recordarme</label>
                            <a href="#">Olvidaste la contraseña?</a>
                        </div>
                        {error ? <p className="error">{error}</p> : null}
                        <button type="submit" className="btn-ing">Ingresar</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export { Login }; 