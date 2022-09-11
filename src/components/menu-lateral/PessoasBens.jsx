import { useSysContext } from '../../contexts'

import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme, Zoom } from "@mui/material"

import Clientes_svg from '../../assets/icons/Clientes.svg'
import Fornecedores_svg from '../../assets/icons/Fornecedores.svg'
import Transportadores_svg from '../../assets/icons/Transportadores.svg'
import Funcionarios_svg from '../../assets/icons/Funcionarios.svg'
import Seguradoras_svg from '../../assets/icons/Seguradoras.svg'
import Bens_svg from '../../assets/icons/Bens.svg'

export const PessoasBens = (props) => {
  const { segmentos } = useSysContext()
  const theme = useTheme()
  return (
    <>
      <Collapse in={props.openListPessoasBens} timeout='auto' unmountOnExit>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.21}
            onClick={(event) => props.handleListItemClick(event, 1.21, false, 'clientes')}>
            <Tooltip title='Clientes' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Clientes_svg} alt='Clientes' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Clientes' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.22}
            onClick={(event) => props.handleListItemClick(event, 1.22, false, 'fornecedores')}>
            <Tooltip title='Fornecedores' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Fornecedores_svg} alt='Fornecedores' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Fornecedores' />
          </ListItemButton>
        </List>

        {segmentos === 'FAB' || segmentos === 'DIST' || segmentos === 'VAREJO' || segmentos === 'GOURMET'
          ?
          <List component='div' disablePadding dense>
            <ListItemButton selected={props.selectedIndex === 1.23}
              onClick={(event) => props.handleListItemClick(event, 1.23, false, 'transportadores')}>
              <Tooltip title='Transportadores' placement='right' TransitionComponent={Zoom} arrow>
                <ListItemIcon>
                  <img src={Transportadores_svg} alt='Transportadores' />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary='Transportadores' />
            </ListItemButton>
          </List>
          : null}

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.24}
            onClick={(event) => props.handleListItemClick(event, 1.24, false, 'funcionarios')}>
            <Tooltip title='Funcionarios' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon>
                <img src={Funcionarios_svg} alt='Funcionarios' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Funcionarios' />
          </ListItemButton>
        </List>

        {segmentos === 'FAB' || segmentos === 'DIST' || segmentos === 'VAREJO' || segmentos === 'GOURMET'
          ?
          <List component='div' disablePadding dense>
            <ListItemButton selected={props.selectedIndex === 1.25}
              onClick={(event) => props.handleListItemClick(event, 1.25, false, 'seguradoras')}>
              <Tooltip title='Seguradoras' placement='right' TransitionComponent={Zoom} arrow>
                <ListItemIcon>
                  <img src={Seguradoras_svg} alt='Seguradoras' />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary='Seguradoras' />
            </ListItemButton>
          </List>
          : null}

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.26}
            onClick={(event) => props.handleListItemClick(event, 1.26, false, 'bens')}>
            <Tooltip title='Bens' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon>
                <img src={Bens_svg} alt='Bens' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Bens' />
          </ListItemButton>
        </List>

      </Collapse>

    </>)
}

export default PessoasBens