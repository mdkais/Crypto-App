import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'

import Home from './components/home'
import Coins from './components/coins'
import Exchanges from './components/exchanges'
import Coindetails from './components/coindetails'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>        
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route  path="/coins" element={<Coins/>} />
          <Route path="/exchanges" element={<Exchanges/>} />
          <Route  path="/coin/:id" element={<Coindetails/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
