import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' // ✅ Import Link

const Header = () => {
  const [status, setStatus] = useState(false)

  return (
    <>
      {/* Top Header Section */}
      <div className="md:grid grid-cols-3 p-3 items-center">
        {/* Logo + Small Screen Title */}
        <div className="flex items-center">
          <img
            src="https://openclipart.org/download/275692/1489798288.svg"
            alt="Bookstore"
            style={{ width: '50px', height: '50px' }}
          />
          <h1 className="text-2xl md:hidden ms-2">BOOK STORE</h1>
        </div>

        {/* Large Screen Title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl">BOOK STORE</h1>
        </div>

        {/* Social Icons + Login (Visible on md and above) */}
        <div className="md:flex justify-end items-center hidden">
          <FontAwesomeIcon
            icon={faInstagram}
            className="me-3 cursor-pointer hover:text-pink-500"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="me-3 cursor-pointer hover:text-blue-500"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="me-3 cursor-pointer hover:text-blue-700"
          />

          {/* ✅ Login routes to /login */}
          <Link
            to="/login"
            className="border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Login
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="p-3 w-full bg-gray-900 text-white">
        {/* Mobile Menu Toggle */}
        <div className="flex justify-between px-3 md:hidden">
          <span
            onClick={() => setStatus(!status)}
            className="text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faBars} />
          </span>

          {/* ✅ Mobile Login routes to /login */}
          <Link
            to="/login"
            className="border border-white rounded px-3 py-2 ms-3 flex items-center"
          >
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Login
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex justify-center hidden">
          <Link to={'/'}><li className="mx-4 cursor-pointer hover:text-gray-400">Home</li></Link>
          <Link to={'/all-Books'}><li className="mx-4 cursor-pointer hover:text-gray-400">Books</li></Link>
          <li className="mx-4 cursor-pointer hover:text-gray-400">Career</li>
          <li className="mx-4 cursor-pointer hover:text-gray-400">Contact</li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {status && (
          <ul className="flex flex-col items-center mt-3 md:hidden">
            <Link to={'/'}><li className="my-2 cursor-pointer hover:text-gray-400">Home</li></Link>
            <Link to={'/all-Books'}><li className="my-2 cursor-pointer hover:text-gray-400">Books</li></Link>
            <li className="my-2 cursor-pointer hover:text-gray-400">Career</li>
            <li className="my-2 cursor-pointer hover:text-gray-400">Contact</li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Header
