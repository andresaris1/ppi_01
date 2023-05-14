import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function UserIconOptions({ setOpen }) {
  // Get setLoggedIn from AppContext
  const { setLoggedIn } = useContext(AppContext);

  // Handle loggout
  const handleLoggout = () => {
    localStorage.removeItem("authTokens");
    setLoggedIn(false);
    setOpen(false);
  };

  // Return the user icon options
  return (
    <ul style={{ top: "41px" }}>
      <li>
        {" "}
        <Link to={"/profile"} onClick={() => setOpen(false)}>
          {" "}
          Ver perfil
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to={"/home"} onClick={handleLoggout}>
          Salir{" "}
        </Link>{" "}
      </li>
    </ul>
  );
}

export { UserIconOptions };
