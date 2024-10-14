import Styles from './Project.module.css'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import logo from '../../assets/bt-logo.svg'


const Project = () => {
  return (
    <>
    <Header/>

    <div className={Styles.experiences}>
        <h2>Project Description and Experiences</h2>
        <p style={{fontSize: "1rem", fontWeight: '700', padding: "1rem 0"}}>Our Project Experience Include:</p>
        <div className={Styles.flexBox}>
        <div className={Styles.project}>
            <div className={Styles.img}>
            <img src={logo} alt="logo" />
            </div>
            <h3>Design and Construction of a 5 MVA Alternative Power System</h3>
            <p>Delivered a reliable alternative power solution for Shell Petroleum Development Company (SPDC) host communities, enhancing energy access and sustainability.</p>
        </div>
        <div className={Styles.project}>
            <div className={Styles.img}>
            <img src={logo} alt="logo" />
            </div>
            <h3>Construction of Carbon Steel Flowlines, Bulk Lines, and Intersite Composite Cables</h3>
            <p>Successfully executed the construction of vital infrastructure, including carbon steel flowlines, bulk lines, and intersite composite cables, ensuring efficient operations and connectivity.
            </p>
        </div>
        <div className={Styles.project}>
            <div className={Styles.img}>
            <img src={logo} alt="logo" />
            </div>
            <h3>Ugbele 18” x 83 km Gas Pipeline Project</h3>
            <p>Completed the design and construction of an 18-inch, 83-kilometer gas pipeline for Indorama, contributing to improved energy distribution and operational efficiency.
            </p>
        </div>
        <div className={Styles.project}>
            <div className={Styles.img}>
            <img src={logo} alt="logo" />
            </div>
            <h3>Egbema 24” x 21 km Gas Pipeline Project</h3>
            <p>Managed the construction of a 24-inch, 21-kilometer gas pipeline for the Olorunsogo project, supporting enhanced gas transmission and energy infrastructure.
            </p>
        </div>
        </div>
    </div>
    
    <Footer/>
</>
  )
}

export default Project
