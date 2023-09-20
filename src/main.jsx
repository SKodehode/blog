import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./styles/index.css"
import AppRouter from './pages/Router'



/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "Blog",
    element: <Blog/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "Catalog",
    element: <Catalog/>,
    errorElement: <ErrorPage/>
  },
]); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
