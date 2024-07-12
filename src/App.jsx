import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Homepage from './pages/Homepage/Homepage'
import Menu from './pages/Menu/Menu'  
import Events from './pages/Events/Events'
import Reservations from './pages/Reservations/Reservations'
import NotFound from './page404'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/event" element={<Events />} />
          <Route path="/reservations" element={<Reservations />} />

          <Route path="*" element={<NotFound/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App