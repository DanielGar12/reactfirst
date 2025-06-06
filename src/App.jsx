import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginSignup from './components/Assets/LoginSignup/LoginSignup'
import Home from './components/Assets/Home/Home';
import Menu from './components/Assets/Menu/menu';


function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>    
  
  )
}

export default App
