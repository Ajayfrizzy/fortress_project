import Styles from "./Sustain.module.css";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const Sustain = () => {
  return (
    <>
      <Header />
      <div className={Styles.sustain}>
        <h2>Sustainability</h2>
        <p>
          Our commitment to sustainability fuels our dedication
          to fulfilling our corporate social and environmental responsibilities.
          With a clear focus on advancing human society and serving as a
          responsible member of the future, we have established a dedicated team
          to guide our sustainable management efforts.
        </p>
        <p>
          Grounded in the principles of environmental stewardship, social
          responsibility, and strong governance, we have set clear objectives to
          ensure the seamless integration of sustainability across all aspects
          of our operations.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Sustain;
