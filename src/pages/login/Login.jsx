import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import api from '../../services/api';

import Quicktrade from '../../assets/imgsys/QuickTrade.svg'
import Eye_svg from '../../assets/icons/Eye.svg'
import EyeNo_svg from '../../assets/icons/EyeNo.svg'



import { Alert, Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography, useTheme } from '@mui/material';
import './style.css'

function Login() {

  const navigate = useNavigate();
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false);
  const ClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [severity, setSeverity] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [menssageError, setMenssageError] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const [empresaError, setEmpresaError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  function FocusEmpresaError() {
    setEmpresaError(false)
  }
  function FocusEmailError() {
    setEmailError(false)
  }
  function FocusSenhaError() {
    setSenhaError(false)
  }

  function ProcessaLogin(e) {
    e.preventDefault();

    if (empresa === '' || email === '' || senha === '') {
      setSeverity('info')
      setMenssageError('Existem campos vazios')
      setOpenSnackbar(true);
    }

    if (empresa === '') {
      setEmpresaError(true)
    }
    if (email === '') {
      setEmailError(true)
    }
    if (senha === '') {
      setSenhaError(true)
    }

    setLoading(true);
    api.post('/v1/usuarios/login', {
      usuario: email,
      senha: senha
    })
      .then(response => {
        // console.log(response)
        localStorage.setItem('sessionToken', response.data.token)
        localStorage.setItem('sessionID', response.data.idlogin)
        localStorage.setItem('sessionEmail', response.data.usuario)
        localStorage.setItem('sessionPerfil', response.data.perfil)
        navigate('/');
      })
      .catch(err => {
        // console.log(err)
        setLoading(false);
        if (empresa !== '' && email !== '' && senha !== '') {
          setSeverity('error')
          setMenssageError('Dados incorretos, tente novamente')
          setOpenSnackbar(true);
        }
      })
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }}>
      <Box display='flex' width={theme.spacing(100)} height={theme.spacing(50)}>
        <Box
          display='flex' flexDirection='column' alignItems='center' justifyContent='center' paddingTop={5}
          width={theme.spacing(50)} height={theme.spacing(50)}
          backgroundColor={theme.palette.background.paper}
          sx={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>

          <img src={Quicktrade} alt='ícone Quicktrade' width={100} />

          <Box padding={3}>
            <Typography variant='h4' component='h1' color={theme.palette.primary.main}>
              QuickTrade 22
            </Typography>
            <Typography variant='body1' component='p' color={theme.palette.primary.main} align='right'>
              Distribuição(Web)
            </Typography>
          </Box>

          <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' paddingTop={5}>
            <Typography variant='body1' component='p' color={theme.palette.primary.main}>
              (91) 3017-1000
            </Typography>
            <Typography variant='body2' component='p' color={theme.palette.primary.main}>
              www.nortsys.com.br
            </Typography>
            <Typography variant='caption' component='p' color={theme.palette.primary.main}>
              Copyright &copy; Nortsys Sistemas, Todos os Direitos Reservados
            </Typography>
          </Box>

        </Box>

        <Box
          display='flex' flexDirection='column' alignItems='center' justifyContent='center'
          padding={4} gap={2} component='form'
          width={theme.spacing(50)} height={theme.spacing(50)}
          backgroundColor={theme.palette.background.tissue}
          sx={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>

          <Typography variant='h3' component='p' color={theme.palette.primary.main}>
            Login
          </Typography>


          <TextField fullWidth id='empresa' type='text' label='Empresa' error={empresaError} autoFocus
            value={empresa} onChange={(e) => setEmpresa(e.target.value)} onFocus={FocusEmpresaError} />

          <TextField fullWidth id='email' type='email' label='E-mail' error={emailError}
            value={email} onChange={(e) => setEmail(e.target.value)} onFocus={FocusEmailError} />

          <TextField fullWidth id='password' type={showPassword ? 'text' : 'password'} label='Senha' error={senhaError}
            value={senha} onChange={(e) => setSenha(e.target.value)} onFocus={FocusSenhaError}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={ClickShowPassword}
                  >
                    {showPassword ? <img src={Eye_svg} alt='' width={20} /> : <img src={EyeNo_svg} alt='' width={20} />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button variant='outlined' type='submit' color='primary' onClick={ProcessaLogin} disabled={loading}>{loading ? 'Entrando' : 'Entrar'}</Button>
          < Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={2000}>
            <Alert severity={severity}>
              {menssageError}
            </Alert>
          </Snackbar>

        </Box>
      </Box>
    </Box >
  )
}

export default Login;