import { BrowserRouter, Routes, Route, Link } from 'react-router';
import QuizBurjassot from './components/component_Quiz/QuizBurjassot.jsx';
import Pg from './components/component_PG/Pg.jsx';
import ScrollToTop from './components/component_scroll/Scroll.jsx';

export default function App() 
{ 
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route path='/' element={<Pg/>}/>
          <Route path='/Pg' element={<Pg/>}/>
          <Route path='/QuizBurjassot' element={<QuizBurjassot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

