import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Dashboard/home'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import Integrations from './pages/Dashboard/Integrations'
import Help from './pages/Dashboard/Help'
import Findings from './pages/Dashboard/Findings'
import Members from './pages/Dashboard/Members'
import MarketPlace from './pages/Dashboard/MarketPlace'
import Inventory from './pages/Dashboard/Inventory'
import Policies from './pages/Dashboard/Policies'

const App = () => {
  const [loading, setLoading] = useState(true)

  const preloader = document.getElementById('preloader')

  if(preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/integrations' element={<Integrations />} />
          <Route exact path='/help' element={<Help />} />
          <Route exact path='/findings' element={<Findings />} />
          <Route exact path='/members' element={<Members />} />
          <Route exact path='/marketplace' element={<MarketPlace />} />
          <Route exact path='/inventory' element={<Inventory />} />
          <Route exact path='/policies' element={<Policies />} />
          {/* <Route path='/profile' element={<Profile />} />
          <Route path='/forms/form-elements' element={<FormElements />} />
          <Route path='/forms/form-layout' element={<FormLayout />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/ui/alerts' element={<Alerts />} />
          <Route path='/ui/buttons' element={<Buttons />} /> */}
          <Route exact path='/auth/signin' element={<SignIn />} />
          <Route exact path='/auth/signup' element={<SignUp />} />
        </Routes>
      </>
    )
  )
}

export default App
