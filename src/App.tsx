// src/App.js
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import HelloWorld from './pages/HelloWorld';
import DoughnutTime from './pages/DoughnutTime';
import Baloons from './pages/Baloons';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Hello</Link></li>
          <li><Link to="/doughnuts">Doughnuts</Link></li>
          <li><Link to="/baloons">Baloons</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/doughnuts" element={<DoughnutTime />} />
        <Route path="/baloons" element={<Baloons />} />
        {/* Catch 404 errors - either redirect to home or show not found page */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;