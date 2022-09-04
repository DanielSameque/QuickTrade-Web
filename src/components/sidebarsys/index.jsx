import { useEffect, useState } from 'react'
import SideBarItem from '../sidebaritemsys'

// import Find from '../../assets/icons/Find.svg'
import Logo from '../../assets/imgsys/LogoNsys.svg'
import MenuDark from '../../assets/icons/MenuDark.svg'
import DashBoard from '../../assets/icons/DashBoard.svg'
import Cadastros from '../../assets/icons/Cadastros.svg'
import Lancamentos from '../../assets/icons/Lancamentos.svg'
import Utilitarios from '../../assets/icons/Utilitarios.svg'
import Rotinas from '../../assets/icons/Rotinas.svg'
import Configuracao from '../../assets/icons/Configuracao.svg'
import UserProfile from '../../assets/UsuarioPerfil.webp'

import './style.css'

const menuItems = [
  { name: "DashBoard", to: "/", iconClassName: DashBoard },
  {
    name: "Cadastros", to: "/cadastros", iconClassName: Cadastros,
    subMenus: [{ name: "Contas", to: "/cadastros/contas", },
    { name: "Centro de Custo", to: "/cadastros/centrodecusto" },
    { name: "Históricos", to: "/cadastros/historicos" },
    { name: "Segmentos", to: "cadastros/segmentos" }]
  },
  { name: "Lançamentos", to: "/lancamentos", iconClassName: Lancamentos },
  { name: "Utilitários", to: "/utilitarios", iconClassName: Utilitarios },
  { name: "Rotinas", to: "/rotinas", iconClassName: Rotinas },
  { name: "Configurações", to: "/configurações", iconClassName: Configuracao }
]

const SideBarSys = (props) => {

  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach(el => {
        el.classList.remove("active")
      })
    }
    props.onCollapse(inactive);
    // eslint-disable-next-line
  }, [inactive])

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={Logo} alt="Logo da Empresa" />
          <h2>Nortsys</h2>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? <img src={MenuDark} alt="Seta Direita" /> : <img src={MenuDark} alt="Seta Esquerda" />}
        </div>
      </div>

      <div className="divider"></div>

      {/* <div className="search-controller">
        <button onClick={() => setInactive(!inactive)} className="search-btn">
          <img src={Find} alt="Seta Esquerda" />
        </button>
        <input type="text" placeholder="Pesquisar"></input>
      </div>
      <div className="divider"></div> */}

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) =>
            <SideBarItem
              key={index}
              name={menuItem.name}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              to={menuItem.to}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          )}

          {/* <li>
            <a className="menu-item" href="#">
              <div className="menu-icon">
                <img src={DashBoard} alt="DashBoard" />
              </div>
              <span>DashBoard</span>
            </a>
          </li>
          <SideBarItem
            name={"Cadastros"}
            subMenus={[{ name: "Contas" }, { name: "Centro de Custo" }, { name: "Históricos" }, { name: "Segmentos" }]}
          />
          <li>
            <a className="menu-item" href="#">
              <div className="menu-icon">
                <img src={Lancamentos} alt="Lancamentos" />
              </div>
              <span>Lançamentos</span>
            </a>
          </li> */}

        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="divider"></div>
        <div className="avatar">
          <img src={UserProfile} alt="Perfil Usuario" />
        </div>
        <div className="user-info">
          <h5>Daniel Sameque</h5>
          <p>&copy; nortsys.com.br</p>
        </div>
      </div>
    </div >
  )
}

export default SideBarSys