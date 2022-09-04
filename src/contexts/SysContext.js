import { createContext, useState, useContext, useEffect } from 'react'
import api from '../services/api'

const SysContext = createContext()

export const useSysContext = () => {
  return useContext(SysContext)
}

export const SysProvider = ({ children }) => {
  const [segmentos, setSegmentos] = useState('')
  useEffect(() => {
    api
      .get('/v1/sys?idempresa=0')
      .then(response => {
        setSegmentos(response.data[0].empresatipo)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <SysContext.Provider
      value={{
        segmentos
      }}
    >
      {children}
    </SysContext.Provider>
  )
}
