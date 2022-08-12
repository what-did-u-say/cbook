import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Contacts from './Contacts/Contacts'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App