import Slide1 from '../../assets/Images/bread-full04.jpeg'
import Slide2 from '../../assets/Images/bread-full10.jpeg'
import Slide3 from '../../assets/Images/bread-full09.jpeg'
import Slide4 from '../../assets/Images/bread-full03.jpeg'
import Slide5 from '../../assets/Images/bread-full01.jpeg'
import styles from './slideshow.module.scss'
import { useEffect, useState } from 'react'

export const SlideShow = () => {
  const slideImages = [
    { url: Slide1, caption: 'Slide 1' },
    { url: Slide2, caption: 'Slide 2' },
    { url: Slide3, caption: 'Slide 3' },
    { url: Slide4, caption: 'Slide 4' },
    { url: Slide5, caption: 'Slide 5' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideImages.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slideshowContainer}>
      {slideImages.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${currentIndex === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.url})` }}
        >
        </div>
      ))}

      <div className={styles.dotsContainer}>
        {slideImages.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};