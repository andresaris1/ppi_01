// Import images
import Juan from "../../assets/author1.svg";
import Mariana from "../../assets/author2.svg";
import Felipe from "../../assets/author3.svg";
// Import icons
import { FaGithub, FaEnvelope } from "react-icons/fa";
// Import mailto
import ButtonMailto from "./Mailto";

// Redirect to github
// Redirect to github Juan David
const githubJuan = () => {
  window.location.href = "https://github.com/judhenaoma";
};

// Redirect to github Mariana
const githubMariana = () => {
  window.location.href = "https://github.com/Marihp";
};

// Redirect to github Felipe
const githubFelipe = () => {
  window.location.href = "https://github.com/fmunoze";
};

// Authors component
const Authors = () => {
  return (
    // Componet for the authors section
    <div className="w-full bg-gradient-to-b from-gray-500 my-30 rounded-xl">
      {/* Container of the content */}
      <div className="max-w-[1240px] mx-auto p-4">
        {/* Title and description */}
        <div className="text-center md:min-w-[760px]">
          <h1 className="text-5xl font-bold text-white ">
            ¿Quiénes están detrás?
          </h1>
          <p className="text-2xl py-6 text-white">
            Este es nuestro equipo desarrollador detrás de BiciMaps
          </p>
        </div>

        {/* Grid of the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2 text-center">
          {/* Author #1 - Juan David*/}
          <div className="bg-white rounded-md py-8 px-10">
            <img src={Juan} alt="author" className="w-50 mx-auto" />
            <h1 className="text-xl font-bold">Juan David Henao</h1>
            <h2 className="text-gray-500"> Estudiante UNAL Sede Medellín</h2>
            <p className="text-gray-500 mt-2"></p>
            {/* Buttons */}
            <div className="flex  justify-center items-center">
              <a className="mr-4" href="https://github.com/judhenaoma" target="_blank">
                <FaGithub size="2em" />
              </a>
              <ButtonMailto mailto="mailto:judhenaoma@unal.edu.co" />
            </div>
          </div>

          {/* Author #2 - Mariana */}
          <div className="bg-white rounded-md py-8 px-10">
            <img src={Mariana} alt="author" className="w-50 mx-auto" />
            <h1 className="text-xl font-bold">Mariana Hernández</h1>
            <h2 className="text-gray-500"> Estudiante UNAL Sede Medellín</h2>
            <p className="text-gray-500 mt-2"></p>
            {/* Buttons */}
            <div className="actions flex justify-center items-center">
              <a className="mr-4" href="https://github.com/Marihp" target="_blank">
                <FaGithub size="2em" />
              </a>
              <ButtonMailto mailto="mailto:marhernandezpa@unal.edu.co" />
            </div>
          </div>

          {/* Author #3 - Felipe*/}
          <div className="bg-white rounded-md py-8 px-10">
            <img src={Felipe} alt="author" className="w-50 mx-auto" />
            <h1 className="text-xl font-bold">Felipe Muñoz</h1>
            <h2 className="text-gray-500"> Estudiante UNAL Sede Medellín</h2>
            <p className="text-gray-500 mt-2"></p>
            {/* Buttons */}
            <div className="actions flex justify-center items-center">
              <a className="mr-4" href="https://github.com/fmunoze" target="_blank">
                <FaGithub size="2em" />
              </a>
              <ButtonMailto mailto="mailto:fmunoze@unal.edu.co" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Authors };