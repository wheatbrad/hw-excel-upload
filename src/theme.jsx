import { createTheme, ThemeProvider } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8dc74e',
      // contrastText: '#fff'
    },
    secondary: {
      main: '#333',
      contrastText: '#fff'
    }
  },
  // components: {
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         '& label.Mui-focused': {
  //           color: 'inherit'
  //         }
  //       }
  //     }
  //   },
  //   MuiInputLabel: {
  //     styleOverrides: {
  //       root: {
  //         '&.Mui-focused': {
  //           color: 'inherit'
  //         }
  //       }
  //     }
  //   }
  // }
});

export function HomewerksTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
}