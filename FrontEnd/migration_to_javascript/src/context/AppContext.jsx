import { useState, createContext, useEffect } from "react";

const AppContext = createContext()
const AppProvider = AppContext.Provider;

function SessionContext({children}){

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [authTokens, setAuthTokens] = useState({})

    useEffect( () =>{
        const authTokensStoraged = localStorage.getItem("authTokens")
        if(authTokensStoraged) { 
            setLoggedIn(true)
            setAuthTokens(JSON.parse(authTokensStoraged))
        }
    }, [] )


    return(
        <AppProvider value = {{
                               loggedIn, 
                               setLoggedIn, 
                               user, 
                               setUser,
                               authTokens,
                               setAuthTokens
                               }} >
            {children}
        </AppProvider>
    )

}

export { SessionContext, AppContext }
