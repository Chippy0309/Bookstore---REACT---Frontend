import './App.css'
import Header from './users/components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import PageNotFound from './pages/PageNotFound'
import Preloader from './components/PreLoader'
import React, { useState, useEffect } from 'react'
import Careers from './users/pages/Careers'
import ContactUs from './pages/ContactUs'
import Profile from './users/pages/Profile'

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
        <Route path='/register' element={<Auth register />} />
        <Route path='/all-Books' element={<AllBooks />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      
    </>
  )
}

export default App
