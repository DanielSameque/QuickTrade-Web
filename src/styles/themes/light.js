import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#606060',
      dark: '#CCCCCC',
      light: '#C1C1C1',
      contrastText: '#606060'
    },
    secondary: {
      main: '#606060',
      dark: '#FDBA2A',
      light: '#FDBA2A',
      contrastText: '#C1C1C1'
    },
    background: {
      default: '#CCCCCC',
      paper: '#C1C1C1',
      tissue: '#696969'
    },
    appbar: {
      main: '#606060'
    }
  }
})
