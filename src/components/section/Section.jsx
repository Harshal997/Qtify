import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CardComponent } from "../card/Card";
import styles from "./Section.module.css";
import { Button, Grid2 } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

export const Section = ({ type }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const url =
    type === "top"
      ? "https://qtify-backend-labs.crio.do/albums/top"
      : "https://qtify-backend-labs.crio.do/albums/new";

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
        // setData([...data, response.data])
      } catch (e) {
        console.error("error fetching data...", e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className={styles.heading}>
        <h2
          style={{
            color: "white",
            fontFamily: "Poppins",
            marginLeft: 10,
            fontSize: 20,
          }}
        >
          {type === "top" ? "Top Albums" : "New Albums"}
        </h2>
        <Button sx={{ color: "#34C94B" }}>Show all</Button>
      </div>
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
      );
    </>
  );
};
