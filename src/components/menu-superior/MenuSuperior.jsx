import { useState } from 'react'

import { Box, AppBar, IconButton, Divider, Switch, Toolbar, Tooltip, Avatar, Typography, Menu, MenuItem, useTheme } from '@mui/material'

import MenuDark from '../../assets/icons/MenuDark.svg'
import HelpDesk from '../../assets/icons/HelpDesk.svg'
import Alert from '../../assets/icons/Alert.svg'
import Chat from '../../assets/icons/Chat.svg'
import UsuarioPerfil from '../../assets/UsuarioPerfil.webp'
import { useAppThemeContext, useDrawerContext } from '../../contexts'

export const MenuSuperior = () => {
  const theme = useTheme()

  const { toggleDrawerOpen } = useDrawerContext()
  const { toggleTheme } = useAppThemeContext()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='sticky' variant='' >
      <Toolbar variant='regular' backgroundColor={theme.palette.background.paper}
        component={Box}
        height={theme.spacing(8)}
      >
        <IconButton onClick={toggleDrawerOpen} edge='start'>
          <img src={MenuDark} alt='toggle Menu' />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton sx={{ ':hover': { boxShadow: 8 } }}>
          <img src={Chat} alt='Chat' height={22} />
        </IconButton>
        <IconButton>
          <img src={HelpDesk} alt='HelpDesk' height={22} />
        </IconButton>
        <IconButton>
          <img src={Alert} alt='Alert' height={22} />
        </IconButton>
        <Switch onClick={toggleTheme} defaultChecked />
        <Divider orientation='vertical' variant='middle' flexItem />
        <IconButton onClick={handleClick}>
          <Tooltip title='Perfil' >
            <Avatar alt='perfil' src={UsuarioPerfil} />
          </Tooltip>
        </IconButton>
        <Box display='flex' flexDirection='column'>
          <Typography variant='subtitle2' component='p'>
            Daniel Sameque
          </Typography>
          <Typography variant='body2' component='p' >
            Faturista
          </Typography>
        </Box>
        <Menu
          id='perfil-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'perfil-button', }}>
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar >
  )
}