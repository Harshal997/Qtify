import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CardComponent } from "../card/Card";
import styles from "./Section.module.css";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

export const Section = ({ type, data, genres }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [songsData, setSongsData] = useState(data);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  console.log("genres in section", genres);
  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    setSelectedTab(newValue);
    const url = newValue !== 'All' ? `https://qtify-backend-labs.crio.do/songs?q=${encodeURIComponent(newValue)}` : "https://qtify-backend-labs.crio.do/songs";
    axios.get(url)
      .then(response => setSongsData(response.data))
      .catch(error => console.error("Error fetching genres:", error));
  };

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then(response => setSongsData(response.data))
      .catch(error => console.error("Error fetching genres:", error));
  },[])
  
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
          {type}
        </h2>
        <Button sx={{ color: "#34C94B" }}>{!genres && "Show All"}</Button>
      </div>
      <div className={styles.swiperContainer}>
        <div ref={prevRef} className={styles.customPrevButton} id="customPrev">
          <img src={leftArrow} alt="Previous" className={styles.arrowImage} />
        </div>
        <div ref={nextRef} className={styles.customNextButton} id="customNext">
          <img src={rightArrow} alt="Next" className={styles.arrowImage} />
        </div>

        {genres && genres.length && (
          <TabContext value={selectedTab}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginBottom: "19px",
              }}
            >
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  sx: { backgroundColor: "#34C94B" },
                }}
              >
                <Tab
                  key="All"
                  sx={{
                    fontFamily: 'Poppins',
                    color: "white",
                    "&.Mui-selected": { color: "white" },
                  }}
                  label="All"
                  value="All"
                />{" "}
                {genres.map((genre) => (
                  <Tab
                    key={genre.key}
                    sx={{
                      fontFamily: 'Poppins',
                      color: "white",
                      "&.Mui-selected": { color: "white" },
                    }}
                    label={genre.label}
                    value={genre.key}
                  />
                ))}
              </TabList>
            </Box>
          </TabContext>
        )}

        <Swiper
          spaceBetween={10}
          slidesPerView={8}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }} 
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
            1440: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
        >
          {genres && genres.length ? songsData &&
            songsData.length &&
            songsData.map((item, index) => (
              <SwiperSlide key={index}>
                {" "}
                <CardComponent
                  title={item.title}
                  follows={item.follows}
                  likes={item.likes}
                  image={item.image}
                />
              </SwiperSlide>
            )) : data &&
            data.length &&
            data.map((item, index) => (
              <SwiperSlide key={index}>
                {" "}
                <CardComponent
                  title={item.title}
                  follows={item.follows}
                  likes={item.likes}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};
