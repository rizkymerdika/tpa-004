import {useState} from 'react'

function ArticleList() {
    const [listArticle] = useState([
        {
            title: "RANCANG BANGUN PLATFORM DIGITAL PEMELIHARAAN HEWAN BERBASIS WEBSITE SEBAGAI SOLUSI PERAWATAN HEWAN",
            link: "https://ejournal.upi.edu/index.php/integrated/article/view/45885",
            date: "30/04/2022"
        },
        {
            title: "PENGEMBANGAN WEBSITE PARIWISATA BUDAYA SEBAGAI PLATFORM WISATA DIGITAL DI MASA PANDEMI",
            link: "https://ejournal.upi.edu/index.php/integrated/article/view/35536",
            date: "31/10/2021"
        }
    ])

  return (
    <section id='content-2'>
        <div id='article'>
        {
            listArticle.map((item, index) => (
                <div className="article-list" key={index}>
                    <a href={item.link}>{item.title}</a>
                    <p>{item.date}</p>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default ArticleList