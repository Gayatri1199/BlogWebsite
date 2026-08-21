import React from 'react'
import styled from 'styled-components'
const AboutMyselfStyle = styled.div`
.myself-section{
border:1px solid #e7e7e9;  
border-top:1px solid #ea9497;

h3{
  font-size:12px;
  font-weight:bold;
}


}

p{
  font-size:12px;
  color:#666;
  margin-top:15px;
  padding:0px 15px;
  text-align:center;

}

input{
  padding: 12px 16px;
    border: 1px solid #cdcde2;
    width: 100%;
    margin-top: 22px;
    font-size: 12px;
}

button{
      padding: 12px 16px;
    color: rgb(255, 255, 255);
    background: rgb(234, 148, 151);
    width: 100%;
    font-size: 14px;
    margin-top: 16px;
}
`

;
const AboutMyself = () => {
  return (
    <AboutMyselfStyle className='min-w-[300px]'>
      <div className='myself-section p-6 pt-0 mb-20'>
        <h3 className='text-center py-4'>ABOUT</h3>
        <img src="https://cheerup2.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/Untitled-3.jpg" alt="Author Image" className='w-full'/>
        <p>I'm Shane, a girly girl and lover of life. Join me on the journey to find latest in fashion.</p>
      </div>
      <div className='myself-section mb-20'>
        <h3 className='text-center py-4'>CONNECT & FOLLOW</h3>
      </div>
      <div className='newsletter p-6 bg-[#e7e7e9]'>
         <h3 className='text-center py-4'>NEWSLETTER</h3>
         <p>Enter your email address below to subscribe to my newsletter</p>
         <input type='email' placeholder='Please Enter Your Email'/>
         <button className='p-3'>SUBSCRIBE</button>
      </div>
    </AboutMyselfStyle> 
  )
}

export default AboutMyself