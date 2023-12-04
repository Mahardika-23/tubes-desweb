import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from './App.jsx'
import List from './pages/list.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path= '/login' element={<Login/>} />
        <Route path= '/register' element={<Register/>} />
        <Route path= '/list' element={<List/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)