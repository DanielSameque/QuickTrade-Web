import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import {
  AppThemeProvider,
  DrawerProvider,
  TabProvider,
  SysProvider
} from './contexts'

function App() {
  return (
    <>
      <Router>
        <AppThemeProvider>
          <SysProvider>
            <DrawerProvider>
              <TabProvider>
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
