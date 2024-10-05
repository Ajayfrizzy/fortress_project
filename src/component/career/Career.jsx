import Styles from "./Career.module.css";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const Career = () => {
  return (
    <>
      <Header />
      <div className={Styles.career}>
        <h2>CAREERS</h2>
        <p>Join Our Team at PGGR Engineering Services Limited!</p>
        <p>
          At PGGR Engineering Services Limited, we are passionate about driving
          innovation and delivering exceptional engineering solutions. As a
          leader in the industry, we thrive on tackling complex projects and
          creating sustainable, future-forward designs. We are looking for
          talented individuals who share our commitment to excellence and are
          eager to contribute to groundbreaking projects.
        </p>
        <p>Why PGGR?</p>
        <ul className={Styles.ul}>
          <li>
            Career Growth: We prioritize the development of our team members and
            provide opportunities for continuous learning and advancement.
          </li>
          <li>
            Innovative Projects: Be a part of cutting-edge engineering projects
            that challenge and inspire.
          </li>
          <li>
            Collaborative Culture: Work with a team that values open
            communication, diverse perspectives, and mutual respect.
          </li>
          <li>
            Impactful Work: Make a difference in industries that
            matter—delivering high-quality solutions while ensuring
            environmental and social responsibility.
          </li>
        </ul>
        <p>
          Ready to take the next step in your engineering career? Join PGGR
          Engineering Services Limited and be part of a team shaping the future
          of engineering.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Career;
