import { useAppThemeContext } from '../../contexts/ThemeContext'

import { Button } from '@mui/material'
import UserProfile from '../../assets/UsuarioPerfil.webp'
import HelpDesk from '../../assets/icons/HelpDesk.svg'
import Chat from '../../assets/icons/Chat.svg'
import Alert from '../../assets/icons/Alert.svg'

import './style.css'

function NavbarSys() {
  const { toggleTheme } = useAppThemeContext()
  return (
    <div className="navbarsys-container">
      <div className="navbarsys-right">
        <div className="tools">
          <Button variant='contained' color='primary' onClick={toggleTheme}>Tema</Button>
          <img className="HoverIcon" alt="HelpDesk" src={HelpDesk} />
          <img className="HoverIcon" alt="Chat" src={Chat} />
          <img className="HoverIcon" alt="Alert" src={Alert} />
        </div>
        <div className="profile">
          <img src={UserProfile} alt="Perfil Usuario" />
          <div className="profile-info">
            <h5>Daniel Sameque</h5>
            <p>Faturista</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavbarSys;