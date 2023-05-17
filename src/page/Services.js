import React, { useState } from "react";
import Navbar from "../component/Navbar";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Button
} from "@mui/material";
import { KeyboardArrowRight, Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import imageSrc from "../assets/web.png";
import mobile from "../assets/mobile.png";
import dataE from "../assets/dataE.png";
import debug from "../assets/debug.png";
import Footer from "../component/Footer";
import FixedButton from "../component/FixedButton";

const Services = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const primaryColor = theme.palette.primary.main;
  const darkColor = theme.palette.secondary.main;
  const grayColor = theme.palette.customColor.grayColor;
  const whiteColor = theme.palette.customColor.main;
  const [showButton, setShowButton] = useState(false);
  const serviceSkill = [
    {
      title: "Web Development",
      desc: "As a web developer, I strive to deliver exceptional services that bring your vision to life. With expertise in front-end and back-end development, I create responsive and user-friendly websites that drive results. From crafting clean code to implementing the latest technologies, I am dedicated to providing efficient solutions tailored to your needs. Lets  collaborate and create a compelling online presence for your business",

      icon: imageSrc,
    },
    {
      title: "Mobile App Development",
      desc: "As a mobile app developer, I am committed to delivering top-notch services to bring your app ideas to fruition. With a deep understanding of mobile platforms and user experience principles, I create intuitive and engaging mobile applications. From designing sleek interfaces to implementing robust functionality, I focus on crafting seamless experiences for your users. Lets work together to transform your app concept into a reality and make an impact in the mobile app market",
      icon: mobile,
    },
    {
      title: "Data Entry",
      desc: "As a data entry specialist, I provide accurate and efficient data entry services to streamline your business operations. With meticulous attention to detail, I ensure the utmost accuracy in entering and organizing data. Whether its inputting large volumes of information, maintaining databases, or performing data quality checks, I strive to deliver reliable results in a timely manner. Trust me to handle your data entry needs with confidentiality and professionalism, allowing you to focus on core business tasks.",
      icon: dataE,
    },
    {
      title: "Debugging",
      desc: "As a skilled debugger, I offer expertise in identifying and resolving software issues to ensure smooth and error-free functionality. With a keen eye for detail and a systematic approach, I analyze code, track down bugs, and implement effective solutions. From troubleshooting complex technical problems to optimizing performance, I am dedicated to delivering high-quality debugging services. Count on me to efficiently debug your software, enhance its reliability, and improve the overall user experience.",
      icon: debug,
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  window.addEventListener('scroll', function() {
    var scrollPosition = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPosition >= 5) {
   setShowButton(true)
    }
    else{
    setShowButton(false)}
  });
  const title = "reactjs";
  const body = "reactjs developer with two years of experience ";
  return (
    <Grid item sx={{ background: "#f8f8f8", minHeight: "90vh" }}>
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
            <span style={{ textTransform: "uppercase" }}>services</span>{" "}
            <KeyboardArrowRight />
          </Typography>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: {xs:'25px',md:"40px"},
            textTransform: "capitalize",
            color: darkColor,
            fontWeight: 600, mt:'0.4rem',
          }}
        >
          what i do?
        </Typography>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          width: "82%",
          ml: {xs:'0%',md:"7%"},
          mt: "1rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {serviceSkill?.map((skill) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              sx={{ mx: "0px", "&:hover": { backgroundColor: primaryColor } }}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: {xs:0,md:"16px"},
                  background: "white",
                  maxWidth: "300px",
                  minWidth: "300px",
                  "&:hover": {
                    backgroundColor: primaryColor,
                    color: whiteColor,
                  },
                }}
              >
                <img
                  src={skill?.icon}
                  alt="Card Image"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginBottom: "16px",
                    width: "60px",
                    background: "#f8f8f8",
                    height: "60px",
                    objectFit: "contain",
                    borderRadius: "50%",
                  }}
                />
                <h3 style={{ textAlign: "center", marginBottom: "8px" }}>
                  {skill?.title}
                </h3>
                <Typography varaint='body2' sx={{wordBreak:'break-all',px:'0.5rem'}}>{skill?.desc}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Grid item align="center" sx={{ pt: "8%" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: {xs:'18px',md:"16px"},
            color: primaryColor,
            display: "flex",
            fontWeight: 700,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          price
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: {xs:'22px',md:"40px"},
            textTransform: "capitalize",
            color: darkColor,
            fontWeight: 600,
          }}
        >
          Choose Your Pricing Plan
        </Typography>
        {/* ///////////////////////////// */}
        <Grid
          item
          sx={{
            display: "flex",
            width: "82%",
            ml: {xs:0,md:"7%"},
            mt: "1rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            mb:'10%'
          }}
        >
          {serviceSkill?.map((skill) => {
            return (
              <Grid
                item
                xs={12}
                md={3}
                sx={{ mx: "0px", }}
              >
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "16px",
                    background: "white",
                    maxWidth: "320px",
                    minWidth: "200px",
                    mb:'1rem',
                
                  }}
                >
                  <Typography style={{ fontSize: "26px" }}>$30</Typography>
                  <h3 style={{ textAlign: "center", marginBottom: "8px" }}>
                    Personal
                  </h3>
                  <List>
                    {[1,2,3].map((item)=>(
                         <ListItemButton >
                         <ListItemIcon sx={{color:primaryColor,mr:{xs:'-1rem',md:'-1.2rem'}}}>
                           <Check sx={{fontSize:'28px',fontWeight:700,}} />
                         </ListItemIcon>
                         <ListItemText sx={{color:grayColor,fontWeight:700,}} primaryTypographyProps={{ style: { fontSize: '18px' } }} primary="web development" />
                       </ListItemButton>
                        ))}
                   
                  </List>
                  <Button variant='contained' sx={{color:whiteColor}}>Get Started</Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        {/* ///////////////////////////// */}
      </Grid>
      <Footer />
      {showButton && <FixedButton/>} 
    </Grid>
  );
};

export default Services;
