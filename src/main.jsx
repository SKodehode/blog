import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./styles/index.css"
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Catalog from './pages/Catalog';
import Blog from './pages/Blog';

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
