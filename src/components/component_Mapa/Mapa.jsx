import "../../assets/styles/style_Mapa/Mapa.css";
import "../../assets/styles/style_General/General.css";
import Header from "../component_Header/Header";
import Footer from "../component_Footer/Footer";
import { useState } from "react";

export default function Mapa() {
  const [elegido, setElegido] = useState(true);
  const [sprite, setSprite] = useState("none");
  const [posicion, setPosicion] = useState({ top: "30%", left: "40%" });
  const [llegada, setLlegada] = useState(false);
  const [image, setImagen] = useState('none');
  const [text, setTexto] = useState('hola');
  const [difuminado, setDifuminado] = useState('none');
  const hacerClic = (evento) => {
    {
      if (evento.target.id.includes("ubicacion")) {
        setPosicion({
          top: evento.target.style.top,
          left: evento.target.style.left,
        });
        setImagen(evento.target.style.backgroundImage);
        if(evento.target.id == 'ubicacion1')
        {
          setTexto('El Museu de Historia Natural de la Universitat de València, oficialmente llamado Museo de la Universidad de Valencia de Historia Natural, es una institución que tiene su origen más remoto en el antiguo Gabinete o Museo de Historia Natural de la Universidad de Valencia existente desde la segunda mitad del siglo XIX');
        }
        else if (evento.target.id == 'ubicacion2')
        {
          setTexto('La Iglesia de San Miguel Arcángel fue edificada en 1767 y destaca en su interior una serie de grandes esculturas realizadas en estuco blanco, de tres metros de altura y que representan a los doce apóstoles, a Pablo y a Bernabé y dos arcángeles Rafael y Gabriel.');
        }
        setLlegada(true);
        setDifuminado('flex');
      }

      if (evento.target.id.includes("btn_chic")) {
        let jugador = evento.target.id.includes("_chico")
          ? "url(/img/10865101.png)"
          : "url(/img/highschool-girl-character-rendering.png)";
        setSprite(jugador);
        setElegido(false);
      }
    }
  };

  return (
    <div id="mapa_container">
      <Header />
      <div id="padre_mapa">
        <div className="componente-mapa" id="mapa_juego" onClick={hacerClic}>
          <div id="overlay" style={{display: difuminado}}></div>
          {elegido ? <Jugador /> : <></>}
          {llegada ? <Historia imagen={ image } texto= { text } cerrar = {()=> {setLlegada(false), setDifuminado('none')}}/> : <></>}
          <div id="player" style={{ backgroundImage: sprite, top: posicion.top, left: posicion.left }}
          ></div>
          <div id="ubicacion1" style={{ top: "60%", left: "65%", backgroundImage: 'url(/img/Museo_Burja.jpg)' }}></div>
          <div id="ubicacion2" style={{ top: "25%", left: "25%", backgroundImage: 'url(/img/Iglesia-Burja.jpg)' }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Jugador() {
  return (
    <div id="personaje">
      <h2 id="title_pnj">Elige Jugador</h2>
      <div id="selector">
        <div id="chico">
          <div
            style={{ backgroundImage: "url(/img/10865101.png)" }}
          ></div>
          <button className="btn_player" id="btn_chico">Chico</button>
        </div>
        <div id="chica">
          <div
            style={{
              backgroundImage:
                "url(/img/highschool-girl-character-rendering.png)",
            }}
          ></div>
          <button className="btn_player" id="btn_chica">Chica</button>
        </div>
      </div>
    </div>
  );
}

function Historia({imagen, texto, cerrar}) {
  return (
    <div id="modal_juego">
      <div id="img_historia" style={{backgroundImage: imagen }}></div>
        <p id="txt_juego">
          { texto }
        </p>

      <svg onClick={cerrar} id="close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Edit / Close_Circle">
            {" "}
            <path
              id="Vector"
              d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
}
