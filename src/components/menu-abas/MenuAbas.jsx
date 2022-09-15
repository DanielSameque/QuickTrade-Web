import { useTabContext } from '../../contexts';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
// import TabPanel from '@mui/lab/TabPanel';
import { Close } from '@mui/icons-material';
import ContasGrid from '../cadastros/financas/Contas/ContasGrid';
import CentrodeCusto from '../cadastros/financas/CentrodeCusto';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

export const MenuAbas = () => {
  const theme = useTheme()

  const { tabArray, tabPosition, RemoveTab, ChangePosition } = useTabContext()

  return (
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
      <TabPanel value={1.11} index={1.11} >
        <ContasGrid />
      </TabPanel>
      <TabPanel value={1.12} index={1.12} >
        <CentrodeCusto />
      </TabPanel>
    </Box >
  );
}