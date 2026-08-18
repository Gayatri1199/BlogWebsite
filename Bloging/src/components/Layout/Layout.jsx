import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const LayoutStyle = styled.div`
  max-width:1440px;
  margin:0 auto;
`;

const Layout = ({children}) => {
  return (
    <LayoutStyle>
       <Navbar/>
         <div>{children}</div>
         <Footer/>
    </LayoutStyle>
   
  )
}

export default Layout