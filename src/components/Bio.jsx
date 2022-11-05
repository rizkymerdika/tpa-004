import { useState } from 'react'
import PropTypes from 'prop-types'

function Bio({P1, P2}) {
    const [tech] = useState([
        "HTML", "CSS", "JavaScript", "Bootstrap"
    ])

  return (
    <section id="content-1">
        <div id="about">
            <p>{P1}</p>
            <p>{P2}</p>
            <ul>
                {
                    tech.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

Bio.propTypes = {
    P1: PropTypes.string.isRequired,
    P2: PropTypes.string.isRequired
}

export default Bio