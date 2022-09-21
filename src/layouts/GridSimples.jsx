import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

import {
  DataGrid, GridToolbarQuickFilter, ptBR,
  // GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { Button, Tooltip, useTheme, Zoom } from '@mui/material';
//import './GridSimples.css'

function QuickSearchToolbar() {
  return (
    <Box sx={{ p: 2 }} display='flex' justifyContent='space-between' alignContent='center' alignItems='center'>
      <GridToolbarQuickFilter variant='outlined' sx={{ width: '70%' }} />
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
      {/* </Box> */}
      <Box display='inline' justifyContent='center' gap={0}>
        <Tooltip title='Incluir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small' sx={{ ml: '10px', mr: '10px' }} >
            <AddIcon size='small' />
          </Button>
        </Tooltip>
        <Tooltip title='Imprimir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small' sx={{ ml: '10px', mr: '10px' }} >
            <PrintIcon size='small' />
          </Button>
        </Tooltip>
      </Box>

    </Box >
  );
}

export const GridSimples = (props) => {
  const theme = useTheme()

  return (
    <Box sx={{
      height: '80vh', border: 'none', backgroundColor: theme.palette.background.paper,
      '& .theme-header-grid': { backgroundColor: theme.palette.primary.main },
      overflowX: 'hidden', width: '100%',
      borderRadius: '10px', boxShadow: '10',
      margin: '30px',// display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center',
    }}
    >
      <DataGrid
        rows={props.rows} columns={props.columns}
        components={{ Toolbar: QuickSearchToolbar }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        sx={{
          border: 'none', margin: '0px', padding: '0px',// width: '100%', //height: '80vh',
          //margin: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center',
        }}
      />
    </Box >
  );
}
