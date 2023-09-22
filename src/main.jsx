import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./styles/index.css"
import "./styles/main.css"
import AppRouter from './pages/Router'
import ScrollToTop from './components/ScrollToTop'

/* This is the main.jsx file which hosts the initial structure of the page. 
*  Creating a root container as the main parent container.
*  Wrapping the child components in strict mode as well as in BrowserRouter imported from react router. 
*  Lastly there's the AppRouter and the ScrollToTop component which positions the viewer at the top of the page on each page they visit. 
*  With react router this is not a default feature and without it the users might experience visual annoyances like being at the bottom of a new page.
*  The AppRouter is our Route component and where the site's pages are set up.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
