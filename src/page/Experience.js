import { Box, Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { AddLocation, KeyboardArrowRight, Laptop, School } from "@mui/icons-material/";
import FixedButton from '../component/FixedButton';
import Footer from '../component/Footer';
import ExperinceCard from '../component/ExperinceCard';
import {  CardContent, CardMedia,  } from '@mui/material';


const Experience = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const primaryColor = theme.palette.primary.main;
    const darkColor = theme.palette.secondary.main;
    const grayColor = theme.palette.customColor.grayColor;
    const whiteColor = theme.palette.customColor.main;
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    window.addEventListener('scroll', function () {
        var scrollPosition = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPosition >= 5) {
            setShowButton(true)
        }
        else {
            setShowButton(false)
        }
    });
    const details=[
    {
        year:'2018-2022',
        skill:'BS Software Engineering',
        location:"KUST (Kohat) KP,Pakistan ",
        icon:'School',
        desc:'I successfully completed my Bachelor\'s degree in Software Engineering from Kohat University of Science and Technology, Kohat. From 2018 to 2022, I gained a comprehensive understanding of various software development concepts and technologies. Throughout my academic journey, I acquired strong problem-solving skills, honed my programming abilities, and learned to develop innovative software solutions. With my solid educational foundation, I am equipped to contribute effectively to the field of software engineering and undertake challenging projects with confidence.'
    },
    {
        year:'2022-Present',
        skill:'ReactJS Developer',
        location:"PkTeam ,Rawalpindi,Pakistan ",
        icon:'Laptop',
        desc:'I have been working as a React.js developer at PKTeam since 2022. With my expertise in React.js, I contribute to the team by developing efficient and dynamic web applications. I am passionate about creating intuitive user interfaces and delivering high-quality code to drive exceptional user experiences.'
    },
    {
        year:'2022-Present',
        skill:'Web Developer',
        location:"Upwork & Fiverr",
        icon:'Laptop',
        desc:'Since 2022, I have been providing my web development services as a freelancer on platforms like Fiverr and Upwork. With my expertise in web development, I have successfully delivered projects to clients worldwide, ensuring their satisfaction with professional and high-quality results. I am dedicated to delivering tailored web solutions that meet the unique requirements of each client'
    },
    ]
    return (
        <Box sx={{ position: "relative", background: "#f8f8f8", minHeight: '90vh' }}>
            <Navbar
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <Grid item align="center" sx={{ pt: "8%", }}>
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
                        <span style={{ textTransform: "uppercase" }}>Home </span>
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
                        <span style={{ textTransform: "uppercase" }}>experienced </span>
                        <KeyboardArrowRight />
                    </Typography>
                </Typography>

                <Typography
                    variant="h5"
                    sx={{ fontSize: "40px", mt: '0.4rem', color: darkColor, fontWeight: 600 }}
                >
                    Experiences
                </Typography>
            </Grid>
            <Grid item xs={8} sx={{mx:{xs:0,md:'7%'}, mt: "5rem",mb:'10%',wordBreak:'break-all'}}>
            <Grid container spacing={2}> 
            {details?.map((data)=>(
                  <ExperinceCard data={data}/>
                ))}
      
             
      
    </Grid>
    </Grid>
            {showButton && <FixedButton />}
            <Footer />
        </Box>
    )
}

export default Experience
