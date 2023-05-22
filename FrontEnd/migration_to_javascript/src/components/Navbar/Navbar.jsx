import { useContext, Fragment } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AppContext } from "../../context/AppContext";
import logo from "../../assets/logo.png";
import userLogo from "../../assets/user.png";
import { FaBars } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const { loggedIn, setLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("authTokens");
    navigate("/home");
    setLoggedIn(false);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto min-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Bicimaps"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Bicimaps"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    to="/home"
                    className={(args) =>
                      `inline-flex items-center border-b-2 ${
                        args.isActive
                          ? "border-main-green text-gray-900"
                          : "border-transparent text-gray-500"
                      } px-1 pt-1 text-sm font-medium`
                    }
                  >
                    Inicio
                  </NavLink>
                  {loggedIn ? (
                    <NavLink
                      to="/map"
                      className={(args) =>
                        `inline-flex items-center border-b-2 ${
                          args.isActive
                            ? "border-main-green text-gray-900"
                            : "border-transparent text-gray-500"
                        } px-1 pt-1 text-sm font-medium`
                      }
                    >
                      Mapa
                    </NavLink>
                  ) : (
                    <>
                      <NavLink
                        to="/signup"
                        className={(args) =>
                          `inline-flex items-center border-b-2 ${
                            args.isActive
                              ? "border-main-green text-gray-900"
                              : "border-transparent text-gray-500"
                          } px-1 pt-1 text-sm font-medium`
                        }
                      >
                        Registrarse
                      </NavLink>

                      <NavLink
                        to="/login"
                        className={(args) =>
                          `inline-flex items-center border-b-2 ${
                            args.isActive
                              ? "border-main-green text-gray-900"
                              : "border-transparent text-gray-500"
                          } px-1 pt-1 text-sm font-medium`
                        }
                      >
                        Entrar
                      </NavLink>
                    </>
                  )}
                </div>
              </div>

              {loggedIn && (
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="hidden rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-main-green focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BsBellFill className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-main-green focus:ring-offset-2">
                        <span className="sr-only">Menú del usuario</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={userLogo}
                          alt="Logo del usuario"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-[9999] right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <NavLink
                            to="/profile"
                            className={(args) =>
                              `block px-4 py-2 text-sm text-gray-700 ${
                                args.isActive ? "bg-gray-500" : ""
                              }}`
                            }
                          >
                            Perfil
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/home"
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={logOut}
                          >
                            Salir
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main-green">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <GrClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-main-green text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/home"
                className="block border-l-4 border-main-green bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Inicio
              </Disclosure.Button>

              {loggedIn ? (
                <Disclosure.Button
                  as="a"
                  href="/map"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Mapa
                </Disclosure.Button>
              ) : (
                <>
                  <Disclosure.Button
                    as="a"
                    href="/signup"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Registrarse
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/login"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Entrar
                  </Disclosure.Button>
                </>
              )}
            </div>

            {loggedIn && (
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={userLogo}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Nombre usuario
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      Correo
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hidden ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-main-green focus:ring-offset-2"
                  >
                    <span className="sr-only">Notificaciones</span>
                    <BsBellFill className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="/profile"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Perfil
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/home"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    onClick={logOut}
                  >
                    Salir
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export { Navbar };
