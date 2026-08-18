import React from 'react'
import styled from 'styled-components'

const HeroSectionStyle = styled.div`
max-height:500px;
overflow:hidden;
position:relative;
img{
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.content{
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
     width: 100%;
    text-align: center;
}

p{
  font-family: "Edu NSW ACT Cursive", cursive;
  font-size:100px;
}
`;

const HeroSection = () => {
  return (
    <HeroSectionStyle>
      <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className='content'>
        <h1 className='font-bold text-xl tracking-widest'>BLOGING...</h1>
        <p>Write your Heart Out!!!!</p>
      </div>
    </HeroSectionStyle>
  )
}

export default HeroSection