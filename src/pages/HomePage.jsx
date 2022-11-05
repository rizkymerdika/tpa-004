import Home from '../components/Home'
import {Helmet} from 'react-helmet'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Rizky Merdika Agusta</title>
      </Helmet>
      <Home/>
    </>
  )
}

export default HomePage