import { createRoot } from 'react-dom/client';
import { Mapa } from './components/component_Mapa/Mapa.jsx';
import { Footer } from './components/component_Footer/Footer.jsx';
import { Contacto } from './components/component_Contacto/Contacto.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Contacto />
  </>,
)
