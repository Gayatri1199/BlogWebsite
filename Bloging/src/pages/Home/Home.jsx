import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/FirebaseConfig'
import Comment from '../Admin/Comment/Comment';
import Blog from '../Blog/Blog';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
     
      <Blog/>
      
    
  </Layout>
  )
}

export default Home