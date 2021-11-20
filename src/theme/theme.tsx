import { createTheme } from '@material-ui/core/styles';
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
  overrides: {
    MuiDialog: {
      paper: {
        backgroundColor: '#252525',
        color: 'white',
      },
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        MuiInput: {
          padding: '20px',
          input: {
            color: '#fff !important',
          },
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: '0px 10px',
        fontSize: '13px',
        borderBlockColor: 'rgba(255,255,255,0.4)',
      },
      head: {
        fontSize: '16px',
        fontWeight: 600,
        padding: '16px !important',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 0,
      },
    },
  },
});
export default theme;
