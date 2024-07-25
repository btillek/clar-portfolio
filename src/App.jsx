import './App.css';
import Lenis from 'lenis';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import ContactOverlay from './components/ContactOverlay'
import Home from './pages/Home';
import Work from './pages/Work'
import Personal from './pages/Personal';
import Resume from './pages/Resume';

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
          <Route path="/personal" element={<Personal />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </>
  )
  // return (
  //   <div className="App">
  //     <Navbar setShowContact={setShowContact} />
  //     <Header />
  //     <About />
  //     <Marquee autoFill style={{borderTop: "0.5px solid black", paddingTop: 24, paddingBottom: 24, backgroundColor: "#C2D5FF"}}>
  //       <a href="mailto:clartillekens@gmail.com"
  //       style={{marginRight: 480, textDecoration: "none", color: "black"}}
  //       >Let's work together</a>
  //     </Marquee>

  //     <ContactOverlay showContact={showContact} setShowContact={setShowContact}/>
  //     {/* <Personal1 /> */}
  //     {/* <MenuOverlay showMenu={showMenu} setShowMenu={setShowMenu} setShowResume={setShowResume}/> */}
  //     {/* <Resume /> */}
  //     <Footer />
  //   </div>
  // );
}

export default App;
