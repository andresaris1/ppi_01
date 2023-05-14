import React from "react";

// Icons
import { IoNavigateCircle, IoBicycle, IoChatbubble } from "react-icons/io5";
import { FaParking } from "react-icons/fa";

const ServicesBar = () => {
  return (
    <div className="absolute bottom-0 flex flex-col py-8 md:min-w-[760px] mx-1 transform border border-slate-300 rounded-xl text-center shadow-xl gap-2 bg-white">
      <h3 className="text-xl font-bold text-[#1E293B]">
        ¿Qué esperas para rodar por el Valle?
      </h3>
      <div className="flex flex-wrap justify-center">
        <h4 className="flex px-5 py-1 w-full md:w-auto">
          <IoNavigateCircle size="1.5em" className="mr-2" />
          Navegación en el mapa
        </h4>
        <h4 className="flex px-5 py-1 w-full md:w-auto">
          <IoBicycle size="1.5em" className="mr-2" />
          Reporte estaciones EnCicla
        </h4>
        <h4 className="flex px-5 py-1 w-full md:w-auto">
          <FaParking size="1.5em" className="mr-2" />
          Biciparqueaderos
        </h4>
        <h4 className="flex px-5 py-1 w-full md:w-auto">
          <IoChatbubble size="1.5em" className="mr-2" />
          Reseñas de usuario
        </h4>
      </div>
    </div>
  );
};

export { ServicesBar };
