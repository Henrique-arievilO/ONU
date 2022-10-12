import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/index';
import Home from '../Pages/Home';
import Proposals from '../Pages/Proposals';
import Button from '../Components/Button'

export default function Pathway() {
  return (
    <Router>
      <Header />
      <Button />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Proposals' element={<Proposals />} />
      </Routes>
    </Router>
  )
}