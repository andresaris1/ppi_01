import { Navbar } from "../Navbar/Navbar"

function GenericPage({ children }){

    return(
        <>
         <Navbar/>
         {children}
        </>
    )
}

export { GenericPage }