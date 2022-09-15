import { Box, useTheme } from '@mui/material'
import { styled } from '@mui/system'

//const theme = useTheme()

const ThemeHome = styled(Box, {
  '&::-webkit-scrollbar': {
    width: 10
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'blue'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'red',
    borderRadius: 15
  }
})
