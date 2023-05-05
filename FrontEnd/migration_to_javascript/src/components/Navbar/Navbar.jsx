import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DropDown } from './DropDown';
import { UserIconOptions } from './UserIconOptions';
import logo from '../../assets/logo.png';
import userLogo from '../../assets/user.png'
import '../../App.css';


function Navbar(){

    const { pathname } = useLocation()
    const { loggedIn } = useContext(AppContext)
    return(
            <header>
                <a> <img src= {logo} width="20%"/></a>
                <nav className="navBar">
                    <Link 
                        className={ pathname==='/home'  ?'paint':'' } 
                        to="/"> 
                        Inicio 
                    </Link>
                    {loggedIn ? 
                        <Link 
                            className={ pathname==='/map'?'paint':'' }  
                            to="/map"> 
                            Mapa 
                        </Link>: null
                    }
                    {!loggedIn ? 
                        <Link
                            className={ pathname==='/signup'?'paint':'' } 
                            to="/signup"> Registrarse 
                        </Link> : null
                    }
                    { ! loggedIn ? 
                        <Link
                            className={ pathname==='/login'?'paint':'' } 
                            to="/login" >Ingresar
                        </Link> : 
                        null
                    }
                    {
                        loggedIn ? 
                            <DropDown optionsConfig = { <UserIconOptions/> }>
                                <img 
                                    className='profile_image' 
                                    src={ userLogo }/>
                            </DropDown> : null 
                    }
                </nav>
            </header>

    )
}

export { Navbar }