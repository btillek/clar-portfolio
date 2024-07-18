import './App.css';
import Lenis from 'lenis';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Header from './components/Header'
import About  from './components/About'
import MenuOverlay from './components/MenuOverlay'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {

  const [ showMenu, setShowMenu ] = useState(false)
  const [ showResume, setShowResume] = useState(false)

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className="App">
      {/* <motion.div className="opener"
      initial={{y: 0}}
      animate={{y: window.innerHeight, transition: {duration: 1, delay: 0.5, ease: [.2,0,0,.99]}}}
      ></motion.div> */}
      <Navbar setShowMenu={setShowMenu} />
      <Header />
      <About />
      <MenuOverlay showMenu={showMenu} setShowMenu={setShowMenu} setShowResume={setShowResume}/>
      {/* <Resume showMenu={showResume} setShowMenu={setShowResume}/> */}
      <Footer />
    </div>
  );
}

export default App;
