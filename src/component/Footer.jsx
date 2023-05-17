import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <Box sx={{display:'flex',justifyContent: 'center'}}>
       <Typography align='center' variant="caption" sx={{ color: "rgba(0, 0, 0, 0.4)" }}>
              Copyright {String.fromCharCode(169)} {year} All rights reserved |
              Created by <Link to='/' style={{ cursor: "pointer",color:'#d5c455' }}>Fazli azim</Link>
            </Typography>
    </Box>
  )
}

export default Footer
