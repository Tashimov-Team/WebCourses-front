import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import CoursePage from './pages/CoursePage';
import Auth from './pages/Auth';
import Buying from './pages/Buying';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/pay/:id" element={<Buying />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App