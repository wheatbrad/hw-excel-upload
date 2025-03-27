import { createTheme, ThemeProvider } from '@mui/material';

const colorMain = '#8dc74e';

const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'Arial', 'sans-serif']
  },
  palette: {
    primary: {
      main: colorMain
      // contrastText: '#fff'
    },
    secondary: {
      main: '#333',
      contrastText: '#fff'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'inherit'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'inherit'
          }
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textAlign: 'center',
          color: colorMain
        }
      }
    }
  }
});

export function HomewerksTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
}