import React from 'react';
import './login.css';
import { Navbar } from '../Navbar/Navbar';

function Login(){
    return(
        <>
        <Navbar/>
        <div className="wrapper">
            <div className="form_box login"> 
            <h2>Bienvenid@</h2>
                <form>
                    <div className="input_box">
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="email" required/>
                        <label> Email</label>
                    </div>

                    <div className="input_box">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password" required/>
                        <label> Contraseña</label>
                    </div>

                    <div className="recordarCuenta">
                        <label><input type="checkbox"/> Recordarme</label>
                        <a href="#">Olvidaste la contraseña?</a>
                    </div>

                    <button type="submit" className="btn-ing">Ingresar</button>

                </form>
            </div>
        </div>
        </>
    )
}

export { Login }; 