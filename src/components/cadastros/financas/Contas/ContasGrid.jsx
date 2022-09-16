import { useEffect, useState } from 'react';

import api from '../../../../services/api';

import { GridActionsCellItem } from "@mui/x-data-grid"
import { GridSimples } from "../../../../layouts"

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import { Box, useTheme } from '@mui/material';

export const ContasGrid = () => {
  // const AlterarCadastro = () => {
  const navigate = useNavigate()
  //   navigate('/cadastros/financas/Segmentos')
  // }

  const columns = [
    { field: 'id', headerName: 'Id', width: 100, hideable: false, headerClassName: 'theme-header-grid' },
    { field: 'nome', headerName: 'Nome', flex: 1, headerClassName: 'theme-header-grid' },
    { field: 'tipo', headerName: 'Tipo', width: 200, headerClassName: 'theme-header-grid' },
    {
      field: 'saldo', headerName: 'Saldo', width: 200, type: 'number',
      description: 'Saldo da Conta', headerClassName: 'theme-header-grid',
      renderHeader: () => (
        <>
          {'Saldo '}💹
        </>
      )
    },
    {
      headerName: 'Opções',
      field: 'actions',
      type: 'actions',
      width: 150,
      headerClassName: 'theme-header-grid',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Alterar"
          onClick={() => (navigate(`/cadastros/financas/ContasForm/${1}`))}
        //showInMenu
        />,
        // <GridActionsCellItem
        //   icon={<PrintIcon />}
        //   label="imprimir"
        // //onClick={duplicateUser(params.id)}
        // //showInMenu
        // />,
        <GridActionsCellItem
          icon={<DeleteIcon color='error' />}
          label='Excluir'
          //onClick={deleteUser(params.id)}
          showInMenu
        />,
      ]
    }
  ]

  const [contas, setContas] = useState([]);
  const theme = useTheme()
  useEffect(() => {
    api.get('v1/contas')
      .then(response => {
        setContas(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    setContas([
      { id: 1, nome: 'Nubank', tipo: 'Conta', saldo: (15000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 2, nome: 'Banco do Brasil', tipo: 'Conta', saldo: (5000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 3, nome: 'Caixa', tipo: 'Caixa', saldo: (12000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 4, nome: 'Santander', tipo: 'Conta', saldo: (7000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 5, nome: 'Bradesco', tipo: 'Conta', saldo: (5500.50).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },

      { id: 6, nome: 'Nubank', tipo: 'Conta', saldo: (15000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 7, nome: 'Banco do Brasil', tipo: 'Conta', saldo: (5000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 8, nome: 'Caixa', tipo: 'Caixa', saldo: (12000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 9, nome: 'Santander', tipo: 'Conta', saldo: (7000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 10, nome: 'Bradesco', tipo: 'Conta', saldo: (5500.50).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },

      { id: 11, nome: 'Nubank', tipo: 'Conta', saldo: (15000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 12, nome: 'Banco do Brasil', tipo: 'Conta', saldo: (5000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 13, nome: 'Caixa', tipo: 'Caixa', saldo: (12000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 14, nome: 'Santander', tipo: 'Conta', saldo: (7000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 15, nome: 'Bradesco', tipo: 'Conta', saldo: (5500.50).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },

      { id: 16, nome: 'Nubank', tipo: 'Conta', saldo: (15000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 17, nome: 'Banco do Brasil', tipo: 'Conta', saldo: (5000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 18, nome: 'Caixa', tipo: 'Caixa', saldo: (12000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 19, nome: 'Santander', tipo: 'Conta', saldo: (7000.00).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
      { id: 20, nome: 'Bradesco', tipo: 'Conta', saldo: (5500.50).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
    ])
  }, [])
  return (

    <Box sx={{
      '&::-webkit-scrollbar': {
        width: 10
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.background.default
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 15
      }
    }}>
      <GridSimples rows={contas} columns={columns} />
    </Box>)
}

export default ContasGrid