import "../../App.css";
import Typed from "react-typed";
import bike from "../../assets/bikerdribbble.gif";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const typed = new Typed(".multiText", {
      strings: ["una empresa", "un equipo"],
    });
  }, []);
  return (
    <>
      <div className="home">
        <div className="cols0">
          <span className="topline">Hola</span>
          <h1>
            Somos <span className="multiText"></span>
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
