import './styles/App.css'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './components/Header'  
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'



function App() {

  return (
    <div className='app'>
      <Header />
      <ScrollToTop />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
