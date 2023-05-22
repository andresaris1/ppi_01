import React from "react";
// Import icons
import { FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";

// Footer component
const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-500 min-h-100px p-4">
      {/* Icons */}
      <ul className="flex justify-center ">
        {/* Github icon */}
        <li className="px-8 hover:-translate-y-2">
          <a href="https://github.com/andresaris1/ppi_01" className="">
            <FaGithub className="text-white text-4xl" />
          </a>
        </li>

        {/* Mail icon */}
        <li className="hover:-translate-y-2">
          <a href="https://www.buymeacoffee.com/bicimaps">
            <CiCoffeeCup className="text-white text-4xl" />
          </a>
        </li>
      </ul>

      {/* Text and atributtions */}
      <p className="text-center text-white text-s mt-4">
        © 2023 BiciMaps. All rights reserved | Images by Freepik.
      </p>
    </footer>
  );
};

// Export component
export { Footer };
