import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <label>KYM.</label>
        <ul>
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/blog"}>BLOG</Link></li>
            <li><Link to={"/projects"}>PROJECTS</Link></li>
            <li><Link to={"/about"}>ABOUT</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar