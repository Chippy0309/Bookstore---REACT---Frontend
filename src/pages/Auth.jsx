import React from 'react'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Auth = () => {
  return (
    <div id='loginPage' className='flex justify-center items-center '>
      <div className='md:grid grid-cols-3 w-full'>
        <div></div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl mb-5 text-grey'>BOOK STORE</h1>
            <form className='w-full bg-gray-900 p-10 flex justify-center items-center flex-col rounded-b-sm'>
                <div style={{width:'70px',height:'70px', borderRadius:'50%'}} className='border border-white flex justify-center items-center'>
                    <FontAwesomeIcon icon={faCircleUser} className='text-white fa-3x' />
                </div>
                <h1 className='text-white mt-6 text-3xl'>Login</h1>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default Auth
