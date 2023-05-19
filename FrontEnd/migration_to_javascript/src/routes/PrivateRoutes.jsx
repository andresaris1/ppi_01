import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

export function PrivateRoutes({ children }) {
  const { loggedIn } = useContext(AppContext);

  return <>{loggedIn ? children : <Navigate to="/home" />}</>;
}
