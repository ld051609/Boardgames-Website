import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Homepage from './pages/Homepage/Homepage'
import Menu from './pages/Menu/Menu'  
import About from './pages/About/About'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App