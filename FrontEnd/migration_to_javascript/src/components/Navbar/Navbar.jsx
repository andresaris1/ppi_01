

function Navbar(){

    return(
        <section>
                <header>
                    <a href="#" className="logo"> <img src="logo.png" width="20%"/></a>
                    <nav className="navBar">
                        <a href="index.html"> Inicio </a>
                        <a href="#"> Mapa </a>
                        <a href="https://github.com/andresaris1/ppi_01"> Repositorio </a>
                        <button className="loginBtn">Ingresar 🚲 </button>
                    </nav>
                </header>
        </section>
    )
}

export { Navbar }