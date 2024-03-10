import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'

import Home from './components/home'
import Coins from './components/coins'
import Exchanges from './components/exchanges'
import Coindetails from './components/coindetails'
import Sell from './components/sell'

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
          <Route  path="/coins/:id" element={<Coindetails/>} />
          <Route  path="/sell/:id" element={<Sell/>} />
          
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
