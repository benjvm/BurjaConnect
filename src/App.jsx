import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Header from './components/component_Header/Header.jsx';
import QuizBurjassot from './components/component_Quiz/QuizBurjassot.jsx';

export default function App() 
{ 
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/QuizBurjassot' element={<QuizBurjassot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

