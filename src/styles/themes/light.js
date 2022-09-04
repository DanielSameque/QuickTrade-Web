import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#3C3C3C',
      dark: '#808080',
      light: '#f5f5f5',
      contrastText: '#3C3C3C'
    },
    secondary: {
      main: '#3C3C3C',
      dark: '#FDBA2A',
      light: '#FDBA2A',
      contrastText: '#c0c0c0'
    },
    background: {
      default: '#c0c0c0',
      paper: '#f5f5f5'
    },
    AppBar: {
      main: '#c0c0c0'
    }
  }
})
