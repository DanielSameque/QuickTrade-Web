import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashBoard, MenuAbas } from '../../components';
import ContasGrid from '../../components/cadastros/financas/Contas/ContasGrid';
import CentrodeCusto from '../../components/cadastros/financas/CentrodeCusto'
import Historicos from '../../components/cadastros/financas/Historicos'
import Segmentos from '../../components/cadastros/financas/Segmentos'
import CondicaoPg from '../../components/cadastros/financas/CondicaoPg';
import Contratos from '../../components/cadastros/financas/Contratos';
import Cartoes from '../../components/cadastros/financas/Cartoes';
import Caixas from '../../components/cadastros/financas/Caixas';
import Lancamentos from '../../components/lancamentos'

import './style.css'
import { MenuLateral } from '../../components';
import { MenuSuperior } from '../../components';
import { Alert, Snackbar } from '@mui/material';

function Home() {
  const [openSnackbar, setOpenSnackbar] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <>

      <MenuLateral>
        <MenuSuperior />
        <MenuAbas />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/cadastros/financas/contas" element={<ContasGrid />} />
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
    </>
  )
}

export default Home;