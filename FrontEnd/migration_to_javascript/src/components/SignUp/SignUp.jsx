import '../Login/login.css'
import { Navbar } from '../Navbar/Navbar'

function SignUp(){

    return(
        <>
            <Navbar/>
            <div className="form_box wrapper"> 
                <h2>Registrarse</h2>
                <form action="#">

                    <div className="input_box">
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="email" required/>
                        <label> Email</label>
                    </div>

                    <div className="input_box">
                        <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                        <input type="text" required/>
                        <label> Nombres y apellidos</label>
                    </div>

                    <div className="input_box">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password" required/>
                        <label> Contraseña</label>
                    </div>

                    <div className ="recordarCuenta">
                        <label><input type="checkbox"/> Recordarme</label>
                        <a href="#">Olvidaste la contraseña?</a>
                    </div>

                    <button type="submit" className="btn-ing">Registrarme</button>

                </form>
            </div> 
        </>
    )
}

export { SignUp }