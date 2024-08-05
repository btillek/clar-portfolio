import './App.css';
import Lenis from 'lenis';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import ContactOverlay from './components/ContactOverlay'
import Home from './pages/Home';
import Work from './pages/Work'
import Work2 from './pages/Work2'
import Personal from './pages/Personal';
import Resume from './pages/Resume';
import Contact from './pages/Contact'

function App() {

  const [ showContact, setShowContact ] = useState(false)

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  const location = useLocation();

  return (
    <>
      <Navbar setShowContact={setShowContact}/>
      <ContactOverlay showContact={showContact} setShowContact={setShowContact}/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work2" element={<Work2 />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;
