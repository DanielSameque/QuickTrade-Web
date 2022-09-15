import { useTabContext } from '../../contexts';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import ContasGrid from '../cadastros/financas/Contas/ContasGrid';
import CentrodeCusto from '../cadastros/financas/CentrodeCusto';
import Historicos from '../cadastros/financas/Historicos';
import Segmentos from '../cadastros/financas/Segmentos';
import CondicaoPg from '../cadastros/financas/CondicaoPg';
import Contratos from '../cadastros/financas/Contratos';
import Cartoes from '../cadastros/financas/Cartoes';
import Caixas from '../cadastros/financas/Caixas';
import { DashBoard } from '../dashboard/DashBoard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   const navigate = useNavigate()
// useEffect(() => {
//   switch (value) {
//     case 1.11:
//       return navigate('/cadastros/financas/ContasGrid')
//     case 1.12:
//       return navigate('/cadastros/financas/centrodecusto')
//     case 1.13:
//       return navigate('/cadastros/financas/historicos')
//     case 1.14:
//       return navigate('/cadastros/financas/segmentos')
//     case 1.15:
//       return navigate('/cadastros/financas/condicaoPg')
//     case 1.16:
//       return navigate('/cadastros/financas/contratos')
//     case 1.17:
//       return navigate('/cadastros/financas/cartoes')
//     case 1.18:
//       return navigate('/cadastros/financas/caixas')
//     default:
//       return navigate('/')
//   }
// });
// }
// return (
//   <div
//     role="tabpanel"
//     hidden={value !== index}
//     id={`simple-tabpanel-${index}`}
//     aria-labelledby={`simple-tab-${index}`}
//     {...other}
//   >
//     {value === index && (
//       <Box sx={{ p: 0 }}>
//         {children}
//       </Box>
//     )}
//   </div>
// );
// }


export const MenuAbas = () => {
  const theme = useTheme()
  const { tabArray, tabPosition, RemoveTab, ChangePosition } = useTabContext()

  return (
    <Box width='100%'>
      <Box width='100%'
        sx={{
          borderBottom: 1, borderColor: 'divider'
        }}>
        <Tabs value={tabPosition} onChange={() => (ChangePosition)} aria-label="abas" variant="scrollable"
          allowScrollButtonsMobile sx={{ minHeight: theme.spacing(6) }}
        >
          {tabArray.map((tabArray) =>
          (<Tab onClick={() => (ChangePosition(tabArray.id))}
            sx={{ textTransform: 'none', minHeight: theme.spacing(6) }}
            icon={
              <Close onClickCapture={() => (RemoveTab(tabArray.id))} fontSize='small'
                sx={{
                  transition: '0.2s all ease-in-out', borderRadius: '100%',
                  '&:hover': { color: theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.main }
                }} />
            } iconPosition="end"
            key={tabArray.id} label={tabArray.name} value={tabArray.id}>
          </Tab>)
          )}
        </Tabs>
      </Box >

      {/* <TabPanel value={tabPosition} index={0.00} >
        <DashBoard />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.11} >
        <ContasGrid />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.12} >
        <CentrodeCusto />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.13} >
        <Historicos />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.14} >
        <Segmentos />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.15} >
        <CondicaoPg />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.16} >
        <Contratos />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.17} >
        <Cartoes />
      </TabPanel>
      <TabPanel value={tabPosition} index={1.18} >
        <Caixas />
      </TabPanel> */}

    </Box >
  );
}