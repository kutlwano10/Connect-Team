import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SearchUser from './pages/SearchUser'
import Profiles from './components/Profiles'
import ProfileInfo from './components/ProfileInfo'
import Settings from './pages/Settings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/profileInfo' element={<ProfileInfo/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/search' element={<SearchUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
