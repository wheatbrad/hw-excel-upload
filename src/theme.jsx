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
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 9999
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          paddingTop: '8px'
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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'inherit'
          }
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