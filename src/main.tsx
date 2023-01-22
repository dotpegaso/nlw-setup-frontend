import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import {defaultTheme} from './styles/theme'
import { GlobalStyles } from './styles/globalStyle'
import Dashboard from './pages/Dashboard'

import './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Dashboard />
    </ThemeProvider>
  </React.StrictMode>,
)
