import './styles/App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'  
import { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div className='app'>
      <Header />
      <ScrollToTop />
      <main className='container'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
