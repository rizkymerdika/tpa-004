import { useState } from "react"
import myPhoto from '../assets/DSC_7990 rizky   4x6.jpg'

function HomePage() {
  const [nama, setNama] = useState("Rizky Merdika Agusta")

  return (
    <section id="content-1">
        <img src={myPhoto} alt="Rizky Merdika Agusta"/>
        <p style={{marginTop: '10px'}}>Hi there, I'm</p>
        <h1>{nama}</h1>
        <div id="icon">
            <div className="horizontal-rule-content-1"></div>
            <i className="fa-solid fa-star"></i>
            <div className="horizontal-rule-content-1"></div>
        </div>
        <p className="">Front-End Web Developer</p>
    </section>
  )
}

export default HomePage