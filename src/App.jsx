
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './component/aboutus/About'
import Contact from './component/contact/contact'
import Projects from './component/projects/Project'
import Services from './component/services/Services'
import Career from './component/career/Career'
import Sustain from './component/sustain/Sustain'
import Textanimation from './component/textanimation/Textanimation'
function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/sustain' element={<Sustain/>}/>
        <Route path='/text' element={<Textanimation/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
