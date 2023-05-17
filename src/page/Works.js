import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Box, Typography, Grid, Button } from "@mui/material";
import Footer from "../component/Footer";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import tour from "../assets/tour.png";
import ultra from "../assets/ultra.png";
import realestate from "../assets/realestate.png";
import fashion from "../assets/fashion.png";
import portfolio from "../assets/portfolio.png";
import gem from "../assets/gem.jpg";
import FixedButton from "../component/FixedButton";
const Works = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [id, setId] = useState();
  const primaryColor = theme.palette.primary.main;
  const darkColor = theme.palette.secondary.main;
  const grayColor = theme.palette.customColor.grayColor;
  const whiteColor = theme.palette.customColor.main;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  window.addEventListener("scroll", function () {
    var scrollPosition =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    if (scrollPosition >= 5) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
  const cardsData=[
{
id:1,
name:'Tourism Guide',
url:'https://sbapp.aladdinapps.com',
image:tour,
},
{
id:2,
name:'Ultrasound Management ',
url:'https://cmanage.tangiblethemes.com',
image:ultra},
{
id:3,
name:'RealEstate',
url:'https://cmsbuilder.netlify.app/',
image:realestate
},
{
id:4,
name:'GemCert Stone Certificate',
url:'https://certapp.comocrm.com/',
image:gem
},
{
id:5,
name:'Fashion Design',
url:'https://fazlishopping.netlify.app/',
image:fashion
},
{
id:6,
name:'Portfolio',
url:'https://fazliazimportfolio.netlify.app/',
image:portfolio
},

]
  return (
    <>
      <Box
        sx={{ position: "relative", background: "#f8f8f8", minHeight: "90vh" }}
      >
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
              }}
            >
              <span style={{ textTransform: "uppercase" }}>Work </span>
              <KeyboardArrowRight />
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: {xs:'20px',md:"40px"},
              mt: "0.4rem",
              color: darkColor,
              fontWeight: 600,
            }}
          >
            Portfolio
          </Typography>
          <Grid item xs={8} sx={{ mx: "7%", mt: "1rem", mb: "10%" }}>
  <Grid item sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:2}}>
    {cardsData?.map((data, i) => (
      <Grid
        item
        key={data?.id}
        onMouseOver={() => {
          setId(data?.id);
        }}
        onMouseOut={() => setId(null)}
        xs={12}
        md={4}
        sx={{
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          cursor: 'pointer',
          position: 'relative',
          left: 0,
          top: 0,
          background: 'transparent',
          gap:'12rem',
          width:{xs:'100%',md:'32%'}
        }}
      >
        {data?.id === id && (
          <Box item xs={12} md={4} sx={{ backgroundColor: 'rgba(215,197,87,0.8)', position: 'absolute', top: '0rem', left: '0rem', width: '100%',borderRadius:'5px', height: '100%' }}>
            <Box sx={{ mt: '25%' }}>
              <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                {data?.name}
              </Typography>
              <Link to={data?.url} target='_blank' >
              <Button variant="contained" sx={{ color: whiteColor, boxShadow: 'none', backgroundColor: 'black', textTransform: 'capitalize', letterSpacing: '1.5px','&:hover':{
            boxShadow:'none',bgcolor:grayColor} }}>
                Visit
              </Button>
              </Link>
            </Box>
          </Box>
        )}
        <Box component="img" src={data?.image} sx={{ width: '100%', height: '200px', objectFit: 'contain', m: 0, p: 0 }} />
      </Grid>
    ))}
  </Grid>
</Grid>

        </Grid>
        {showButton && <FixedButton/>} 
      </Box>
      <Footer />
    </>
  );
};

export default Works;
