import '../../assets/styles/style_Bj/Bj.css';
import Calendar from '../component_Calendar/Calendar.jsx';

export default function Bj() 
{ 
  return (
    <div className='bj_init'>
      <div className='context_bj'>
        <div className='titulo_bj'>
          Juventud Burjassot
        </div>
        <div className='subtitulo_bj'>
          Aquí podrás encontrar enlaces de interés, eventos y minijuegos relacionados con el municipio de Burjassot
        </div>
      </div>
      <div className=''>
        <Calendar />
      </div>
    </div>
  )
}