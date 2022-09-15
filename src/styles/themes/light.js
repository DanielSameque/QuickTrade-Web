import { createTheme } from '@mui/material'
export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#808080',
      dark: '#606060',
      light: '#606060',
      contrastText: '#606060'
    },
    secondary: {
      main: '#808080',
      dark: '#FDBA2A',
      light: '#FDBA2A',
      contrastText: '#C1C1C1'
    },
    background: {
      default: '#DADADA',
      paper: '#C1C1C1',
      tissue: '#696969'
    },
    appbar: {
      main: '#808080'
    }
  }
})
