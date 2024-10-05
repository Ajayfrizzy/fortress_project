import Styles from './About.module.css'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'


const About = () => {
  return (
    <>
    <Header/>
    
    <div className={Styles.about}>
    <h2 className={Styles.h2}>About PGGR Engineering Services Limited</h2>
    <h2 className={Styles.small}>Creating Value through Engineering Excellence.</h2>

    <p className={Styles.p}>Painite Gem Glee Resources (PGGR) was incorporated in Surulere, Nigeria, under registration number 2590078 on March 22, 2018. Our registered office is located at 58 Oladimeji Street, Aguda, Lagos.
    </p>

    <p className={`${Styles.p} ${Styles.border1}`}>Since our inception, PGGR has experienced consistent growth, establishing a reputation as a trusted Engineering, Procurement, and Construction (EPC) contractor. We specialize in delivering medium to large turnkey EPC projects, with expertise spanning pipeline construction, brownfield and greenfield oil and gas facilities, as well as the water, process, and power industries. Our team is equipped to handle projects of varying complexities while upholding the highest standards of excellence in execution and delivery.
    </p>

    <h2 className={Styles.h2}>Who We Are</h2>
    <p className={`${Styles.p} ${Styles.border1}`}>PGGR is a leading EPC contractor in the Oil & Gas sector. We have emerged as a reliable partner for medium to large EPC turnkey projects, including pipeline construction and the development of both brownfield and greenfield oil and gas facilities. Our capabilities extend to the water, process, and power industries, where we consistently demonstrate our proficiency in managing and executing complex EPC projects.
    </p>

    <h2 className={Styles.h2}>What We Do</h2>
    <p className={Styles.pt}>At PGGR, we support our clients at every stage of their EPC journey. With extensive expertise and experience, we provide tailored solutions to meet the unique challenges of each project.
    </p>
    <p className={Styles.pt}>Our growth and development have been fueled by strategic partnerships with foreign principals and alliances with both local and international technical partners. These collaborations have enhanced our core competencies and expanded our capacity to deliver world-class engineering solutions.
    </p>
    </div>

    <Footer/>
    </>
  )
}

export default About