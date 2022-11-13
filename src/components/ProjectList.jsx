import { useState } from 'react'

function ProjectList() {
    const [listProject] = useState([
        {
            title: "Personal Website",
            bio: "My Personal Website",
            link: "https://rizkymerdika-personal-web.netlify.app",
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