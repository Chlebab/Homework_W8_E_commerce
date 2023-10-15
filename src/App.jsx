import { useState } from 'react'
import './App.css'
import Shop from './containers/Shop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from './components/Basket';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </Router>
  )
}

export default App
