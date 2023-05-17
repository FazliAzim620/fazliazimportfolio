import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import 'aos/dist/aos.css'
import AOS  from "aos";
import Aos  from "aos";
const Skill = ({ primaryColor, darkColor }) => {
const [skillsArr,setSkillsArr]=useState([
{
name:'Java Script',
per:80,
},
{
name:'ReactJs',
per:90,
},
{
name:'NextJs',
per:70,
},
{
name:'Material UI',
per:75,
},
{
name:'BootStrap',
per:85,
},
{
name:'CSS',
per:90,
},
{
name:'HTML',
per:95,
},
{
name:'NodeJS',
per:65,
},
{
name:'ExpressJS',
per:65,
},
])
useEffect(()=>{

Aos.init({duration:2000})
return () => {
    AOS.refresh(); // Stop AOS animations when the component is unmounted
  };
},[])
  return (
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
      data-aos="fade-up"
        variant="body2"
        sx={{
          textTransform: "uppercase",
          color: primaryColor,
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        skills
      </Typography>
      <Typography
       data-aos="fade-up"
        variant="body2"
        sx={{
          textTransform: "uppercase",
          color: darkColor,
          fontSize: "32px",
          fontWeight: 700,
        }}
      >
        my skills
      </Typography>
      <Grid
        item
        xs={11}
        sx={{
          mt: {xs:'2rem',md:"5rem"},
          mb:'2rem',
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {
        skillsArr?.map((skill,i)=>(
            <Box sx={{ width: {xs:'100%',md:"30%"},  }} key={i}  data-aos="fade-up">
            <Box sx={{ display: "flex" , mt:{xs:'1rem',md:'0'}}}>
              <Typography variant="body2" sx={{ width: "80%",pt:'0.5rem' }}>
                {skill?.name}
              </Typography>
              <Typography variant="body2" sx={{ width: "20%" }}>
               {skill?.per}%
              </Typography>
            </Box>
            <ProgressBar
              completed=  {skill?.per}
              width={"100%"}
              height="10px"
              bgColor=  {primaryColor}
              borderRadius="0"
              isLabelVisible={false}
            />
          </Box>
            ))
        }
    
      </Grid>
    </Grid>
  );
};

export default Skill;
