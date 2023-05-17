import { AddLocation, Laptop, School } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@emotion/react";
const ExperinceCard = ({data}) => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;
    const darkColor = theme.palette.secondary.main;
    const grayColor = theme.palette.customColor.grayColor;
    const whiteColor = theme.palette.customColor.main;
    const fiverrAccountUrl = "https://www.upwork.com/freelancers/~01d4f0004513c04859";

    const handleCardClick = () => {
      window.open(fiverrAccountUrl, '_blank');
    };
  return (
    <Grid
    onClick={handleCardClick} 
    item
    xs={11}
    md={6}
    sx={{ mx: "0px", cursor:'pointer',}}
>
    <Box
        sx={{
            width: {xs:'100%',md:"95%"},
            borderRadius: "8px",
            padding: "16px",
            background: "white",
            minWidth: "250px",
            minHeight: '200px',
            mb: '1rem',
            position: 'relative',
            pt: '15%',
            pb: '1rem',
            
        }}
    >
        <Box sx={{ width: '70px', height: '70px', borderRadius: '50%', position: 'absolute', top: '-1.5rem', left: '1rem', background: primaryColor, textAlign: 'center', }}>
            {data?.icon==='School'?<School sx={{ fontSize: '40px', color: 'white', mt: '10px' }} />: <Laptop sx={{ fontSize: '40px', color: 'white', mt: '10px' }} />}
           
            <Typography variant='h5' sx={{ mt: '2rem', fontSize: '11px', fontWeight: 'bold', color: primaryColor }}> {data?.year}</Typography>
        </Box>
        <Typography variant='h5' sx={{ fontSize: '24px', fontWeight: 500 ,mt:{xs:'2rem',md:0}}}>{data?.skill}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: '-15px',mt:'0.6rem' }}>
            <AddLocation sx={{ width: '10%', color: primaryColor }} />
            <Typography variant='h4' sx={{ fontSize: '12px', fontWeight: 700,color: primaryColor, width: '90%' }}>{data?.location}</Typography>
        </Box>
        <Typography variant='h5' sx={{ fontSize: '14px', color: grayColor, fontWeight: 400, mt: '1rem', lineHeight: '25px',wordBreak:'break-all' }}>{data?.desc}</Typography>

    </Box>
</Grid>
  )
}

export default ExperinceCard
