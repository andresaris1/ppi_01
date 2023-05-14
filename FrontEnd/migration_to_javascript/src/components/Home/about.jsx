import React from "react";

const About = () => {
  return (
    // Componet for the about section
    <div className="w-full bg-white my-32">
      {/* Container of the content */}
      <div className="max-w-[1240px] mx-auto">
        {/* Title and description */}
        <div className="text-center md:min-w-[760px]">
          <h1 className="text-5xl font-bold text-bl">¿Qué es BiciMaps?</h1>
          <p className="text-3xl py-6 text-gray-500">
            Es una aplicación web que busca mejorar la experiencia de navegación
            de los ciclistas en el Valle de Aburrá.
          </p>
        </div>

        {/* Grid of the cards */}
        <div className="grid grid-cols-3 gap-3 px-2 text-center">
          {/* Card #1 */}
          <div className="border py-8 px-10 rounded-xl shadow-xl w-full md:w-90">
            <p className="text-2xl font-bold">Desarrollada por estudiantes</p>
            <p className="text-gray-500 mt-2">
              Esta aplicación fue desarrollada como un proyecto de una
              asignatura de la Universidad Nacional Sede Medellín.
            </p>
          </div>

          {/* Card #2 */}
          <div className="border py-8 px-10 rounded-xl shadow-xl w-full md:w-90">
            <p className="text-2xl font-bold">100% Colombiana</p>
            <p className="text-gray-500 mt-2">
              Desarrollada aquí mismo en el Valle de Aburrá.
            </p>
          </div>

          {/* Card #3 */}
          <div className="border py-8 px-10 rounded-xl shadow-xl w-full md:w-90">
            <p className="text-2xl font-bold">
              Pensada para el Valle de Aburrá
            </p>
            <p className="text-gray-500 mt-2">
              Conocemos el problema, porque lo vivimos día a día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
