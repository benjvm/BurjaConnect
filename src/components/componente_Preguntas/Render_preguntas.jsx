import PreguntasFrecuentes, {PreguntasTitle} from './PreguntasFrecuentes.jsx'
import Header from '../component_Header/Header.jsx';
import Footer from '../component_Footer/Footer.jsx';
import AskQuestion, {InsertTitle} from './InsertPreguntas.jsx';

export default function RenderPreguntas() {

  return (
    <div className="RenderPreguntas">
        <Header/>
        <div className='preguntasBody'>
            <PreguntasTitle></PreguntasTitle>
            <PreguntasFrecuentes
                pregunta = "¿Como llegar a Burjassot? 🚈"
                respuesta = {"Para llegar a Burjassot se pueden tomar varias rutas, hay distintas estaciones de metro, distintas paradas de autobús e incluso un tranvía.\n\n- Para llegar en metro: \nSe puede llegar a Burjassot desde valencia en metro usando la linea 1\n\n- Para llegar en tranvía: \nlo mejor es tomarlo desde la estación empalme y luego subirse al tranvía linea 4 \n\n- Para llegar en bus \nEn bus hay varias opciones, pero el más común es el bus 63 que se puede tomar desde Valencia."}
            />
            <PreguntasFrecuentes
                pregunta = "¿Donde puedo encontrar un ATM?"
                respuesta = {"En Burjassot hay varios lugares en los que se pueden encontrar ATM, a continuación se deja un listado con algunos de los ATM en Burjassot.\n\nCaixa Popular: \nUbicado en Carretera de Llíria, 130, 46100 Burjassot\n\nCaixaBank: \nUbicado en Carrer del Dos de Maig, 12, 46100 Burjassot\n\nBBVA: \nUbicado en C. de Jorge Juan, 110, 46100 Burjassot\n\nCajamar Caja Rural: \nUbicado en Carrer de José Carsí, 41, 46100 Burjassot"}
            />
            <PreguntasFrecuentes
                pregunta = "¿Como puedo enterarme de nuevos eventos?"
                respuesta = {"Puedes enterarte de los nuevos eventos y actividades viendo el calendario interactivo ubicado en el Inicio, ahí podrás encontrar los eventos y las fechas en las que se desarrolla, puedes clickear en el evento para mostrar un poco más de información. \nTambién puedes echar un vistazo a las entradas (Justo por debajo de el calendario en Inicio)."}
            />
            <PreguntasFrecuentes
                pregunta = "¿Donde queda el ayuntamiento de Burjassot?"
                respuesta = "En el pie de la página se puede encontrar un mapa interactivo de Google Maps, ahí se puede apreciar donde queda exactamente el ayuntamiento de Burjassot."
            />
            <PreguntasFrecuentes
                pregunta = "¿Como puedo contactar con vosotros?"
                respuesta = "En el pie de la página o en el botón superior llamado 'Contacto' puedes encontrar tanto nuestras redes sociales como también el correo y número telefónico. Puedes ponerte en contacto con nosotros dentro del horario indicado."
            />
        </div>
        <div className='insert-question-body'>
            <InsertTitle></InsertTitle>
            <AskQuestion
                imagen = "/img/emoji_pensativo-removebg.png"
            />
        </div>
        <Footer></Footer>
    </div>
  );
}