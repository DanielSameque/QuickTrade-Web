import { useEffect, useState } from 'react';

import api from '../../../services/api';

import { GridActionsCellItem } from "@mui/x-data-grid"
import { GridSimples } from "../../../layouts"

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';

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
        icon={<DeleteIcon />}
        label="Excluir"
      //onClick={deleteUser(params.id)}
      />,
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Alterar"
      //onClick={toggleAdmin(params.id)}
      //showInMenu
      />,
      <GridActionsCellItem
        icon={<PrintIcon />}
        label="imprimir"
      //onClick={duplicateUser(params.id)}
      //showInMenu
      />,
    ]
  }
]

const Contas = () => {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    api.get('v1/contas')
      .then(response => {
        setContas(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (<GridSimples rows={contas} columns={columns} />)
}

export default Contas