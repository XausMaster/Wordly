"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
};

export default App;
