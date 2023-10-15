import { useState } from 'react'

function ProjectList() {
    const [listProject] = useState([
        {
            title: "Personal Website",
            bio: "My Personal Website",
            link: "https://rizkymerdika-portfolio.netlify.app",
            technology: ["HTML", "CSS"]
        },
        {
            title: "Anabul Care",
            bio: "Pet Care and Maintenance Website",
            link: "https://anabul-care.netlify.app",
            technology: ["HTML", "CSS", "Bootstrap"]
        },
        {
            title: "BMI Calculator",
            bio: "My BMI Calculator",
            link: "https://my-bmi-calculator-tpa002.netlify.app",
            technology: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Movies App",
            bio: "My Movies App",
            link: "https://rizkymerdika-movies-app.netlify.app",
            technology: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "To Do List App",
            bio: "My To Do List App",
            link: "https://rizkymerdika-todolistapp.netlify.app",
            technology: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node JS", "React JS"]
        },
        {
            title: "TeleDoc",
            bio: "Final Project Program Studi Independen Skilvul: Tech4Impact di Bidang Front-End Web Developer",
            link: "https://teledoc-febe22.netlify.app",
            technology: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node JS", "React JS"]
        },
        {
            title: "SIHACI",
            bio: "Media Promosi Pariwisata di Cianjur",
            link: "https://fe-sihaci.netlify.app",
            technology: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node JS", "React JS"]
        }
    ])

  return (
    <section id="content-2">
        <div id="project">
            <div className="project-list">
                {
                    listProject.map((item, index) => (
                        <a href={item.link} className="project-list-item" target="_blank" key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.bio}</p>
                            <div>
                                {
                                    item.technology.map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))
                                }
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ProjectList