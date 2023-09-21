import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./styles/index.css"
import "./styles/main.css"
import AppRouter from './pages/Router'
import ScrollToTop from './components/ScrollToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
