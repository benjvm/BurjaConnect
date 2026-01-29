import { useState } from 'react';
import '../../assets/styles/style_Quiz/QuizBurjassot.css';
import CuentaAtras from './CuentaAtras';
import Header from '../component_Header/Header';
import { Footer } from '../component_Footer/Footer';

var preguntas = [
  {
    pregunta: "¿Cuál es la capital de España?",
    opciones: ["Valencia", "Santander", "Barcelona", "Madrid"],
    correcta: 3
  },
  {
    pregunta: "¿Mejor serie de todos los tiempos?",
    opciones: ["The Simpsons", "Breaking Bad", "Stranger Things", "The Boys"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál de las siguientes marcas es de Japón?",
    opciones: ["BYD", "Hyundai", "Subaru", "Chery"],
    correcta: 2
  }
];

export default function QuizBurjassot() 
{
  var [preguntaActual, setPreguntaActual] = useState(0);
  var [puntaje, setPuntaje] = useState(0);
  var [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  var [juegoTerminado, setJuegoTerminado] = useState(false);

  var manejarTiempoTerminado = () => 
  {
    setJuegoTerminado(true);
  };

  var comprobarRespuesta = (indice) => 
  {
    if (respuestaSeleccionada !== null) return;
    
    setRespuestaSeleccionada(indice);
    
    if (indice === preguntas[preguntaActual].correcta) 
    {
      setPuntaje(puntaje + 1);
    }
  };

  var siguientePregunta = () => 
  {
    var siguiente = preguntaActual + 1;
    
    if (siguiente < preguntas.length) 
    {
      setPreguntaActual(siguiente);
      setRespuestaSeleccionada(null);
    } 
    else
    {
      setJuegoTerminado(true);
    }
  };

  var obtenerClaseBoton = (indice) => 
  {
    if (respuestaSeleccionada === null) return 'answer';
    
    if (indice === preguntas[preguntaActual].correcta) 
    {
      return 'answer correcta';
    }
    
    if (indice === respuestaSeleccionada) 
    {
      return 'answer incorrecta';
    }
    
    return 'answer';
  };

  return (
    <div className="container">
      <Header />
      <div className="container_Qz">
        <CuentaAtras 
          onTiempoTerminado={manejarTiempoTerminado}
          detener={juegoTerminado}
        /> 
      </div>
      <div className="mainDiv">
        <h1>Quiz Burjassot</h1>
        
        <div className="questionsDiv">
          {!juegoTerminado ? (
            <>
              <h2 className="question">
                {preguntas[preguntaActual].pregunta}
              </h2>
              
              <div className="answerDiv">
                {preguntas[preguntaActual].opciones.map((opcion, indice) => (
                  <button
                    key={indice}
                    onClick={() => comprobarRespuesta(indice)}
                    disabled={respuestaSeleccionada !== null}
                    className={obtenerClaseBoton(indice)}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
              
              <button onClick={siguientePregunta} className="nextButton">
                Siguiente
              </button>
            </>
          ) : (
            <div className="result">
              <h2>
                Juego terminado. Puntuación: {puntaje}/{preguntas.length}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}