import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext
} from 'react'
import { ThemeProvider } from '@mui/material'

import { Box } from '@mui/system'
import { DarkTheme, LightTheme } from '../styles/themes'

const ThemeContext = createContext()

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark')

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => (oldThemeName === 'dark' ? 'ligh' : 'dark'))
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'dark') return DarkTheme

    return LightTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
