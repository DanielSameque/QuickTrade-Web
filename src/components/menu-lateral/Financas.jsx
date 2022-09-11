import { useSysContext } from '../../contexts'

import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme, Zoom } from "@mui/material"

import Contas_svg from '../../assets/icons/Contas.svg'
import CentroDeCusto_svg from '../../assets/icons/CentroDeCusto.svg'
import Historico_svg from '../../assets/icons/Historicos.svg'
import Segmentos_svg from '../../assets/icons/Segmentos.svg'
import CondicaoPg_svg from '../../assets/icons/CondicaoPg.svg'
import Contratos_svg from '../../assets/icons/Contratos.svg'
import Cartoes_svg from '../../assets/icons/Cartoes.svg'
import Caixas_svg from '../../assets/icons/Caixas.svg'

export const Financas = (props) => {
  //const [segmentos] = useState(['FINANCEIRO']) //(['FAB', 'DIST', 'VAREJO', 'DISTAVES', 'FINANCEIRO', 'TRANSPORTE', 'SERRARIA', 'FISCAL', 'GOURMET', 'SW'])
  const { segmentos } = useSysContext()
  const theme = useTheme()
  return (
    <>
      <Collapse in={props.openListFinancas} timeout='auto' unmountOnExit>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.11}
            onClick={(event) => props.handleListItemClick(event, 1.11, false, 'contas')}>
            <Tooltip title='Contas' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Contas_svg} alt='Contas' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Contas' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.12}
            onClick={(event) => props.handleListItemClick(event, 1.12, false, 'centrodecusto')}>
            <Tooltip title='Centro De Custo' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={CentroDeCusto_svg} alt='CentroDeCusto' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Centro de Custo' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.13}
            onClick={(event) => props.handleListItemClick(event, 1.13, false, 'historicos')}>
            <Tooltip title='Historico' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Historico_svg} alt='Historico' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Histórios' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.14}
            onClick={(event) => props.handleListItemClick(event, 1.14, false, 'segmentos')}>
            <Tooltip title='Segmentos' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Segmentos_svg} alt='Segmentos' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Segmentos' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.15}
            onClick={(event) => props.handleListItemClick(event, 1.15, false, 'condicaoPg')}>
            <Tooltip title='Condição de Pagamento' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={CondicaoPg_svg} alt='Condição de Pagamento' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Condição de Pg' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.16}
            onClick={(event) => props.handleListItemClick(event, 1.16, false, 'contratos')}>
            <Tooltip title='Contratos' placement='right' TransitionComponent={Zoom} arrow>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Contratos_svg} alt='Contratos' />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary='Contratos' />
          </ListItemButton>
        </List>

        {segmentos === 'FAB' || segmentos === 'DIST' || segmentos === 'VAREJO' || segmentos === 'GOURMET'
          ?
          <List component='div' disablePadding dense>
            <ListItemButton selected={props.selectedIndex === 1.17}
              onClick={(event) => props.handleListItemClick(event, 1.17, false, 'cartoes')}>
              <Tooltip title='Cartões' placement='right' TransitionComponent={Zoom} arrow>
                <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                  <img src={Cartoes_svg} alt='Cartões' />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary='Cartões' />
            </ListItemButton>
          </List>
          : null}

        {segmentos === 'FAB' || segmentos === 'DIST' || segmentos === 'VAREJO' || segmentos === 'GOURMET'
          ?
          <List component='div' disablePadding dense>
            <ListItemButton selected={props.selectedIndex === 1.18}
              onClick={(event) => props.handleListItemClick(event, 1.18, false, 'caixas')}>
              <Tooltip title='Caixas' placement='right' TransitionComponent={Zoom} arrow>
                <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                  <img src={Caixas_svg} alt='Caixas' />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary='Caixas' />
            </ListItemButton>
          </List>
          : null}

      </Collapse>

    </>)
}

export default Financas