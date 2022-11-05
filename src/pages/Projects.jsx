import ContentHeader from '../components/ContentHeader'
import ProjectList from '../components/ProjectList'

function Projects() {
  return (
    <>
      <ContentHeader nama={"PROJECTS"} id={"content-2"} kelas={"horizontal-rule-content-2"}/>
      <ProjectList/>
    </>
  )
}

export default Projects