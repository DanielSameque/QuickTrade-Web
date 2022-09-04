import { createTheme } from '@mui/material'
export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#808080',
      dark: '#212121',
      light: '#ffffff',
      contrastText: '#808080'
    },
    secondary: {
      main: '#808080',
      dark: '#FDBA2A',
      light: '#FDBA2A',
      contrastText: '#212121'
    },
    background: {
      default: '#212121',
      paper: '#3C3C3C',
      tissue: '#696969'
    },
    appbar: {
      main: '#808080'
    }
  }
})
