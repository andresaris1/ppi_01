import { useEffect, useRef } from "react";
// Import css
import "../../App.css";
// Import lobrary typed effect
import Typed from "typed.js";
// Import gif biker
import bike from "../../assets/bikerdribbble.gif";

function Home() {
  // Ref for element to apply the effect
  const el = useRef(null);

  useEffect(() => {
    // Typed effect
    const typed = new Typed(el.current, {
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

  // Render component (HTML)
  return (
    <>
      <div className="home">
        <div className="cols0">
          <span className="topline">Hola</span>
          <h1>Somos</h1>
          <h1>
            {/* Placeholder for typed strings*/}
            <span className="multiText" ref={el}></span>
          </h1>
          <p> Aún estamos en proceso de construcción.</p>
        </div>
      </div>
      <div className="cols1">
        <div className="bike">
          <img src={bike} alt="Joven pedaleando" />
        </div>
      </div>
    </>
  );
}

// Export component
export { Home };
