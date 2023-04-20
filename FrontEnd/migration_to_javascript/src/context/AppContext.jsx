import { useState, createContext } from "react";

const AppContext = createContext()
const AppProvider = AppContext.Provider;

function SessionContext({children}){

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({});

    return(
        <AppProvider value = {{loggedIn, setLoggedIn, user, setUser}} >
            {children}
        </AppProvider>
    )

}

export { SessionContext, AppContext }
