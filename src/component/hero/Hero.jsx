import { Link } from "react-router-dom";
import Styles from "./Hero.module.css";
import Slider from '../slider/Slider'
import Textanimation from "../textanimation/Textanimation";

const Hero = () => {

  return (
    <section className={Styles.hero}>
      <div className={Styles.heroSection}>
          <h1 className={Styles.h1}>Engineering For A Sustainable Future</h1>
          <p className={Styles.p}>
          <Link className={Styles.link} to="/services">
            Get started
          </Link>
          </p>

          <div className={Styles.small}>
            <span className={Styles.span1}></span>
            <span className={Styles.span}><Textanimation/></span>
          </div>
      </div>
      <Slider/>
    </section>
  );
};

export default Hero;