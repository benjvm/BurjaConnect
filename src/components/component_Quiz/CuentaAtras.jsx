import React, { useState, useEffect } from 'react';
import '../../assets/styles/style_Quiz/CuentaAtras.css';

export default function CuentaAtras({ onTiempoTerminado, detener }) {
  var TIEMPO_INICIAL = 60; 
  
  var [tiempo, setTiempo] = useState(TIEMPO_INICIAL);

  useEffect(() => {
    if (detener) 
    {
      return;
    }

    var intervalo = setInterval(() => 
      {
      setTiempo(tiempo => 
        {
        if (tiempo > 1) 
        {
          return tiempo - 1;
        } 
        else if (tiempo === 1) 
        {
          if (onTiempoTerminado) 
          {
            onTiempoTerminado();
          }
          return 0;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [onTiempoTerminado, detener]);

  var formatearTiempo = (segundos) => 
  {
    var mins = Math.floor(segundos / 60);
    var segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container_contador">
      <div className="card_contador">
        <div className={`display_contador ${tiempo === 0 ? 'tiempo_terminado_contador' : ''}`}>
          <h2 className="numero_contador">
            {formatearTiempo(tiempo)}
          </h2>
          {tiempo === 0 && <p className="mensaje_contador">¡Tiempo terminado!</p>}
        </div>
      </div>
    </div>
  );
}