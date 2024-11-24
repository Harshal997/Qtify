import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardComponent } from "../card/Card";
import styles from './Section.module.css'
import { Button, Grid2 } from "@mui/material";

export const Section = () => {
  const url = "https://qtify-backend-labs.crio.do/albums/top";

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
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
        Top Albums
      </h2>
      <Button sx={{color: "#34C94B"}}>
        Show all
      </Button>
      </div>
      <Grid2
      container
      spacing={4}
      direction="row" 
      sx={{marginLeft: '13px'}}
    >
      {data.map((data, index) => (
        <Grid2 key={index} xs={12} sm={6} md={4} lg={3}>
          <CardComponent title={data.title} follows={data.follows} image={data.image}/>
        </Grid2>
      ))}
    </Grid2>
  );
    </>
  );
};
