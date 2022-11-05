import ContentHeader from '../components/ContentHeader'
import ArticleList from "../components/ArticleList"
import {Helmet} from 'react-helmet'

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Rizky Merdika Agusta</title>
      </Helmet>
      <ContentHeader nama={"BLOG"} id={"content-2"} kelas={"horizontal-rule-content-2"}/>
      <ArticleList/>
    </>
  )
}

export default Blog