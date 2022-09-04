import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarQuickFilter, ptBR } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

function QuickSearchToolbar() {
  return (
    <Box sx={{ p: 2 }} display='flex' justifyContent='space-between'>
      <GridToolbarQuickFilter />
      <Box sx={{ paddingLeft: 2, paddingRight: 2 }} />
      <GridToolbar />
    </Box>
  );
}

export const GridSimples = (props) => {
  const theme = useTheme()

  return (
    <Box sx={{
      height: '85vh', width: '100%', '& .theme-header-grid': {
        backgroundColor: theme.palette.background.paper,
      }
    }}>
      <DataGrid
        rows={props.rows} columns={props.columns}
        components={{ Toolbar: QuickSearchToolbar }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
}
