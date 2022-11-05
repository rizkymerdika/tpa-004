import ContentHeader from '../components/ContentHeader'
import ArticleList from "../components/ArticleList"

function Blog() {
  return (
    <>
      <ContentHeader nama={"BLOG"} id={"content-2"} kelas={"horizontal-rule-content-2"}/>
      <ArticleList/>
    </>
  )
}

export default Blog