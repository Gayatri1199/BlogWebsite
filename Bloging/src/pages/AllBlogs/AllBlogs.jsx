import React from 'react'
import Layout from '../../components/Layout/Layout'
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard'

const AllBlogs = () => {
  return (
    <Layout>
          <BlogPostCard/>
          <BlogPostCard/>
          <BlogPostCard/>
    </Layout>
   
  )
}

export default AllBlogs