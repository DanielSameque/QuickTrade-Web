import { useSysContext } from '../../contexts'

import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"

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
            <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
              <img src={Contas_svg} alt='Contas' />
            </ListItemIcon>
            <ListItemText primary='Contas' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.12}
            onClick={(event) => props.handleListItemClick(event, 1.12, false, 'centrodecusto')}>
            <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
              <img src={CentroDeCusto_svg} alt='CentroDeCusto' />
            </ListItemIcon>
            <ListItemText primary='Centro de Custo' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.13}
            onClick={(event) => props.handleListItemClick(event, 1.13, false, 'historicos')}>
            <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
              <img src={Historico_svg} alt='Historico' />
            </ListItemIcon>
            <ListItemText primary='Histórios' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.14}
            onClick={(event) => props.handleListItemClick(event, 1.14, false, 'segmentos')}>
            <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
              <img src={Segmentos_svg} alt='Segmentos' />
            </ListItemIcon>
            <ListItemText primary='Segmentos' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.15}
            onClick={(event) => props.handleListItemClick(event, 1.15, false, 'condicaoPg')}>
            <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
              <img src={CondicaoPg_svg} alt='Condição de Pagamento' />
            </ListItemIcon>
            <ListItemText primary='Condição de Pg' />
          </ListItemButton>
        </List>

        <List component='div' disablePadding dense>
          <ListItemButton selected={props.selectedIndex === 1.16}
            onClick={(event) => props.handleListItemClick(event, 1.16, false, 'contratos')}>
            <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
              <img src={Contratos_svg} alt='Contratos' />
            </ListItemIcon>
            <ListItemText primary='Contratos' />
          </ListItemButton>
        </List>

        {segmentos === 'FAB' || segmentos === 'DIST' || segmentos === 'VAREJO' || segmentos === 'GOURMET'
          ?
          <List component='div' disablePadding dense>
            <ListItemButton selected={props.selectedIndex === 1.17}
              onClick={(event) => props.handleListItemClick(event, 1.17, false, 'cartoes')}>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Cartoes_svg} alt='Cartões' />
              </ListItemIcon>
              <ListItemText primary='Cartões' />
            </ListItemButton>
          </List>
          : null}

        {segmentos === 'FAB' || segmentos === 'DIST' || segmentos === 'VAREJO' || segmentos === 'GOURMET'
          ?
          <List component='div' disablePadding dense>
            <ListItemButton selected={props.selectedIndex === 1.18}
              onClick={(event) => props.handleListItemClick(event, 1.18, false, 'caixas')}>
              <ListItemIcon sx={{ height: theme.spacing(3.5) }}>
                <img src={Caixas_svg} alt='Caixas' />
              </ListItemIcon>
              <ListItemText primary='Caixas' />
            </ListItemButton>
          </List>
          : null}

      </Collapse>

    </>)
}

export default Financas