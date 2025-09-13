import React, { useState } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div id='loginPage' className='flex justify-center items-center min-h-screen bg-gray-800'>
      <div className='md:grid grid-cols-3 w-full'>
        <div></div>
        
        <div className='flex justify-center items-center flex-col'>
          {/* Title */}
          <h1 className='text-3xl mb-5 text-gray-300'>BOOK STORE</h1>
          
          {/* Auth Card */}
          <form className='w-full bg-gray-900 p-10 flex justify-center items-center flex-col rounded-sm'>
            
            {/* User Icon */}
            <div 
              style={{width:'70px', height:'70px', borderRadius:'50%'}} 
              className='border border-white flex justify-center items-center'
            >
              <FontAwesomeIcon icon={faUser} className='text-white fa-2x' />
            </div>
            
            {/* Heading */}
            <h1 className='text-white mt-6 text-3xl mb-6'>
              {isRegister ? 'Register' : 'Login'}
            </h1>
            
            {/* Input Fields */}
            {isRegister && (
              <div className="mb-5 w-full">
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="p-2 rounded placeholder-gray-600 bg-white w-full" 
                />
              </div>
            )}

            <div className="mb-5 w-full">
              <input 
                type="text" 
                placeholder="Email" 
                className="p-2 rounded placeholder-gray-600 bg-white w-full" 
              />
            </div>

            <div className="mb-5 w-full">
              <input 
                type="password" 
                placeholder="Password" 
                className="p-2 rounded placeholder-gray-600 bg-white w-full" 
              />
            </div>

            {/* Remember + Forgot Password (only in Login mode) */}
            {!isRegister && (
              <div className="mb-5 w-full flex justify-between">
                <p className="text-amber-400 text-sm">* Never share the password with others</p>
                <p className="text-white underline text-sm cursor-pointer">Forgot password?</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mb-2 w-full">
              <button className="bg-green-800 text-white w-full p-3 rounded">
                {isRegister ? 'Register' : 'Login'}
              </button>
            </div>

            {/* Divider (only in Login mode) */}
            {!isRegister && (
              <>
                <p className="text-white my-2">------------------- or -------------------</p>
                <div className="mb-5 mt-3 w-full">
                  <button className="bg-white text-black w-full p-3 rounded">
                    Sign in with Google
                  </button>
                </div>
              </>
            )}

            {/* Switch Auth Mode (Bottom Line) */}
            <p 
              className="text-white cursor-pointer mt-4"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister 
                ? <>Already have an account? <span className="text-blue-400">Login</span></>
                : <>Are you a New User? <span className="text-blue-400">Register</span></>}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
