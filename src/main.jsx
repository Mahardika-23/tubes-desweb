import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/home.jsx';
// import Detail from './pages/detail.jsx';
import Vacation from './pages/Vacation.jsx';
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/detail' element={<Detail />} /> */}
        <Route path='/Home' element={<Home />} />
        <Route path='/Vacation' element={<Vacation/>} />
        <Route path= '/login' element={<Login/>} />
        <Route path= '/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)