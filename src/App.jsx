import './App.css'
import Header from './users/components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import PageNotFound from './pages/PageNotFound'
import Preloader from './components/PreLoader'
import React, { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) // 5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      
    </>
  )
}

export default App
