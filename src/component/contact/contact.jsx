import Styles from './contact.module.css'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'


const contact = () => {
  return (
    <>
    <Header/>
    
    <div className={Styles.contact}>
    <h2>Contact Us</h2>
    <p>The company’s registered office is located at 58 Oladimeji Street, Aguda.</p>
    <p>Phone: 08036091782</p>
    <p>Email: pggresourcesdesk@gmail.com</p>
    </div>

    <Footer/>
    </>
  )
}

export default contact



