import { useDrawerContext, useTabContext } from '../../contexts'
import { Avatar, Drawer, useTheme, Divider, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, Typography, Collapse, Tooltip, Zoom } from '@mui/material'
import { Box } from '@mui/system'

import QuicktradeLogo_svg from '../../assets/imgsys/QuickTrade.svg'

import DashBoard_svg from '../../assets/icons/DashBoard.svg'

import Cadastros_svg from '../../assets/icons/Cadastros.svg'
import Financas_svg from '../../assets/icons/Financas.svg'
import PessoasBens_svg from '../../assets/icons/PessoasBens.svg'

import Lancamentos_svg from '../../assets/icons/Lancamentos.svg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Financas from './Financas'
import PessoasBens from './PessoasBens'

export const MenuLateral = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
  const { AddTab } = useTabContext()

  const navigate = useNavigate();

  const [openListCadatros, setOpenListCadatros] = useState(false)
  const [openListFinancas, setOpenListFinancas] = useState(false)
  const [openListPessoasBens, setOpenListPessoasBens] = useState(false)
  const [openListLancamentos, setOpenListLancamentos] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index, collapse, list) => {
    setSelectedIndex(index);
    switch (list) {
      case ('dashboard'): return (navigate('/'))
      case ('cadastros'):
        if (openListCadatros === false) { return (setOpenListCadatros(!openListCadatros)) }
        else { return (setOpenListCadatros(false), setOpenListFinancas(false), setOpenListPessoasBens(false)) }
      case 'financas':
        return setOpenListFinancas(!openListFinancas)
      case 'pessoasbens':
        return (setOpenListPessoasBens(!openListPessoasBens))
      case 'contas':
        return (navigate('/cadastros/financas/contas'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Contas'))
      case 'centrodecusto':
        return (navigate('/cadastros/financas/centrodecusto'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Centro de Custo'))
      case 'historicos':
        return (navigate('/cadastros/financas/historicos'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Históricos'))
      case 'segmentos':
        return (navigate('/cadastros/financas/segmentos'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Segmentos'))
      case 'condicaoPg':
        return (navigate('/cadastros/financas/condicaopg'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Condição de Pg.'))
      case 'contratos':
        return (navigate('/cadastros/financas/contratos'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Contratos'))
      case 'cartoes':
        return (navigate('/cadastros/financas/cartoes'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Cartões'))
      case 'caixas':
        return (navigate('/cadastros/financas/caixas'), isDrawerOpen && smDown ? toggleDrawerOpen() : null, AddTab(index, 'Caixas'))
      case ('lancamentos'):
        if (openListLancamentos === false) { return (setOpenListLancamentos(!openListLancamentos)) }
        else { return (setOpenListLancamentos(false), setOpenListFinancas(false), setOpenListPessoasBens(false)) }
      default:
        return false
    }
  };

  // const onClickList = () => {
  //   return (isDrawerOpen && !smDown ? (toggleDrawerOpen()) : null)
  // }

  // useEffect(() => {
  //   setOpenListCadatros(false); setOpenListFinancas(false); setOpenListPessoasBens(false)
  // }, [isDrawerOpen]);

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Collapse orientation="horizontal" in={isDrawerOpen && !smDown ? false : true} collapsedSize={64}>
          <Box
            width={theme.spacing(30)}
            height='100%'
            display='flex' flexDirection='column' sx={{ overflowX: 'hidden' }} >
            <Box width='100%' height={theme.spacing(7.9)} display='flex' alignItems='center' justifyContent='left' paddingX={1.5} gap={2}>
              <Avatar
                sx={{ height: theme.spacing(5), width: theme.spacing(5) }}
                alt='Quicktrade'
                src={QuicktradeLogo_svg}
                variant='square'
              />
              <Typography variant='h5' component='h1'>
                QuickTrade
              </Typography>
            </Box>

            <Divider />

            <Box flex={1} >
              <List component='nav' onClick={null/*onClickList*/} sx={{ padding: 0 }}>

                <ListItemButton selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0, false, 'dashboard')}>
                  <Tooltip title='DashBoard' placement='right' TransitionComponent={Zoom} arrow>
                    <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                      <img src={DashBoard_svg} alt='DashBoard' />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary='DashBoard' />
                </ListItemButton>

                <Divider />

                <ListItemButton selected={selectedIndex === 1.00}
                  sx={{ bgcolor: openListCadatros ? theme.palette.primary.dark : null }}
                  onClick={(event) => handleListItemClick(event, 1.00, true, 'cadastros')}>
                  <Tooltip title='Cadastros' placement='right' TransitionComponent={Zoom} arrow>
                    <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                      <img src={Cadastros_svg} alt='Cadastros' />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary='Cadastros' />
                  {openListCadatros ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </ListItemButton>

                <Collapse in={openListCadatros} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding dense
                    sx={{ bgcolor: openListFinancas ? theme.palette.primary.dark : null }}
                  >
                    <ListItemButton selected={selectedIndex === 1.10}
                      onClick={(event) => handleListItemClick(event, 1.10, true, 'financas')}>
                      <Tooltip title='Finanças' placement='right' TransitionComponent={Zoom} arrow>
                        <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                          <img src={Financas_svg} alt='Finanças' />
                        </ListItemIcon>
                      </Tooltip>
                      <ListItemText primary='Finanças' />
                      {openListFinancas ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </ListItemButton>
                  </List>
                </Collapse>

                <Financas openListFinancas={openListFinancas} selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} />

                <Divider />

                <Collapse in={openListCadatros} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding dense
                    sx={{ bgcolor: openListPessoasBens ? theme.palette.primary.dark : null }}
                  >
                    <ListItemButton selected={selectedIndex === 1.20}
                      onClick={(event) => handleListItemClick(event, 1.20, true, 'pessoasbens')}>
                      <Tooltip title='Pessoas e Bens' placement='right' TransitionComponent={Zoom} arrow>
                        <ListItemIcon>
                          <img src={PessoasBens_svg} alt='Pessoas e Bens' />
                        </ListItemIcon>
                      </Tooltip>
                      <ListItemText primary='Pessoas e Bens' />
                      {openListPessoasBens ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </ListItemButton>
                  </List>
                </Collapse>

                <PessoasBens openListPessoasBens={openListPessoasBens} selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} />

                <Divider />

                <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2, true, 'lancamentos')}
                  sx={{ bgcolor: openListLancamentos ? theme.palette.primary.dark : null }}
                >
                  <Tooltip title='Lançamentos' placement='right' TransitionComponent={Zoom} arrow>
                    <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                      <img src={Lancamentos_svg} alt='Lançamentos' />
                    </ListItemIcon >
                  </Tooltip>
                  <ListItemText primary='Lançamentos' />
                  {openListLancamentos ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </ListItemButton>

                <Divider />

              </List>
            </Box>
          </Box >
        </Collapse>
      </Drawer >

      <Box
        height='100vh'
        marginLeft={smDown ? 0 : theme.spacing(isDrawerOpen && !smDown ? 8 : 30)}
        sx={{ transition: isDrawerOpen && !smDown ? 'all .2s ease-in-out' : 'all .27s ease-in-out' }}
      >
        {children}
      </Box>

    </>
  )
}
