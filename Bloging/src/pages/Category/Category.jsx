import React from 'react'

import Blog from '../Blog/Blog'
import HeroSection from '../../components/HeroSection/HeroSection'
import Layout from '../../components/Layout/Layout'
import AboutMyself from '../../components/AboutMyself/AboutMyself'

const CatgoryPage = ({category}) => {

  return (
    <Layout>
      <HeroSection/>
      <div className="blog-container tab:flex gap-10 max-w-[1300px] m-auto mt-10 px-8">
      <Blog category={category}/>
      <AboutMyself/>
      </div>
    </Layout>
  )
}

export default CatgoryPage