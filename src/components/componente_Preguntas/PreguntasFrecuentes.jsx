import { useState } from "react";
import "/src/assets/styles/style_Preguntas/preguntasF.css";

export default function PreguntasFrecuentes({ pregunta, respuesta }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="preguntasDiv">
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span>{pregunta}</span>
        <span className={`arrow ${isActive ? "rotate" : ""}`}>🠋</span>
      </button>

      <div className={`panel ${isActive ? "show" : ""}`}>
        <p>{respuesta}</p>
      </div>
    </div>
  );
}

export function PreguntasTitle() {
    return (
    <div className="title">
        <h1>¿En que podemos ayudarte?</h1>
        <p>Ve algunas de las preguntas frecuentes sobre Burjassot</p>
    </div>
    )
}
