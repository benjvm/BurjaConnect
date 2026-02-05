export default function Entrada ({ imagen, titulo, bt, contexto })
{
    return(
        <div className="icono_entrada">
            <img src={imagen} alt={titulo} className="icono_circular_entrada" />
            <p className="titulo_icono_entrada">{titulo}</p>
            <p className="contexto_icono_entrada">{contexto}</p>
            <p className="boton_icono_entrada">{bt}</p>
        </div>
    );
}
