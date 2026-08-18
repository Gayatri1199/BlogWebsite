import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { db } from '../../Firebase/FirebaseConfig';
import Comment from '../Admin/Comment/Comment';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutMyself from '../../components/AboutMyself/AboutMyself';
import styled from 'styled-components';

const BlogInfoStyle = styled``;

const BlogInfo = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const getBlog = async () => {
  const docRef = doc(db, "userDataForBlog", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setBlog({
      id: docSnap.id,
      ...docSnap.data(),
    });
  }
};

useEffect(() => {
  getBlog();
}, [id]);
 return (
  <div>
    <HeroSection/>
    <div className='blog-container flex gap-10 max-w-[1300px] m-auto mt-10'>
      {blog && (
      
        <BlogInfoStyle><img src={blog.ImageUrl} alt="" />

        <h1>{blog.Heading}</h1>

        <p>{blog.AuthorName}</p>

        <p>{blog.Category}</p>

        <p>{blog.Content}</p>

        <Comment postId={blog.id} /></BlogInfoStyle>
        
      
    )}
    <AboutMyself/>
    </div>
    
  </div>
);
}

export default BlogInfo