import { useState, createContext, useEffect } from "react";

const AppContext = createContext();
const AppProvider = AppContext.Provider;

function SessionContext({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [authTokens, setAuthTokens] = useState({});
  const [notice, setNotice] = useState({ show: false, type: "", content: "" });

  useEffect(() => {
    const authTokensStoraged = localStorage.getItem("authTokens");
    if (authTokensStoraged) {
      setLoggedIn(true);
      setAuthTokens(JSON.parse(authTokensStoraged));
    }
  }, [loggedIn]);

  return (
    <AppProvider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        authTokens,
        setAuthTokens,
        notice,
        setNotice,
      }}
    >
      {children}
    </AppProvider>
  );
}

export { SessionContext, AppContext };
