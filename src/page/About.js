import { Grid, Box, Typography, Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material/";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import cv from '../assets/cv.pdf'
import Skill from "../component/Skill";
import 'aos/dist/aos.css'
import Aos from "aos";
import Testimonial from "../component/Testimonial";
import Footer from "../component/Footer";
import FixedButton from "../component/FixedButton";
const About = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const primaryColor = theme.palette.primary.main;
  const darkColor = theme.palette.secondary.main;
  const grayColor = theme.palette.customColor.grayColor;
  const whiteColor = theme.palette.customColor.main;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(1000);
  const [cards, setCards] = useState([
    {
name:'Happy Client',
number:300,
},
    {
name:'Project Done',
number:200,
},
    {
name:'Working Hours',
number:360,
},
    {
name:'Cup of Coffee',
number:300,
},


]);
  const Counter = ({ number }) => {
    return <CountUp end={number} duration={2.5} />;
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(()=>{

    Aos.init({duration:2000})
    },[])
    window.addEventListener('scroll', function() {
        var scrollPosition = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPosition >= 5) {
       setShowButton(true)
        }
        else{
        setShowButton(false)}
      });
  return (
    <Box sx={{ position: "relative", background: "#f8f8f8" }}>
      <Navbar
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    
      <Grid item align="center" sx={{ pt: "8%" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "16px",
            color: grayColor,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": {
                color: primaryColor,
                fontWeight: 700,
              },
            }}
          >
            <span style={{ textTransform: "uppercase" }}>Home </span>{" "}
            <KeyboardArrowRight />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": {
                color: primaryColor,
                fontWeight: 700,
              },
            }}
          >
            <span style={{ textTransform: "uppercase" }}>about us </span>{" "}
            <KeyboardArrowRight />
          </Typography>
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontSize: "40px",mt:'0.4rem', color: darkColor, fontWeight: 600 }}
        >
          About Us
        </Typography>
      </Grid>
      <Grid container sx={{ mt: "8%", pl: "5%", pb: "1rem",mb:'3rem' }}>
        
        <Grid
          container
          xs={12}
          md={5.8}
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between", mr: "10px" }}
        >
            {cards?.map((item,i)=>{
            return(
                <Grid
                data-aos="fade-up"
                key={i}
                item
                xs={11}
                md={5.9}
                sx={{
                  p: "60px 30px",
                  backgroundColor: whiteColor,
                  borderRadius: "5px",
                  ml:{xs:'7%',md:0},
                  mt:'.5rem',
                  minHeight: "100px",
                  boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    color: primaryColor,
                    fontSize: "40px",
                    fontWeight: 700,
                    lineHeight: 1,
                    pt: "2rem",
                  }}
                >
                  <Counter number={item?.number} /> +
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontSize: "22px", fontWeight: 500 }}
                >
                  {item?.name}
                </Typography>
              </Grid>
            )})}
        </Grid>
        <Grid
        data-aos='fade-up'
          item
          xs={12}
          md={5.8}
          sx={{ml: "10px",mt:{xs:'1rem',md:'0'} }}
        >
        <Typography variant='body2' sx={{textTransform:'uppercase',color:primaryColor,fontSize:'13px',fontWeight:700,letterSpacing:'2px',mt:'-5px'}}>about me</Typography>
       <Typography  variant='h6' sx={{fontSize:'24px',}}>Hi, I'm Fazli Azim, a passionate web developer with experience in React.js, Next.js, Node.js, and Express.js. I specialize in building modern, interactive, and scalable web applications.</Typography>
      <Box  sx={{width:'100%',display:'flex',justifyContent: 'space-between',flexDirection:{xs:'column',md:'row'},alignItems: 'center',mt:'2rem'}}>
        <Box sx={{width:{xs:"100%",md:'50%'},display:'flex',justifyContent:'space-between'}}>       
          <Typography variant='h4' sx={{width:'50%',fontSize:'16px',fontWeight:'bold'}}>Name</Typography>
          <Typography variant='h4' sx={{width:'50%',fontSize:'16px',fontWeight:700,color:primaryColor}}>Fazliazim</Typography>
        </Box>
        <Box sx={{width:{xs:"100%",md:'50%'},display:'flex',justifyContent:'space-between'}}>       
          <Typography variant='h4' sx={{width:'50%',fontSize:'16px',fontWeight:'bold'}}>Phone</Typography>
          <Typography variant='h4' sx={{width:'50%',fontSize:'16px',fontWeight:700,color:primaryColor}}>+92-3489060862</Typography>
        </Box>
      </Box>
      <Box sx={{width:'100%',display:'flex',justifyContent: 'space-between',flexDirection:{xs:'column',md:'row'},alignItems: 'center',mt:'1rem'}}>
        <Box sx={{width:{xs:"100%",md:'50%'},display:'flex',justifyContent:'space-between',alignItems: 'center',wordWrap: 'break-word'}}>       
          <Typography variant='h4' sx={{width:'50%',fontSize:'16px',fontWeight:'bold'}}>Date of birth</Typography>
          <Typography variant='body2' sx={{width:'50%', fontSize:'16px',fontWeight:700,color:primaryColor}}>09,03,2000</Typography>
        </Box>
        <Box sx={{width:{xs:"100%",md:'50%'},display:'flex',justifyContent:'space-between',}}>       
          <Typography variant='h4' sx={{width:{xs:'30%',md:'50%'},fontSize:'16px',fontWeight:'bold'}}>Email:</Typography>
          <Typography variant='h4' sx={{width:{xs:'50%',md:'50%'},overflow:'hidden', fontSize:'16px',fontWeight:700,color:primaryColor,wordBreak:'break-all'}}>buner5544@gmail.com</Typography>
        </Box>
      </Box>
      <Box sx={{width:'100%',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent: 'space-between',alignItems: 'center',mt:'1rem'}}>
        <Box sx={{width:{xs:"100%",md:'50%'},display:'flex',justifyContent:'space-between',alignItems: 'center',wordWrap: 'break-word'}}>       
          <Typography variant='h4' sx={{width:'50%',fontSize:'16px',fontWeight:'bold'}}>Address:</Typography>
          <Typography variant='body2' sx={{width:'50%', fontSize:'16px',fontWeight:700,color:primaryColor}}>I-8 Islamabad</Typography>
        </Box>
      </Box>
      <a href={cv} download>
      <Button variant='contained' sx={{mt:'2rem',p:'8px 15px',color:whiteColor}}>Download CV</Button>
      </a>
        </Grid>
             <Skill darkColor={darkColor} primaryColor={primaryColor}/>  
             
             
      </Grid>
      <Testimonial  darkColor={darkColor} primaryColor={primaryColor}/>
     <Footer/>
    {showButton && <FixedButton/>} 
    </Box>
  );
};

export default About;
