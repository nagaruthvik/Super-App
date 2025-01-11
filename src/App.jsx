import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import Form from './Pages/Form'
import Selector from './Pages/Selector'
import Widgets from './Pages/Widgets'
import Notepad from './components/notepad'
import Movies from './Pages/Movies'
import Weather from './components/weather'

export default function App() {
  return (

    <div  >
      <Router>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path='/Selector' element={<Selector/>}></Route>
          <Route path='/Widgets' element={<Widgets/>}></Route>
          <Route path='/Movies' element={<Movies/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
