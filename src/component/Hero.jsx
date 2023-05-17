import {
  Grid,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "@emotion/react";
import { East } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import Footer from "./Footer";
const Hero = () => {
    const navigate=useNavigate()
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const darkColor = theme.palette.secondary.main;
  const whiteColor = theme.palette.customColor.main;
  const year = new Date().getFullYear();
  const [indicatorBgColor, setIndicatorBgColor] = useState(whiteColor);
  const [indicatorColor, setIndicatorColor] = useState(darkColor);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndicatorBgColor((prevColor) =>
        prevColor === whiteColor ? darkColor : whiteColor
      );
      setIndicatorColor((prevColor) =>
        prevColor === darkColor ? whiteColor : darkColor
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {
    const email='buner5544@gmail.com';
    const subject='I want to Hire you'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
    <Box sx={{ backgroundColor: primaryColor, position: "relative" }}>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
   
      <style jsx="true">{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
      <Grid container>
        {/*  Left side  */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: {xs:"2rem 0 0 2rem",md:"4rem 0 0 1.5rem"},
            backgroundColor: whiteColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: {xs:'700%',md:"85vh"},
       
          }}
        >
          <Grid item >
            <Typography
              sx={{
                color: primaryColor,
                fontWeight: 700,
                fontSize: {xs:'14px',md:"1rem"},
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Frontend ReactJs Developer
            </Typography>
            <Typography
              sx={{
                color: darkColor,
                fontWeight: 700,
                fontSize: {xs:"1.5rem",md:"5rem"},
                lineHeight: 1.2,
                mt:{xs:'0.5rem',md:'0'}
              }}
            >
              Hello I'm <br />
              <span style={{ color: primaryColor }}>Fazli azim</span>
            </Typography>
            <Box sx={{ mt: "1rem" }}>
              <Button
                variant="contained"
                sx={{ color: whiteColor, fontSize: {xs:'10px',md:"1rem"}, py: {xs:"5px",md:"10px"} ,width:{xs:'85%',md:'40%'},}}
              >
                More about me <East sx={{ pl: {xs:'0.2rem',md:"0.5rem"} }} />
              </Button>
              <Button
              onClick={handleClick}
                variant="contained"
                sx={{
                  color: indicatorColor,
                  backgroundColor: indicatorBgColor,
                  fontSize: {xs:'10px',md:"1rem"},
                  py: {xs:'3px',md:"6px"},
                  mt:{xs:'1rem',md:'0'},
                  width:{xs:'85%',md:'40%'},
                  mb:{xs:'2rem',md:'0'},
                  ml: "0.2rem",
                  "&:hover": { color: whiteColor, backgroundColor: darkColor },
                }}
              >
                <Typography > Hire me</Typography>
                <span
                  style={{
                    display: "inline-block",
                    animation: "arrowAnimation 2s infinite",
                    animationDirection: "alternate",
                  }}
                >
                  <East sx={{ pl: "0.5rem", pt: "3px" }} />
                </span>
              </Button>
              <style jsx="true">{`
                @keyframes arrowAnimation {
                  0% {
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(10px);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
              `}</style>
            </Box>
          </Grid>
          <Grid item sx={{display:{xs:'none',md:'inherit'}}}>
            <Typography variant="caption" sx={{ color: "rgba(0, 0, 0, 0.4)" }}>
              Copyright {String.fromCharCode(169)} {year} All rights reserved |
              Created by <u style={{ cursor: "pointer",color:'#d5c455' }}>Fazli azim</u>
            </Typography>
          </Grid>
        </Grid>
        {/*  Right side  */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: primaryColor,
            pt: "0rem",
            overflowY: "hidden",
            height: {xs:'50vh',md:"85vh"},
          }}
        >
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={img1} alt="image" />
            </div>
            <div>
              <img src={img2} alt="image" />
            </div>
          </Carousel>
        </Grid>
      </Grid>
   
    </Box>
       <Grid item sx={{mt:'3rem',ml:'1rem',display:{md:'none'}}}>
       <Footer/>
       </Grid>
       </>
  );
};

export default Hero;
