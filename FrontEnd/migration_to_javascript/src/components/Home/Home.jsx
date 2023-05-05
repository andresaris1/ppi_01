import "../../App.css";
import Typed from "typed.js";
import bike from "../../assets/bikerdribbble.gif";
import { useEffect, useRef } from "react";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Pasión", "Rapidez", "Soluciones", "familia", "BiciMaps"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
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
    <>
      <div className="home">
        <div className="cols0">
          <span className="topline">Hola</span>
          <h1>Somos</h1>
          <h1>
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

export { Home };
