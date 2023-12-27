import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import './style.css'
import ProjectArchive from './pages/project-archive.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <Routes>
      <Route index element={<App />}/>
      <Route path="/" element={<App />}/>
      <Route path="*" element={<App />}/>
      <Route path="/project-archive" element={<ProjectArchive/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
