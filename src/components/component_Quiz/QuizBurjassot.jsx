import { useState } from 'react';
import '../../assets/styles/style_Quiz/QuizBurjassot.css';
import CuentaAtras from './CuentaAtras';
import Header from '../component_Header/Header';
import Footer from '../component_Footer/Footer';

var preguntas = [
  {
    pregunta: "¿Cuál es el monumento más famoso de Burjassot? (antiguos depósitos de trigo)",
    opciones: ["El Micalet", "Los Silos", "Torres de Serranos", "El Castillo"],
    correcta: 1
  },
  {
    pregunta: "¿Qué famoso poeta valenciano nació en Burjassot?",
    opciones: ["Vicent Andrés Estellés", "Blasco Ibáñez", "Ausiàs March", "Sorolla"],
    correcta: 0
  },
  {
    pregunta: "¿Quién es el patrón de las fiestas de agosto?",
    opciones: ["San Vicente", "San José", "San Roque", "San Miguel"],
    correcta: 2
  },
  {
    pregunta: "¿Qué universidad tiene su Campus de Ciencias aquí?",
    opciones: ["Politécnica (UPV)", "Católica", "CEU", "Universidad de Valencia (UV)"],
    correcta: 3
  },
  {
    pregunta: "¿Cómo se llama el parque famoso por su tren tripulado?",
    opciones: ["Viveros", "La Granja", "Parque de Cabecera", "El Retiro"],
    correcta: 1
  },
  {
    pregunta: "¿A qué comarca pertenece el municipio?",
    opciones: ["L'Horta Nord", "Camp de Túria", "L'Horta Sud", "Ribera Alta"],
    correcta: 0
  },
  {
    pregunta: "¿Qué acto tradicional se celebra donde 'ruedan' al santo?",
    opciones: ["La Tomatina", "La Cremà", "La Rodà", "La Muixeranga"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es actualmente el edificio conocido como 'El Castell'?",
    opciones: ["El Ayuntamiento", "Un Colegio Mayor", "Una Biblioteca", "Un Museo"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el gentilicio de los habitantes?",
    opciones: ["Burjassoteros", "Burjassotanos", "Burjassotenses", "Burjassotís"],
    correcta: 2
  },
  {
    pregunta: "¿Qué elemento de piedra cubre las entradas de Los Silos?",
    opciones: ["Tejas", "Chimeneas", "Fuentes", "Pilones (tapas)"],
    correcta: 3
  }
];

export default function QuizBurjassot() 
{
  var [preguntaActual, setPreguntaActual] = useState(0);
  var [puntos, setPuntos] = useState(0);
  var [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  var [juegoTerminado, setJuegoTerminado] = useState(false);
  var [empezar, setEmpezar] = useState(false);

  var manejarTiempoTerminado = () => 
  {
    setJuegoTerminado(true);
  };

  var volverAlInicio = () => {
    setPreguntaActual(0);
    setPuntos(0);
    setRespuestaSeleccionada(null);
    setJuegoTerminado(false);
    setEmpezar(false); 
  };

  var comprobarRespuesta = (indice) => 
  {
    if (respuestaSeleccionada !== null) return;
    
    setRespuestaSeleccionada(indice);
    
    if (indice === preguntas[preguntaActual].correcta) 
    {
      setPuntos(puntos + 1);
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
    if (indice === preguntas[preguntaActual].correcta) return 'answer correcta';
    if (indice === respuestaSeleccionada) return 'answer incorrecta';
    return 'answer';
  };

  return (
    <div>
      <h1 id='title_quiz'>Trivial Burjassot</h1>
      <div className="container">
        <Header />
        {!empezar ? (
          <div className='mainDiv_0'>
            <h1>Bienvenidos al Quiz</h1>
            <button className='bt_mainDiv_0' onClick={() => setEmpezar(true)}>
                Iniciar
            </button>
          </div>
        ) : (
          <>
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
                      Juego terminado. Puntuación: {puntos}/{preguntas.length}
                    </h2>
                    <button 
                        className='bt_mainDiv_0' 
                        onClick={volverAlInicio}
                        style={{marginTop: '20px', fontSize: '20px'}}
                    >
                        Volver al Inicio
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}