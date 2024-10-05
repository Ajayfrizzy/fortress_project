import Styles from "./Establishment.module.css";
import esta1 from "../../assets/establish-image-1.svg";
import esta2 from "../../assets/establish-image-2.svg";
import esta3 from "../../assets/establish-image-3.svg";
import esta4 from "../../assets/establish-image-4.svg";
import { Link } from "react-router-dom";

const Establishment = () => {
  return (
    <>
      <section className={Styles.section}>
        <h3 className={Styles.h3}>
          PGGR has established itself as an Engineering, Procurement, and
          Construction (EPC) contractor.
        </h3>
        <div className={Styles.section1}>
          <img src={esta1} alt="image" />
          <div className={Styles.img1}>
            <img src={esta2} alt="image" />
            <small className={`${Styles.text1} ${Styles.none}`}>
              PGGR has established itself as an Engineering, Procurement, and
              Construction (EPC) contractor.
            </small>
          </div>
        </div>
        <div className={Styles.section2}>
          <div className={Styles.img2}>
            <small className={`${Styles.text2} ${Styles.none}`}>
              PGGR has established itself as an Engineering, Procurement, and
              Construction (EPC) contractor.
            </small>
            <img src={esta3} alt="image" />
          </div>
          <img src={esta4} alt="image" />
        </div>
        <p className={Styles.pLink}>
          <Link className={Styles.link} to="/services">Get Started</Link>
        </p>
      </section>
    </>
  );
};

export default Establishment;
