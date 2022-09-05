import { useTabContext } from '../../contexts';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

export const MenuAbas = () => {
  const theme = useTheme()

  const { tabArray, tabPosition, RemoveTab, ChangePosition } = useTabContext()

  return (
    <Box width='100%' sx={{
      borderBottom: 1, borderColor: 'divider',
    }}>
      <Tabs size='small' value={tabPosition} onChange={() => (ChangePosition)} aria-label="abas" variant="scrollable"
        allowScrollButtonsMobile TabIndicatorProps={{ style: { background: '#FDBA2A' } }}
        textColor='inherit'
      >
        {tabArray.map((tabArray) =>
        (<Tab onClick={() => (ChangePosition(tabArray.id))}
          sx={{ textTransform: 'none' }}
          icon={
            <Close onClickCapture={() => (RemoveTab(tabArray.id))} fontSize="small"
              sx={{
                transition: '0.2s all ease-in-out', borderRadius: '100%',
                '&:hover': { color: theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.main }
              }} />
          } iconPosition="end"
          key={tabArray.id} label={tabArray.name} value={tabArray.id}
        >
        </Tab>)
        )}

        {/* <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} /> */}

      </Tabs>

    </Box >
  );
}