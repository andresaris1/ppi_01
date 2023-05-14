import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import { postLogin } from "../utils/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { PasswordField } from "../utils/PasswordField";
import { Notice } from "../Notice/Notice";

const URL_LOGIN = "https://bicimaps.herokuapp.com/api/login/";

function Login() {
  //Consuming context
  const { setLoggedIn, loggedIn, notice, setNotice } = useContext(AppContext);
  console.log(loggedIn);
  const [error, setError] = useState("");
  // React router helper
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //Handlers
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedCredentials = JSON.stringify(credentials);

    postLogin(URL_LOGIN, parsedCredentials)
      .then((data) => {
        if (data.access) {
          setLoggedIn(true);
          localStorage.setItem("authTokens", JSON.stringify(data));
          navigate("/map");
        }
      })
      .catch((error) => {
        setNotice((prev) => {
          return {
            ...prev,
            show: true,
            content: "No hay una cuenta activa con estas credenciales.",
            type: "error",
            showTime: 5,
          };
        });
      });
  };

  return (
    <>
      {notice.show && (
        <Notice
          content={notice.content}
          type={notice.type}
          showHandler={setNotice}
          showTime={notice.showTime}
        />
      )}
      <div className="wrapper">
        {/* Login form*/}
        <div className="form_box login">
          <h2 className="subtitle">Bienvenid@</h2>
          <form onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="input_box">
              <input
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
              />
            </div>

            {/* Password field */}
            <div className="input_box">
              <PasswordField
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder={"Contraseña"}
              />
            </div>

            {/* Remember me and forgot password */}
            <div className="recordarCuenta">
              <label>
                <input type="checkbox" disabled /> Recordarme
              </label>
              <a href="#">Olvidaste la contraseña?</a>
            </div>
            {error ? <p className="error">{error}</p> : null}
            <button type="submit" className="btn-ing">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export { Login };
