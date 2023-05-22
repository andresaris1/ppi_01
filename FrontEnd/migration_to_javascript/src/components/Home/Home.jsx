import { useEffect, useRef } from "react";
import React from "react";
// Import library typed effect
import Typed from "typed.js";
// Import component
import { ServicesBar } from "./ServicesBar";
import { About } from "./about";
import { Footer } from "./footer";
// Import icons
import { FaGithub } from "react-icons/fa";
// Import gif biker
import bike from "../../assets/Bici-landing.svg";

import { Authors } from "./Authors";

// Home component
const Home = () => {
  // Ref for element to apply the effect
  const typ = useRef(null);

  useEffect(() => {
    // Typed effect
    const typed = new Typed(typ.current, {
      // Words to be typed
      strings: ["Pasión", "Rapidez", "Soluciones", "familia", "BiciMaps"],
      // Speed settings
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying when unmount
    return () => {
      typed.destroy();
    };
  }, []);

  // Redirect to github
  const githubRedirect = () => {
    window.location.href = "https://github.com/andresaris1/ppi_01";
  };

  // Redirect to buy me a coffee
  const buyMeACoffee = () => {
    window.location.href = "https://www.buymeacoffee.com/bicimaps";
  };

  return (
    <>
      <div className="flex overflow-hidden flex-col flex-wrap lg:flex-none">
        <section className="w-screen grid grid-cols-1 md:grid-cols-8">
          {/* First col content */}
          <div className="md:col-span-5 flex flex-col justify-center gap-8 p-20">
            {/* Text title */}
            <div className="gap-4">
              <span className="text-6xl font-bold">Hola,</span>
              <h1 className="text-7xl font-bold text-[#1E293B]">
                Somos <span className="text-bl" ref={typ}></span>
              </h1>
            </div>

            {/* Description paragraph */}
            <p className="text-gray-600 text-2xl ">
              Somos una app para ciclistas que busca mejorar la experiencia de
              navegación de los ciclistas en el Valle de Aburrá, y sí tenemos
              integración con EnCicla, por si dejaste la bici en casa.
            </p>

            {/* Buttons */}
            <div className="flex item-center gap-8">
              {/* Button buy me a coffee */}
              <a
                href="https://www.buymeacoffee.com/bicimaps"
                target="_blank"
                className="bg-transparent hover:bg-bl text-gray-700 font-semibold
                hover:text-main-green py-2 px-4 border border-bluel-500 
                hover:border-transparent rounded"
              >
                Apóyanos con un café
              </a>

              {/* Button github */}
              <a
                href="https://github.com/andresaris1/ppi_01"
                target="_blank"
                className="bg-transparent text-gray-700 font-semibold hover:text-main-green flex items-center gap-2 text-left leading-4 border border-bluel-500 hover:border-transparent rounded"
              >
                <FaGithub size="2em" />
                Ver el código
              </a>
            </div>
          </div>

          {/* Second column content */}
          <div className="md:col-span-3">
            <img src={bike} />
          </div>
        </section>
        <ServicesBar />
        <About />
        <Authors />
        <Footer />
      </div>
    </>
  );
};

// Export component
export { Home };
