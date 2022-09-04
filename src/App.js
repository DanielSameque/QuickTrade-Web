import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'
import {
  AppThemeProvider,
  DrawerProvider,
  TabProvider,
  SysProvider
} from './contexts'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <Router>
        <AppThemeProvider>
          <SysProvider>
            <DrawerProvider>
              <TabProvider>
                <GlobalStyle />
                <ToastContainer
                  theme={'dark'}
                  closeButton={false}
                  position={'bottom-right'}
                  closeOnClick
                  draggable
                />
                <Routes />
              </TabProvider>
            </DrawerProvider>
          </SysProvider>
        </AppThemeProvider>
      </Router>
    </>
  )
}

export default App
