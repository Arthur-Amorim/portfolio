import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.jsx'
import Inicio from './pages/Inicio.jsx' 
import Pesquisa from './pages/Pesquisa.jsx' 
import Modelagens from './pages/Modelagens.jsx'

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
        path: '/portfolio/pesquisa',
        element: <Pesquisa />
      },
      {
        path: '/portfolio/modelagens',
        element: <Modelagens />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
