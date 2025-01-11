import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.jsx'
import Inicio from './pages/Inicio.jsx' 
import Projetos from './pages/Projetos.jsx' 

const routes = createBrowserRouter([
  {
    path: '/portfolio',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/portfolio',
        element: <Inicio />,
      },
      {
        path: '/portfolio/projetos',
        element: <Projetos />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </StrictMode>,
)
