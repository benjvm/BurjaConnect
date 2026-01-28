import { useState } from "react";
import "/src/assets/preguntasF.css";

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
        <h1>Preguntas Frecuentes</h1>
    </div>
    )
}
