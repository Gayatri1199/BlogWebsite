import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const NavbarStyle=styled.div`
  box-shadow: rgb(100 100 111 / 8%) 0px 7px 29px 0px;
  img{
    max-width:400px;
    margin:auto;
    margin-top:40px;
  }

  .img-url{
    margin:0 auto;
  }

  .navs{
    margin-top:40px;
  }
  
`;

function Navbar() {
  return (
    <NavbarStyle>
      <div className='p-5 bg-black text-white'></div>
      <Link to="/" className='max-w-max d-block img-url'>
        <img src="https://cheerup2.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/logo-2x.png"/>
      </Link>
      <div className='p-4 border-t border-[#e7e7e9] navs flex justify-center gap-x-36'>
        <Link className='text-sm'>HOME</Link>
        <Link className='text-sm'>ABOUT</Link>
        <Link className='text-sm'>TRAVEL</Link>
        <Link className='text-sm'>LIFESTYLE</Link>
      </div>
    
    </NavbarStyle>
  )
}

export default Navbar