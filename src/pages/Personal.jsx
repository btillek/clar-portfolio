import '../components/Personal.css'
import PersonalOde from "../components/personal/PersonalOde"
import PersonalBog from "../components/personal/PersonalBog"
import PersonalChocolate from "../components/personal/PersonalChocolate"
import PersonalFeuer from "../components/personal/PersonalFeuer"
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Personal() {
  return (
    <>
      <ParallaxProvider>
        <div style={{width: "100vw"}}>
          <div style={{fontSize: "3rem", fontFamily: "Work Sans", fontWeight: "500", fontStyle: "italic", position: "fixed", top: "24px", left: "24px", zIndex: "30"}}>Personal writing</div>
        </div>
        <div style={{marginTop: "96px"}}>
            <div><PersonalOde/></div>
            <div><PersonalBog /></div>
            <div><PersonalChocolate /></div>
            <div><PersonalFeuer /></div>
        </div>
      </ParallaxProvider>
    </>
  )
}
