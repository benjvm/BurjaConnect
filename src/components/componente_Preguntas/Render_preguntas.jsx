import PreguntasFrecuentes, {PreguntasTitle} from './PreguntasFrecuentes.jsx'
import Header from '../component_Header/Header.jsx'
import Footer from '../component_Footer/Footer.jsx';

export default function RenderPreguntas() {

  return (
    <div className="RenderPreguntas">
        <Header/>
        <div className='preguntasBody'>
            <PreguntasTitle></PreguntasTitle>
            <PreguntasFrecuentes
                pregunta = "Como llegar a Burjassot? 🚈"
                respuesta = {"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\nA small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."}
            />
            <PreguntasFrecuentes
                pregunta = "Pregunta 2"
                respuesta = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            />
            <PreguntasFrecuentes
                pregunta = "Pregunta 3"
                respuesta = {"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean\n\n- Primer Paso: bla bla bla bla bla bla bla bla bla\n- Segundo Paso: bla bla bla bla bla bla bla bla bla\n- Tercer Paso: bla bla bla bla bla bla bla bla bla\n\nA small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."}
            />
            <PreguntasFrecuentes
                pregunta = "Pregunta 4"
                respuesta = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            />
        </div>
        <Footer></Footer>
    </div>
  );
}