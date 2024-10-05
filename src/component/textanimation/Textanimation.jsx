import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Styles from './Textanimation.module.css'; // If you want custom styles

const Textanimation = () => {
  const [text] = useTypewriter({
    words: [
      "PGGR is a leading EPC contractor in the Oil & Gas sector.",
      "At PGGR, we support our clients at every stage of their EPC journey."
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 200,
  });


  return (
    <div className={Styles.typewriterContainer}>
      <span>{text}</span>
      <span className={Styles.curs}> <Cursor/></span>
    </div>
  );
};

export default Textanimation;