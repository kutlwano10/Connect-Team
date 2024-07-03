import React from 'react'
import Header from './Header'
import Profiles from './Profiles'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>
        <main className='bg-gray-50 p-2 mt-10'>
            <Profiles />
        </main>
        <Outlet/>
      
    </div>
  )
}

export default Layout
