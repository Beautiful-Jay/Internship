import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer';
import Contact from './components/Contact';
import Content from './components/Content'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;