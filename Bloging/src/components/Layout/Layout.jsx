import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='max-w-360 m-auto'>
       <Navbar/>
         <div>{children}</div>
         <Footer/>
    </div>
   
  )
}

export default Layout