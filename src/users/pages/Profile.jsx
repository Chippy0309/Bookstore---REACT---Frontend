import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  return (
    <>
      <Header />

      {/* Header background */}
      <div className="bg-gray-900 h-48 w-full relative"></div>

      {/* Profile image overlapping header */}
      <div className="relative w-full flex justify-start">
        <div className="w-50 h-50 rounded-full bg-white p-1 -mt-20 ml-16 flex items-center justify-center shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name with verified icon */}
      <div className="flex items-center px-20 mt-4 mb-4 space-x-2">
        <span className="text-3xl">Lakshmi Priya</span>
        <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500 text-xl" />
      </div>

      <Footer />
    </>
  )
}

export default Profile
