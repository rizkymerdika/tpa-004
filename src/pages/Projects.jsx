import ContentHeader from '../components/ContentHeader'
import ProjectList from '../components/ProjectList'
import {Helmet} from 'react-helmet'

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Rizky Merdika Agusta</title>
      </Helmet>
      <ContentHeader nama={"PROJECTS"} id={"content-2"} kelas={"horizontal-rule-content-2"}/>
      <ProjectList/>
    </>
  )
}

export default Projects