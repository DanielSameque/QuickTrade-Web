import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const TabContext = createContext()

export const useTabContext = () => {
  return useContext(TabContext)
}

export const TabProvider = ({ children }) => {
  const [tabArray, setTabArray] = useState([])

  const [tabPosition, setTabPosition] = useState()
  const navigate = useNavigate()

  const ChangePosition = newPosition => {
    function FindTabId(find) {
      return find.id === newPosition
    }
    if (tabArray.find(FindTabId)) {
      setTabPosition(newPosition)
    } else {
      const tabArrayClone = tabArray.map(tabArray => tabArray.id)
      setTabPosition(tabArrayClone[tabArrayClone.length - 1])
    }
    //console.log(newPosition)
    // switch (newPosition) {
    //   case 1.11:
    //     return navigate('/cadastros/financas/ContasGrid')
    //   case 1.12:
    //     return navigate('/cadastros/financas/centrodecusto')
    //   case 1.13:
    //     return navigate('/cadastros/financas/historicos')
    //   case 1.14:
    //     return navigate('/cadastros/financas/segmentos')
    //   case 1.15:
    //     return navigate('/cadastros/financas/condicaoPg')
    //   case 1.16:
    //     return navigate('/cadastros/financas/contratos')
    //   case 1.17:
    //     return navigate('/cadastros/financas/cartoes')
    //   case 1.18:
    //     return navigate('/cadastros/financas/caixas')
    //   default:
    //     return navigate('/')
    // }
  }
  const AddTab = (tabId, tabName) => {
    setTabPosition(tabId)

    function FindTabId(find) {
      return find.id === tabId
    }

    if (tabArray.find(FindTabId)) {
      // console.log(`ja existe o id ${tabId}`)
    } else {
      // console.log(`adicionado novo id ${tabId}`)
      let tabValues = {
        id: tabId,
        name: tabName
      }
      setTabArray([...tabArray, tabValues])
    }
  }

  const RemoveTab = tabId => {
    const tabUpdated = tabArray.filter(t => t.id !== tabId)
    setTabArray(tabUpdated)

    const tabArrayClone = tabUpdated.map(tabArray => tabArray.id)
    setTabPosition(tabArrayClone[tabArrayClone.length - 1])
  }

  return (
    <TabContext.Provider
      value={{
        tabArray,
        tabPosition,
        AddTab,
        RemoveTab,
        ChangePosition
      }}
    >
      {children}
    </TabContext.Provider>
  )
}
