import PropTypes from 'prop-types'

function ContentHeader({nama, id, kelas}) {
  return (
    <div id={id}>
        <div className="content-header">
            <h1>{nama}</h1>
            <div id="icon">
                <div className={kelas}></div>
                <i className="fa-solid fa-star fa-2x"></i>
                <div className={kelas}></div>
            </div>
        </div>
    </div>
  )
}

ContentHeader.propTypes = {
  nama: PropTypes.oneOf([
    'BLOG',
    'PROJECTS',
    'ABOUT'
  ]).isRequired,
  id: PropTypes.oneOf([
    'content-1',
    'content-2'
  ]).isRequired,
  kelas: PropTypes.oneOf([
    'horizontal-rule-content-1',
    'horizontal-rule-content-2'
  ]).isRequired
}

export default ContentHeader