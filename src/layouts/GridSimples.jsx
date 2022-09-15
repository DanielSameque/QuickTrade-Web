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
  //GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { Button, Tooltip, Typography, useTheme, Zoom } from '@mui/material';
//import './GridSimples.css'

function QuickSearchToolbar() {
  const theme = useTheme()

  return (
    <Box sx={{
      p: 1
      // '&::-webkit-scrollbar': {
      //   width: 10
      // },
      // '&::-webkit-scrollbar-track': {
      //   backgroundColor: theme.palette.background.default
      // },
      // '&::-webkit-scrollbar-thumb': {
      //   backgroundColor: theme.palette.primary.main,
      //   borderRadius: 15
      // }
    }}
      display='flex' justifyContent='space-between' alignContent='center' alignItems='center'>
      <GridToolbarQuickFilter sx={{ width: '70%' }} />
      <Box>
        <Tooltip title='Incluir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small' sx={{ pl: '20px', pr: '20px', ml: '10px', mr: '10px' }} >
            <AddIcon size='small' />
          </Button>
        </Tooltip>
        <Tooltip title='Imprimir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small' sx={{ pl: '20px', pr: '20px' }} >
            <PrintIcon size='small' />
          </Button>
        </Tooltip>
      </Box>
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
      {/* </Box> */}
    </Box>
  );
}

export const GridSimples = (props) => {
  const theme = useTheme()

  return (
    <Box sx={{
      height: '87vh', border: 'none',
      '& .theme-header-grid': { backgroundColor: theme.palette.background.paper },
      overflowX: 'hidden',
      // '&::-webkit-scrollbar': {
      //   width: 10
      // },
      // '&::-webkit-scrollbar-track': {
      //   backgroundColor: theme.palette.background.default
      // },
      // '&::-webkit-scrollbar-thumb': {
      //   backgroundColor: theme.palette.primary.main,
      //   borderRadius: 15
      // }
    }}
    >
      <DataGrid
        rows={props.rows} columns={props.columns}
        components={{ Toolbar: QuickSearchToolbar }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        sx={{
          height: '87vh', border: 'none',
          // '& .theme-header-grid': { backgroundColor: theme.palette.background.paper },
          // overflowX: 'hidden',
          // '&::-webkit-scrollbar': {
          //   width: 10
          // },
          // '&::-webkit-scrollbar-track': {
          //   backgroundColor: theme.palette.background.default
          // },
          // '&::-webkit-scrollbar-thumb': {
          //   backgroundColor: theme.palette.primary.main,
          //   borderRadius: 15
          // }
        }}
      // classes={{ root: 'scrollbar' }}
      />
    </Box>
  );
}
