import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'
import { KeyboardArrowRight } from '@mui/icons-material'
import { useTheme } from '@emotion/react'
import Footer from '../component/Footer'

const Blog = () => {
    const navigate=useNavigate()
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const primaryColor = theme.palette.primary.main;
    const darkColor = theme.palette.secondary.main;
    const grayColor = theme.palette.customColor.grayColor;
    const whiteColor = theme.palette.customColor.main;
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
  return (
    <>
    <Box sx={{ position: "relative", background: "#f8f8f8",minHeight:'90vh' }}>
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
            <span style={{ textTransform: "uppercase" }}>Blog </span>{" "}
            <KeyboardArrowRight />
          </Typography>
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontSize: {xs:'25px',md:"40px"},mt:'0.4rem', color: darkColor, fontWeight: 600 }}
        >
         Blog
        </Typography>
      </Grid>
      <Box sx={{width:{xs:'90%',md:'50%'},m:'0 auto', display:'flex',minHeight:'300px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',justifyContent: 'center',alignItems: 'center',}}>
      <Typography
          variant="h5"
          align='center'
          sx={{ fontSize:{xs:'25px',md: "40px"},mt:'0.4rem', color: darkColor, fontWeight: 600 }}
        >
         Blogs comming soon
        </Typography>

      </Box>
  
    </Box>
     <Footer/>
     </>
  )
}

export default Blog
