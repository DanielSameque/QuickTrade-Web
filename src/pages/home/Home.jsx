import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashBoard, MenuAbas } from '../../components';
import CentrodeCusto from '../../components/cadastros/financas/CentrodeCusto'
import Historicos from '../../components/cadastros/financas/Historicos'
import Segmentos from '../../components/cadastros/financas/Segmentos'
import CondicaoPg from '../../components/cadastros/financas/CondicaoPg';
import Contratos from '../../components/cadastros/financas/Contratos';
import Cartoes from '../../components/cadastros/financas/Cartoes';
import Caixas from '../../components/cadastros/financas/Caixas';
import Lancamentos from '../../components/lancamentos'
import { ContasForm, ContasGrid } from '../../components/cadastros/financas/Contas';

//import './style.js'
import { MenuLateral } from '../../components';
import { MenuSuperior } from '../../components';
import { Alert, Snackbar, useTheme } from '@mui/material';
import { Box, styled } from '@mui/system';

function Home() {
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const theme = useTheme()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const ThemeHome = styled(Box, {})({
    '&::-webkit-scrollbar': {
      width: 10
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 0,
      border: '1px solid ' + theme.palette.background.default
    },
    '*::-webkit-scrollbar': {
      width: 10
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.default
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 0,
      border: '1px solid ' + theme.palette.background.default
    }
  });

  return (
    <ThemeHome
      sx={{
        overflowX: 'hidden'
      }}
    >
      <MenuLateral>
        <MenuSuperior />
        <MenuAbas />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/cadastros/financas/ContasGrid" element={<ContasGrid />} />
          <Route path="/cadastros/financas/ContasForm" element={<ContasForm />} />
          <Route path="/cadastros/financas/centrodecusto" element={<CentrodeCusto />} />
          <Route path="/cadastros/financas/historicos" element={<Historicos />} />
          <Route path="/cadastros/financas/segmentos" element={<Segmentos />} />
          <Route path="/cadastros/financas/condicaopg" element={<CondicaoPg />} />
          <Route path="/cadastros/financas/contratos" element={<Contratos />} />
          <Route path="/cadastros/financas/cartoes" element={<Cartoes />} />
          <Route path="/cadastros/financas/caixas" element={<Caixas />} />

          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/utilitarios" element={<utilitarios />} />
          <Route path="/configuracao" element={<configuracao />} />
        </Routes>
      </MenuLateral>
      < Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={2000}>
        <Alert severity='success'>
          Bem Vindo(a)
        </Alert>
      </Snackbar>
    </ThemeHome>
  )
}

export default Home;