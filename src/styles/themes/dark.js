import { createTheme } from '@mui/material'
export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#808080',
      dark: '#696969',
      light: '#F0F0F0',
      contrastText: '#F0F0F0'
    },
    secondary: {
      main: '#808080',
      dark: '#FDBA2A',
      light: '#FDBA2A',
      contrastText: '#212121'
    },
    background: {
      default: '#212121',
      paper: '#2C2C2C',
      tissue: '#696969'
    },
    appbar: {
      main: '#808080'
    }
  },
  typography: {
    allVariants: {
      color: '#F0F0F0'
    }
  }
})
