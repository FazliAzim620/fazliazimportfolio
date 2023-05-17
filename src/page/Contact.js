import { Box, Button, Grid, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material';
import { useState } from 'react'
import Navbar from '../component/Navbar';
import { FileCopy, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
const Contact = () => {
    const [showButton, setShowButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [copied, setCopied] = useState();
    const [number, setNumber] = useState('+923489060862');
    const [message, setMessage] = useState({})
    const theme = useTheme();
    const navigate = useNavigate()
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

    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
            })
            .catch((error) => {
                console.error('Error copying text:', error);
            });
        setNumber('copied')
        setCopied(true)
        setTimeout(() => { setNumber('+923489060862'); setCopied(false) }, 200)
    };
    const changeHandler=(e)=>{
        setMessage((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const submitHandler=()=>{
    // setMessage((prev)=>({...prev,body:'Please Email directly on the above Email,"\buner5544@gmail.com"\'}))
    setMessage((prev)=>({...prev,body:"Please Email directly on  Email,\'buner5544@gmail.com'\ , we sorry this is under construction"}))

}
    return (
        <>
            <Box sx={{ position: "relative", background: "#f8f8f8", minHeight: '90vh' }}>
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
                            <span style={{ textTransform: "uppercase" }}>contact </span>{" "}
                            <KeyboardArrowRight />
                        </Typography>
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{ fontSize: {xs:'25px',md:"40px"}, mt: '0.4rem', color: darkColor, fontWeight: 600 }}
                    >
                        Contact us
                    </Typography>

                </Grid>
                <Box sx={{ width: {xs:'100%',md:'90%'}, m: '0 auto', mt: {xs:0,md:'2rem'} }}>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ p: {xs:'1rem',md:'2rem'} }}>
                            <Typography variant='h2' sx={{ fontSize:'30px',display:{xs:'none',md:'inherit'}, fontWeight: 700, }}>Contact us</Typography>
                            <Typography variant='body2' sx={{ fontSize: '13px', fontWeight: 300, color: grayColor, mt: '1rem' }}>
                                We're open for any suggestion or just to have a chat
                            </Typography>
                            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between',flexDirection:{xs:'column',md:'row'} }}>
                                <List sx={{ width: '100%', }}>
                                    <ListItem  >
                                        <ListItemText primaryTypographyProps={{ style: { fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' } }} primary='ADDRESS:' />
                                    </ListItem>
                                    <ListItem  >
                                        <ListItemText primaryTypographyProps={{ style: { fontSize: '13px', fontWeight: 500, color: grayColor } }} primary='I-8 Markaz Islamabad,Pakistan ' />
                                    </ListItem>
                                </List>

                                <List>
                                    <ListItem  >
                                        <ListItemText primaryTypographyProps={{ style: { fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' } }} primary='Email:' />
                                    </ListItem>
                                    <ListItem  >
                                        <ListItemText primaryTypographyProps={{ style: { fontSize: '13px', fontWeight: 500, color: grayColor } }} primary='buner5544@gmail.com' />
                                    </ListItem>

                                </List>
                                <List>
                                    <ListItem  >
                                        <ListItemText primaryTypographyProps={{ style: { fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' } }} primary='Phone:' />

                                    </ListItem>

                                    <ListItem  >
                                        <ListItemText primaryTypographyProps={{ style: { fontSize: '13px', fontWeight: 500, color: grayColor, cursor: 'pointer' } }} onClick={() => handleCopyText(number)} primary={number} />
                                        {copied && <FileCopy />}
                                    </ListItem>
                                </List>

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <TextField label="Name" required variant="standard" name='name' onChange={changeHandler} sx={{mt:'0.7rem'}}/>
                                <TextField label="Email" required variant="standard" name='email' onChange={changeHandler} sx={{mt:'0.7rem'}}/>
                                <TextField label="Subject" variant="standard" name='subject' onChange={changeHandler} sx={{mt:'0.7rem'}}/>
                                <TextareaAutosize name='body' value={message?.body} onChange={changeHandler} style={{ resize: 'none', height: '200px', marginTop: '1rem', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', outline: 'none', padding: '15px 5px', fontSize: '12px' }} sx={{ mt: '1rem', }} placeholder='Create a message here...' variant="standard" />
                                <Button variant='contained' onClick={submitHandler} sx={{
                                    mt: '1rem', color: whiteColor, boxShadow: 'none', '&:hover': {
                                        color: whiteColor, boxShadow: 'none',
                                    }
                                }}>send message</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ background: "#f8f8f8",boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1684238134220!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Contact
