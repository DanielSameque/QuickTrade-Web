import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  DataGrid, GridToolbarQuickFilter, ptBR, GridToolbar
} from '@mui/x-data-grid';
import { Button, Collapse, List, ListItemButton, Paper, Tooltip, useTheme, Zoom } from '@mui/material';
import { useState } from 'react';

function QuickSearchToolbar() {
  const theme = useTheme()
  const [openList, setOpenList] = useState(false);
  const handleClickList = () => {
    setOpenList(!openList);
  };

  return (
    <Box display='flex' justifyContent='space-between' alignContent='center' alignItems='center' padding={1}>
      <Box display='flex' width='100%' height='auto' gap={1}
        flexDirection='row' alignContent='center' alignItems='center' flexWrap='wrap-reverse' >
        <List sx={{ display: 'flex', justifyContent: 'center', alignContent: 'start', alignItems: 'center' }}>
          <Tooltip title='Filtro' placement='top' TransitionComponent={Zoom}>
            <ListItemButton onClick={handleClickList} sx={{
              borderRadius: '5px', p: theme.spacing(1.5),
              display: 'flex', justifyContent: 'center', alignContent: 'start'
            }}>
              <FilterAltIcon size='small' />
              {openList ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ListItemButton>
          </Tooltip>
          <Collapse in={openList} timeout="auto" unmountOnExit sx={{ p: '0px' }}>
            <List sx={{ p: '0px', m: '0px', gap: '0px' }}>
              <GridToolbar sx={{ p: '0px', m: '0px', gap: '0px' }} />
            </List>
          </Collapse>
        </List>
        <GridToolbarQuickFilter variant='outlined' size='small' sx={{ width: '80%' }} />
      </Box>

      <Box display='flex' alignContent='center' width='50%' flexWrap='wrap' justifyContent='right'
        padding={1} margin={0} gap={1}>
        <Tooltip title='Incluir' placement='top' TransitionComponent={Zoom} >
          <Button variant='contained' size='small'  >
            <AddIcon size='small' />
          </Button>
        </Tooltip>
        <Tooltip title='Imprimir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small'  >
            <PrintIcon size='small' />
          </Button>
        </Tooltip>
        <Tooltip title='Incluir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small'  >
            <AddIcon size='small' />
          </Button>
        </Tooltip>
        <Tooltip title='Incluir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small'  >
            <AddIcon size='small' />
          </Button>
        </Tooltip>
        <Tooltip title='Incluir' placement='top' TransitionComponent={Zoom}>
          <Button variant='contained' size='small'  >
            <AddIcon size='small' />
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
      width: '100%', borderRadius: '10px', margin: '30px', boxShadow: '1px 1px 25px -10px'
      // backgroundColor: theme.palette.background.paper
    }}>
      <DataGrid
        rows={props.rows} columns={props.columns}
        components={{ Toolbar: QuickSearchToolbar }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        sx={{ border: 'none', margin: '0px', padding: '0px' }} />
    </Box >
  );
}
