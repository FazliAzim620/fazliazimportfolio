import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d5c455', // Define your primary color here
    },
    secondary: {
      main: '#222222', // Define your secondary color here
    },
    // You can define additional colors as needed
    // For example:
    customColor: {
      main: '#ffff',
      dark: '#f57c00',
      light: '#ffb74d',
      grayColor:'rgba(0, 0, 0, 0.4)'

    },
  },
});

export default theme;
