import Styles from "./Footer.module.css"
import logo from '../../../assets/bt-logo.svg'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.footerDetails}>
          <div className={Styles.btLogo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={Styles.footerFlex}>
            <div className={Styles.lText}>
              <small>
                Painite Gem Glee Resources (PGGR) was incorporated in Surulere,
                Nigeria, with registration number 2590078 on March 22, 2018.
              </small>
              <address>
                The company’s registered office is located at 58 Oladimeji
                Street, Aguda.
              </address>
            </div>
            <div className={Styles.rText}>
            <small className={Styles.small}>Navigation</small>
              <nav className={Styles.navFlex}>
                <ul className={Styles.left}>
                  <li>
                    <Link className={Styles.link} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className={Styles.link} to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className={Styles.link} to="/projects">
                      Project
                    </Link>
                  </li>
                </ul>
                <ul className={Styles.right}>
                  <li>
                    <Link className={Styles.link} to="/sustain">
                      Sustainablity
                    </Link>
                  </li>
                  <li>
                    <Link className={Styles.link} to="/career">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className={Styles.link} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className={Styles.contact}>
                <span className={Styles.span}>
                  <a href="tel:=234-803-609-1782">Phone: 08036091782</a>
                </span>
                <span className={Styles.span}>
                  <a href="mailto:pggresourcesdesk@gmail.com">Email: pggresourcesdesk@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
