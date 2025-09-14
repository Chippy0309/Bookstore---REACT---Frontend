import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [status, setStatus] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const desktopRef = useRef(null)
  const mobileRef = useRef(null)

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setDesktopDropdownOpen(false)
    setMobileDropdownOpen(false)
    navigate('/') 
  }

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopRef.current && !desktopRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false)
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Top Header Section */}
      <div className="md:grid grid-cols-3 p-3 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://openclipart.org/download/275692/1489798288.svg"
            alt="Bookstore"
            className="w-12 h-12"
          />
          <h1 className="text-2xl md:hidden ms-2">BOOK STORE</h1>
        </div>

        {/* Large Screen Title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl">BOOK STORE</h1>
        </div>

        {/* Social Icons + Desktop Dropdown */}
        <div className="md:flex justify-end items-center hidden relative" ref={desktopRef}>
          <FontAwesomeIcon icon={faInstagram} className="me-3 cursor-pointer hover:text-pink-500" />
          <FontAwesomeIcon icon={faTwitter} className="me-3 cursor-pointer hover:text-blue-500" />
          <FontAwesomeIcon icon={faFacebook} className="me-3 cursor-pointer hover:text-blue-700" />

          {/* Profile */}
          <div className="relative ms-3">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border cursor-pointer"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
            />
            {desktopDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDesktopDropdownOpen(false)}
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" /> Login
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faPowerOff} className="mr-2" /> Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="p-3 w-full bg-gray-900 text-white">
        {/* Mobile Menu Toggle */}
        <div className="flex justify-between px-3 md:hidden">
          <span onClick={() => setStatus(!status)} className="text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </span>

          {/* Mobile Dropdown */}
          <div className="relative" ref={mobileRef}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border cursor-pointer"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            />
            {mobileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" /> Login
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faPowerOff} className="mr-2" /> Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex justify-center hidden">
          <Link to="/"><li className="mx-4 cursor-pointer hover:text-gray-400">Home</li></Link>
          <Link to="/all-books"><li className="mx-4 cursor-pointer hover:text-gray-400">Books</li></Link>
          <Link to="/careers"><li className="mx-4 cursor-pointer hover:text-gray-400">Careers</li></Link>
          <Link to="/contact-us"><li className="mx-4 cursor-pointer hover:text-gray-400">Contact</li></Link>
        </ul>

        {/* Mobile Dropdown Menu */}
        {status && (
          <ul className="flex flex-col items-center mt-3 md:hidden">
            <Link to="/"><li className="my-2 cursor-pointer hover:text-gray-400">Home</li></Link>
            <Link to="/all-books"><li className="my-2 cursor-pointer hover:text-gray-400">Books</li></Link>
            <Link to="/careers"><li className="my-2 cursor-pointer hover:text-gray-400">Careers</li></Link>
            <Link to="/contact-us"><li className="my-2 cursor-pointer hover:text-gray-400">Contact</li></Link>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Header
