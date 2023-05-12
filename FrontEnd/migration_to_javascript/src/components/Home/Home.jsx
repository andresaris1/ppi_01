import { useEffect, useRef } from "react";
import React from "react";
// Import library typed effect
import Typed from "typed.js";
// Import gif biker
import bike from "../../assets/bikerdribbble.gif";

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

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    // Crear sección con grid de 8 columnas a lo ancho de la pantalla
    <section className="h-[90vh] w-screen grid grid-cols-1 md:grid-cols-8">
      <div className="md:col-span-5 flex flex-col items-left justify-center gap-8 p-20">
        {/* Titulo del home */}
        <div className="gap-4">
          <span className="text-6xl font-bold">Hola,</span>
          <h1 className="text-7xl font-bold text-[#1E293B]">
            Somos <span className="text-[#38BDF8]" ref={typ}></span>
          </h1>
        </div>
        <p className="text-gray-600 text-2xl ">
          Somos una comunidad de ciclistas que busca mejorar la experiencia de
          navegación de los ciclistas en el Valle de Aburrá, y sí tenemos
          integración con EnCicla, por si dejaste la bici en casa.
        </p>
        <div>
          <button className="bg-[#38BDF8] text-white font-bold text-xl px-4 py-2 rounded-md">
            Apoyarnos con un café
          </button>
        </div>
      </div>
      <div className="bg-red-500 md:col-span-3">Image</div>
    </section>
  );
};

// Export component
export { Home };
