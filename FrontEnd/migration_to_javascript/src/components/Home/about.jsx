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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2 text-center">
          {/* Card #1 */}
          <div className="flex items-center border py-8 px-10 rounded-xl shadow-xl w-full">
            <div className="h-full">
              <p className="text-2xl font-bold">Desarrollada por estudiantes</p>
              <p className="text-gray-500 mt-2">
                Esta aplicación fue desarrollada como un proyecto de la
                asignatura Programación para Ingeniería de la Universidad Nacional, Sede Medellín.
              </p>
            </div>
          </div>

          {/* Card #2 */}
          <div className="flex items-center border py-8 px-10 rounded-xl shadow-xl w-full">
            <div className="h-3/4">
              <p className="text-2xl font-bold">100% Colombiana</p>
              <p className="text-gray-500 mt-2">
                Desarrollada pensando en el Valle de Aburrá.
              </p>
            </div>
            
          </div>

          {/* Card #3 */}
          <div className="flex items-center border py-8 px-10 rounded-xl shadow-xl w-full">
            <div className="h-3/4">
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
    </div>
  );
};

export { About };
