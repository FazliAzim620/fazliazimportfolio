import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.jpg";
const Testimonial = ({ primaryColor, darkColor }) => {
  const [clients, setClients] = useState([
    {
      name: "Eric ",
      designatoin: "Web Developer",
      message:
        "What truly stood out during our collaboration was Fazli azim  exceptional communication skills. They maintained open lines of dialogue throughout the entire development process, patiently listening to my ideas and providing valuable insights and suggestions.",
      pic:p1},
    {
      name: "Saim ",
      designatoin: "Software Architacture",
      message:
        "I had the pleasure of working with a developer recently and I can confidently say that they exceeded all of my expectations. From the initial consultation to the final product delivery, they were professional, communicative, and incredibly talented.",
      pic:p2},
    {
      name: "Roger Scott ",
      designatoin: "Marketing manager",
      message:"What sets Fazli  apart is their strong work ethic and dedication to delivering top-notch results. They consistently met deadlines and effectively communicated project updates, ensuring transparency and keeping us informed every step of the way." },
  ]);
  return (
    <>
      <Grid
        item
        sx={{
          mt: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            color: primaryColor,
            fontSize: "16px",
            letterSpacing: "1px",
            fontWeight: 500,
          }}
        >
          Testimonial
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textTransform: "capitalize",
            color: darkColor,
            fontSize: "26px",
            letterSpacing: "1px",
            fontWeight: 700,
          }}
        >
          Happy clients
        </Typography>
      </Grid>
      <Box
        sx={{
          ml: "15%",
          mt: "2rem",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: {xs:'column',md:'row'}
        }}
      >
       
    
            {clients?.map((data,i)=>{
            return(   
                 <Box
                 data-aos={i==1?'fade-down':"fade-up"}
                 key={i}
                sx={{
                  mb: "4rem",
                  mt: "2rem",
                  width: {xs:'100%',md:"85%"},
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: {xs:'column',md:'row'}
                }}
              >
                <TestimonialCard data={data}/>
                </Box>
            )})}
         
     
      </Box>
    </>
  );
};

export default Testimonial;
