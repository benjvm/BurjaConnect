import { BrowserRouter, Routes, Route, Link } from 'react-router';
import QuizBurjassot from './components/component_Quiz/QuizBurjassot.jsx';
import Render_preguntas from './components/componente_Preguntas/Render_preguntas.jsx';
import Pg from './components/component_PG/Pg.jsx';
import ScrollToTop from './components/component_scroll/Scroll.jsx';
import Mapa from './components/component_Mapa/Mapa.jsx';

export default function App() 
{ 
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route path='/' element={<Pg/>}/>
          <Route path='/Pg' element={<Pg/>}/>
          <Route path='/QuizBurjassot' element={<QuizBurjassot/>}/>
          <Route path='/Mapa' element={<Mapa/>}/>
          <Route path='/PreguntasFrecuentes' element={<Render_preguntas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

