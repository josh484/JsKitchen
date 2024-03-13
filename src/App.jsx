import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import './App.css'
import Navbar from './assets/components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    <Router>
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
