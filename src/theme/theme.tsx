import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  //dummy colors
  palette: {
    primary: {
      main: '#000000',
      dark: '#000000',
      light: '#000000',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
      dark: '#000000',
      light: '#000000',
      contrastText: '#000000',
    },
    success: {
      main: '#000000',
      light: '#000000',
      contrastText: '#000000',
    },
    error: {
      main: '#000000',
    },
  },
  typography: {
    h2: { color: '#fff', fontSize: '30px' },
    body1: { color: '#fff', fontSize: '13px' },
    body2: { color: '#fff', fontSize: '12px' },
    h1: { fontSize: '46px' },
    subtitle1: {
      fontSize: '10px',
    },
    subtitle2: {
      fontSize: '16px',
      height: '1.6rem',
    },
  },
});
export default theme;
