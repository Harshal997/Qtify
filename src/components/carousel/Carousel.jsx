import React, { useRef } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/types';
import styles from './Carousel.module.css'
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import { SwiperSlide } from 'swiper/react';
import { CardComponent } from '../card/Card';

export const Carousel = ({ data }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div className={styles.swiperContainer}>
      <div ref={prevRef} className={styles.customPrevButton} id="customPrev">
        <img src={leftArrow} alt="Previous" className={styles.arrowImage} />
      </div>
      <div ref={nextRef} className={styles.customNextButton} id="customNext">
        <img src={rightArrow} alt="Next" className={styles.arrowImage} />
      </div>
      <Swiper
      spaceBetween={10}        // Gap between slides (similar to Grid2 spacing)
      slidesPerView={8}        // Number of slides visible at once
      navigation={{
        nextEl: nextRef.current,  // Use IDs for navigation elements
        prevEl: prevRef.current,
      }}           // Enable navigation arrows
      modules={[Navigation]}   // Include navigation functionality
      breakpoints={{           // Responsive settings
        320: {                 // For screens ≥ 320px
          slidesPerView: 2,
          spaceBetween: 8,
        },
        640: {                 // For screens ≥ 640px
          slidesPerView: 4,
          spaceBetween: 12,
        },
        1024: {                // For screens ≥ 1024px
          slidesPerView: 6,
          spaceBetween: 16,
        },
        1440: {                // For screens ≥ 1440px
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }}
    >
      
      {data.map((item, index) => (
        <SwiperSlide key={index}>  {/* Each slide is horizontal */}
          <CardComponent
            title={item.title}
            follows={item.follows}
            image={item.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}
