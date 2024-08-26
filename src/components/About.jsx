import './About.css'
import TextReveal from './TextReveal'

export default function About() {

  return (
    <div style={{marginLeft: "270px", paddingBottom: "96px", paddingRight: "24px", width: "40vw", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: "96px"}}>

        <p style={{fontSize: "1.5rem", margin: 0}}>
          <h2 style={{display: "inline", fontSize: "1rem", marginRight: "48px", position: "relative", bottom: "6px", color: "#B6BAB9"}}>
            ABOUT ME
          </h2>
          {"I’m a dual American-Irish citizen. Rumor has it I come from a line of bards. Collaborating with good people to let language shine charms me.".split(" ").map((word, i) => {
            return (
              <TextReveal>{word}&nbsp;</TextReveal>
            )
          })}
          <p style={{marginBottom: 0}}>
          {"Italo disco, arthouse films, and esoterica are some things that get me going. In a former life, I was a visual artist.".split(" ").map((word, i) => {
            return (
              <TextReveal>{word}&nbsp;</TextReveal>
            )
          })}
          </p>
        </p>

        <p style={{fontSize: "1.5rem", margin: 0}}>
          <h2 style={{display: "inline", fontSize: "1rem", marginRight: "48px", position: "relative", bottom: "6px", color: "#B6BAB9"}}>ABOUT MY WORK</h2>
          {"I’ve been working in tech since 2016. Music and live events are my focus lately. Before that, it was health. I started out at a legendary menstrual cycle tracking app. Then I went on to freelancing for startups focused on autoimmunity and menopause.".split(" ").map((word, i) => {
            return (
              <TextReveal>{word}&nbsp;</TextReveal>
            )
          })}
          <p>
          {"My writing also extends to print, film, and television. Currently, I’m a part of Granta Magazine’s inaugural Writing Memoir Workshop.".split(" ").map((word, i) => {
            return (
              <TextReveal>{word}&nbsp;</TextReveal>
            )
          })}
          </p>
          <p>
          {"I’m also a co-creator of the comedy series Oval, in development with Telepool Germany, Picture Perfect Federation, and Potboiler Productions.".split(" ").map((word, i) => {
            return (
              <TextReveal>{word}&nbsp;</TextReveal>
            )
          })}
          </p>
        </p>

        {/* <div>
          <button style={{marginRight: "48px", fontSize: "1rem", color: "#B6BAB9", border: "1px solid #B6BAB9", padding: "12px", borderRadius: "50px"}}>Get in touch</button>
          <button style={{fontSize: "1rem", color: "#B6BAB9", border: "1px solid #B6BAB9", padding: "12px", borderRadius: "50px"}}>View my work</button>
        </div> */}
    </div>
  )
}
