import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import song_image from "../../assets/song_image.png";
import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

export const CardComponent = ({title, image, follows}) => {
    return (
        <>
          <Card
            sx={{
              width: 159,
              backgroundColor: "#ffffff",
              borderRadius: 5,
              display: 'flex',
              flexDirection: 'column',   // Ensures vertical stacking
              height: 205                // Total height = 170 (image) + 35 (content)
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              src={image}
              sx={{
                objectFit: "cover",
                height: 170,            // Fixed height for the image
                width: '100%'
              }}
            />
            <CardContent
              sx={{
                marginTop: 1,
                height: 34,             // Fixed height for content
                display: 'flex',
                alignItems: 'center',   // Center the Chip vertically
                padding: '0 8px'
              }}
            >
              <Chip
                label={`${follows} follows`}
                sx={{
                  backgroundColor: 'black',
                  fontSize: 10,
                  height: 19,
                  color: 'white',
                  fontFamily: 'Poppins',
                  borderRadius: '8px',
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                  // overflow: 'hidden',
                  // textOverflow: 'ellipsis',
                }}
              />
            </CardContent>
          </Card>
          <Typography
            variant="caption"
            sx={{ color: "white", fontFamily: "Poppins", marginTop: '12px', fontSize: 13 }}
          >
            {title}
          </Typography>
        </>
      );
};
