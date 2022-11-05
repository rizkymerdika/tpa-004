import ContentHeader from "../components/ContentHeader"
import Bio from "../components/Bio"

function About() {
  const P_1 = "Saya Rizky Merdika Agusta, pembuat dari website ini. Saat ini saya tengah menempuh kuliah S1 di Universitas Pendidikan Indonesia Kampus Purwakarta Jurusan Pendidikan Sistem dan Teknologi Informasi. Saya pertama kali tertarik dalam bidang Web Development sekitar 2021 dan telah belajar dengan melakukan berbagai projek yang diberikan selama perkuliahan. Saya saat ini mulai mendalami Front-End Web Developer melalui program yang dilaksanakan oleh Skilvul melalui Kampus Merdeka. Saya terus belajar dan berusaha dengan tekun dan motivasi tinggi untuk bisa menjadi sosok yang bermanfaat bagi masyarakat. Segera pada tahun 2023 saya akan menyelesaikan studi sarjana saya."
  const P_2 = "Ini adalah tools yang saat ini saya kuasai untuk membangun situs web. Saya terus mempelajari tools baru sehingga daftar ini dapat berubah."
  
  return (
    <>
      <ContentHeader nama={"ABOUT"} id={"content-1"} kelas={"horizontal-rule-content-1"}/>
      <Bio P1={P_1} P2={P_2}/>
    </>
  )
}

export default About