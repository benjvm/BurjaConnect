import { useState } from 'react';
import '../../assets/styles/style_Entradas/Entrada.css';
import Entrada from '../conmponent_Entradas/Entrada.jsx';

export default function Grid_Entrada() {

    var [busqueda, setBusqueda] = useState("");

    var elementos = [
        { imagen: "/img/museo_natural.jpg", titulo: "Museu de la Universitat de València d'Història Natural" , contexto: "Conoce más sobre historia en burjassot en el museo de...", bt: "Ver más"},
        { imagen: "/img/Iglesia-Burja.jpg", titulo: "Iglesia Arciprestal San Miguel Arcángel", contexto: "Conoce más sobre historia en burjassot en el museo de...", bt: "Ver más" },
        { imagen: "/img/Museo_Burja.jpg", titulo: "Museu de la Universitat de València d'Història Natural",contexto: "Conoce más sobre historia en burjassot en el museo de...", bt: "Ver más"},
        { imagen: "/img/temple_bar.jpg", titulo: "The temple bar Burjassot", contexto: "Los mejores findes con los mejores amigos, conoce los mejores bares de...", bt: "Ver más"},
        { imagen: "/img/bjj.jpg", titulo: "La ruta", contexto: " LA RUTA: es un viaje sensorial a la València de los años 80 y 90. En un...", bt: "Ver más"},
        { imagen: "/img/bar.jpg", titulo: "The temple bar Burjassot", contexto: "Los mejores findes con los mejores amigos, conoce los mejores bares de...", bt: "Ver más"}
    ];

    var elementosFiltrados = elementos.filter((item) =>
        item.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
        
    return (
        <>  
            <div className="buscador_entrada">
                <h1 className='h1_titol'>Ultimas Noticias</h1>
                <input 
                    type="text" 
                    placeholder="Buscar por título..." 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="input_busqueda" 
                />
            </div>
            <section className="grid_entrada">
                {elementosFiltrados.length > 0 ? (
                    elementosFiltrados.map((item, index) => (
                        <Entrada key={index} imagen={item.imagen} titulo={item.titulo} contexto={item.contexto} bt={item.bt} />
                    ))
                ) : (
                    <p>No se encontraron resultados</p>
                )}
            </section>
        </>
    );
}
