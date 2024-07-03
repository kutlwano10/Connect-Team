import React from 'react'
import Header from './Header'
import Profiles from './Profiles'

const Layout = () => {
  return (
    <div>
        <Header/>
        <main className='bg-gray-50 p-2 mt-10'>
            <Profiles />
        </main>
      
    </div>
  )
}

export default Layout
