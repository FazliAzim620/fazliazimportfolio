import { Container, Grid, Typography ,Box,List,ListItem,ListItemText} from "@mui/material";
import { Menu,Close } from "@mui/icons-material";
import { useLocation, useNavigate ,} from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const Navbar = ({toggleMenu,menuOpen,setMenuOpen}) => {

    const theme=useTheme()
    const {pathname}=useLocation()
    const whiteColor = theme.palette.customColor.main;
    const primaryColor = theme.palette.primary.main;
    const navigate=useNavigate()
    const listItemArr = [
        {
          id: 1,
          name: "Home",
          url:'/'
        },
        {
          id: 2,
          name: "about",
          url:'/about'
        },
        {
          id: 3,
          name: "services",
          url:'/services'
        },
        {
          id: 4,
          name: "experiences",
          url:'/experiences'
        },
        {
          id: 5,
          name: "work",
          url:'/work'
        },
        {
          id: 6,
          name: "blog",
          url:'/blog'
        },
        {
          id: 7,
          name: "contact",
          url:'/contact'
        },
      ];
      const handleItemClick = (index, url) => {
        navigate(url);
        setMenuOpen(false);
       
      };
  return (
<>
      <Grid item sx={{display:'flex',justifyContent: 'space-between',alignItems: 'center',p:'.5rem 1rem',background:'white',position:'relative'}}>
      <Box
        sx={{
          width: "200px",
          display: menuOpen ? "block" : "none",
          background: whiteColor,
          minHeight: "200px",
          position: "absolute",
          right: "7%",
          zIndex: 999,
          borderRadius: "5px",
          top: "5rem",
          animationName: 'fadeIn',
          animationDuration: " 1s",
         transform:'all 3s',
        }}
      >
        <List>
          {listItemArr?.map((item,index) => (
            <ListItem
            onClick={() => handleItemClick(index, item?.url)}
              key={item?.id}
              sx={{
                cursor: "pointer",
                color:pathname===item?.url?primaryColor:'inherit',
                "&:hover": {
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                },
              }}
            >
              <ListItemText primary={item?.name} />
            </ListItem>
          ))}
        </List>
      </Box>
       <Grid item xs={12} md={6} sx={{ml:"3.5%"}} >
          <Typography variant='h5' sx={{fontSize:'1.5rem',fontWeight:'bold',cursor:'pointer'}} onClick={()=>navigate('/')}>Fazli azim</Typography>
        </Grid>
        <Grid item xs={12} md={6} align="right" sx={{mr:'5%'}}>
         {menuOpen?<Close  onClick={toggleMenu} sx={{cursor:'pointer',width:'2.5rem',height:'3rem',}}/>:<Menu  onClick={toggleMenu} sx={{cursor:'pointer',width:'2.5rem',height:'3rem',}}/>} 
       </Grid>
      </Grid>

  </>
  );
};

export default Navbar;
