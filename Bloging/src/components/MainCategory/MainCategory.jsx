import React from 'react'
import { Link } from 'react-router-dom'
import CatgoryPage from '../../pages/Category/Category'
import styled from 'styled-components'

const MainCategoryStyle = styled.div`
  display:flex;
  gap:20px;
  a{
        width: 500px;
    height: 350px;

    img{
         width: 100%;
    object-fit: contain;
    height: 100%;
    }

    button{
          padding: 4px 16px;
    top: 50%;
    background: #fff;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  }
`;

const MainCategory = () => {
  return (
    <MainCategoryStyle>
      <Link to="/tech" className='relative'>
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <button className='absolute'>TECH</button>
     </Link>
    <Link to="/tech" className='relative'>
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <button className='absolute'>TECH</button>
     </Link>

    <Link to="/tech" className='relative'>
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <button className='absolute'>TECH</button>
     </Link>
    </MainCategoryStyle>
  )
}

export default MainCategory