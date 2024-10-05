import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/Styles.css';
import Styles from './Slider.module.css'; 
import img1 from '../../assets/image_slider_1.jpg'
import img2 from '../../assets/image_slider_2.jpg'
import img3 from '../../assets/image_slider_3.jpg'
import img4 from '../../assets/image_slider_4.jpg'

const Slider = () => {
  const images = [
    img1, img2, img3, img4
  ];

  return (
    <div className={Styles.sliderContainer}>
      <Slide autoplay={true} duration={3000} pauseOnHover={true} 
      prevArrow={<div style={{ display: 'none' }}></div>}  
      nextArrow={<div style={{ display: 'none' }}></div>}> 
        {images.map((image, index) => (
          <div className={Styles.eachSlide} key={index}>
            <img src={image} alt={`Slide ${index}`} className={Styles.sliderImage} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
