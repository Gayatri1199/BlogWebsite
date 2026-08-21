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
    gap:25px;
    @media screen and (min-width:768px){
      gap:80px;
    }
  }
  
`;

function Navbar() {
  return (
    <NavbarStyle>
      <div className='p-5 bg-black text-white'></div>
      <Link to="/" className='max-w-max d-block img-url'>
        <img src="https://cheerup2.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/logo-2x.png"/>
      </Link>
      <div className='p-4 border-t border-[#e7e7e9] navs flex justify-center desk:gap-x-36'>
        <Link className='text-sm' to="/">HOME</Link>
        <Link className='text-sm' to="/about">ABOUT</Link>
        <Link className='text-sm' to="/tech">TRAVEL</Link>
        <Link className='text-sm' to="/tech">LIFESTYLE</Link>
        <Link className='text-sm' to="/adminLogin">Login/SignUp</Link>

      </div>
    
    </NavbarStyle>
  )
}

export default Navbar