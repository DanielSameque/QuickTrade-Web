import { useDrawerContext } from '../contexts'

import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'

import MenuDark from '../assets/icons/MenuDark.svg'




export const LayoutBaseDePagina = ({ children, titulo }) => {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='80%' display='flex' flexDirection='column' gap={1} sx={{ overflow: 'hidden' }}>
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>
        {smDown && (<IconButton onClick={toggleDrawerOpen}>
          <img src={MenuDark} alt='toggle Menu' />
        </IconButton>)}

        <Typography variant='h5'>
          {titulo}
        </Typography>
      </Box>

      <Box>
        Barra de Ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>
  )
}

// export default LayoutBaseDePagina
