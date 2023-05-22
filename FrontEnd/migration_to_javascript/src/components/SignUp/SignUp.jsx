import "../../App.css";
import { useState, useEffect, useContext } from "react";
import { postSignup } from "../utils/signup";
import { useNavigate } from "react-router-dom";
import { PasswordField } from "../utils/PasswordField";
import { Modal } from "../Modal/Modal";
import { TermsModal } from "./TermsModal";

const URL_SIGNUP = "https://bicimaps.herokuapp.com/api/sign-up/";

function SignUp() {
  const navigate = useNavigate();
  const [notice, setNotice] = useState({ show: false, content: "", type: "" });
  const [userInfo, setUserInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    has_bike: "True",
  });

  const [password, setPassword] = useState({
    password: "",
    password_confirmation: "",
  });

  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidPasswordLength, setInvalidPasswordLength] = useState(false);
  const [showTermsModal, setShowTermsModal ] = useState(false)

  useEffect(() => {
    if (password.password && password.password_confirmation) {
      if (password.password !== password.password_confirmation) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);
      }
    }

    if (password.password && password.password.length < 6) {
      setInvalidPasswordLength(true);
    } else {
      setInvalidPasswordLength(false);
    }
  }, [password]);

  const allFieldsFilled = () => {
    if (userInfo.email && userInfo.first_name && userInfo.last_name) {
      return true;
    }
    return false;
  };
  // Helper
  const readyToSend = () => {
    if (password.password) {
      return (
        invalidPassword === false &&
        invalidPasswordLength === false &&
        allFieldsFilled()
      );
    }
  };

  // Handlers
  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const showModal = () => {

    setShowTermsModal(true)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!readyToSend()) {
      return;
    }
    const parsedUserInfo = JSON.stringify({ ...userInfo, ...password });
    postSignup(URL_SIGNUP, parsedUserInfo)
      .then((data) => {
        data.success && navigate("/login");
        setNotice((prev) => {
          return {
            ...prev,
            show: true,
            content: "Usuario registrado correctamente",
            type: "success",
          };
        });
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setNotice((prev) => {
          return {
            ...prev,
            content: error.response.data.error,
            type: "error",
            show: true,
            showTime: 5,
          };
        });
      });
  };

  return (
    <>
      {
        showTermsModal && (
          <Modal>
            <TermsModal closeModal={setShowTermsModal} />
          </Modal>
        )
      }
      <div className="flex min-h-full mx-auto mb-10 mt-4 lg:mt-10 flex-1 shadow-lg border border-zinc-300 rounded shadow-gray-500/40 relative">
        <div className="flex flex-1 flex-col items-center px-4 py-1 md:py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto lg:w-96">
            <h2 className="absolute -top-5 hidden md:block left-7 text-md md:text-2xl shadow-md shadow-gray-500/20 font-bold tracking-wide px-2 py-1 rounded border border-zinc-400 bg-main-green text-white">
              Regístrate
            </h2>
            <div className="mt-10">
              <div className="relative">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Correo electrónico
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        type="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                        placeholder="Tú correo electrónico ;)"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-green sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className="mt-2">
                      <input
                        name="first_name"
                        type="text"
                        value={userInfo.first_name}
                        onChange={handleInputChange}
                        placeholder="Tú nombre..."
                        required
                        autoComplete="first_name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-green sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Apellidos
                    </label>
                    <div className="mt-2">
                      <input
                        name="last_name"
                        type="text"
                        value={userInfo.last_name}
                        onChange={handleInputChange}
                        placeholder="Apellidos"
                        required
                        autoComplete="last_name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-green sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="bici"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tienes bici?
                    </label>
                    <select
                      name="has_bike"
                      id="bici"
                      value={userInfo.has_bike}
                      onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-main-green sm:text-sm sm:leading-6"
                    >
                      <option value="True">Sí</option>
                      <option value="False">No</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contraseña
                    </label>
                    <PasswordField
                      name="password"
                      value={password.password}
                      onChange={handlePasswordChange}
                      placeholder={"Contraseña"}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirmar contraseña
                    </label>
                    <PasswordField
                      name="password_confirmation"
                      value={password.password_confirmation}
                      onChange={handlePasswordChange}
                      placeholder={"Confirma la contraseña"}
                    />
                  </div>

                  <div>
                    <p className="text-xs mb-2">Al registrarte entendemos que estás de acuerdo con las 
                        <a onClick={showModal} className="text-blue-400 cursor-pointer"> políticas de tratamiento de datos
                        </a>
                      .
                    </p>

                    <button
                      type="submit"
                      className={`flex w-full justify-center rounded-md ${
                        readyToSend() ? "bg-main-green" : "bg-zinc-300"
                      } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                      disabled={!readyToSend()}
                    >
                      Registrarme
                    </button>
                  </div>
                </form>
                <div>
                  {invalidPassword ? (
                    <p className="text-red-500">
                      Las contraseñas no coinciden.
                    </p>
                  ) : null}

                  {invalidPasswordLength ? (
                    <p className="text-red-500">
                      La contraseña debe tener al menos 6 carácteres.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { SignUp };
