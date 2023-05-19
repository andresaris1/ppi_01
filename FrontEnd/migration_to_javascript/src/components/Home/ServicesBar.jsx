import React from "react";
// Icons
import { IoNavigateCircle, IoBicycle, IoChatbubble } from "react-icons/io5";
import { FaParking, FaRoute } from "react-icons/fa";

const ServicesBar = () => {
  return (
    <div className="flex flex-col lg:flex-none py-8 mx-1 transform border border-slate-300 rounded-xl text-center shadow-xl gap-2 bg-white">
      <h3 className="text-xl font-bold text-[#1E293B]">
        ¿Qué esperas para rodar por el Valle?
      </h3>
      <div className="flex flex-wrap justify-center">
        <h4 className="flex px-5 py-1">
          <IoNavigateCircle size="1.5em" className="mr-2" />
          Navegación en el mapa
        </h4>

        {/* Services bar item #2 */}
        <h4 className="flex px-5 py-1">
          <IoBicycle size="1.5em" className="mr-2" />
          Reporte estaciones EnCicla
        </h4>

        {/* Services bar item #3 */}
        <h4 className="flex px-5 py-1">
          <FaParking size="1.5em" className="mr-2" />
          Biciparqueaderos
        </h4>

        {/* Services bar item #4 */}
        <h4 className="flex px-5 py-1">
          <IoChatbubble size="1.5em" className="mr-2" />
          Reseñas de usuarios
        </h4>

        {/* Services bar item #4 */}
        <h4 className="flex px-5 py-1">
          <FaRoute size="1.5em" className="mr-2" />
          Rutas & Enrutamiento
        </h4>

      </div>
    </div>
  );
};

export { ServicesBar };
