import { Button } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FixedButton = () => {
    const ScrollUp=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Add smooth scrolling behavior
          });}
  return (
    <div>
      <ArrowUpwardIcon onClick={ScrollUp}   sx={{position:'fixed',color:'blue',right:'1rem',bottom:'2rem',fontSize:'2rem',cursor:'pointer'}}/>
    </div>
  )
}

export default FixedButton
