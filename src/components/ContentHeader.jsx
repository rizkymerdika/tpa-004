// id: content-2
// kelas: horizontal-rule-content-2
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

export default ContentHeader