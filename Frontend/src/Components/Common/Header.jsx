import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from '../Common/Navbar'

const Header = () => {
  return (
    <header className='border-b-2 border-gray-200'>
        {/*  Topbar */}
        <Topbar />

        {/*  Navbar */}
        <Navbar />        

        {/*  Cart Drawer */}
    </header>
  )
}

export default Header