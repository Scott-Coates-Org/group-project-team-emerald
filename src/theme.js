import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    light: {
      fontWeight: 300,
    },
    bold: {
      fontWeight: 500,
    },
    bolder: {
      fontWeight: 700,
    },
  },
});

export default theme;
