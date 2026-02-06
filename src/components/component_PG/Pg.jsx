import Header from '../component_Header/Header.jsx';
import Bj from '../component_Bj/Bj.jsx';
import Both_Entrada from '../conmponent_Entradas/Both_Entrada.jsx';
import Contacto from '../component_Contacto/Contacto.jsx';
import Footer from '../component_Footer/Footer.jsx';


export default function Pg() 
{ 
  return (
    <div>
        <Header />
        <Bj />
        <Both_Entrada />
        <Contacto />
        <Footer />
    </div>
  )
}