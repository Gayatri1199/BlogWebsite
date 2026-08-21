import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/FirebaseConfig";
import Comment from "../Admin/Comment/Comment";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMyself from "../../components/AboutMyself/AboutMyself";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";

const BlogInfoStyle = styled.div``;

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
    <Layout>
      <HeroSection />
      <div className="blog-container tab:flex gap-10 max-w-[1300px] m-auto mt-10 px-8">
        {blog && (
          <BlogInfoStyle>
            <p className="text-center mb-3"> In <span className="uppercase italic text-xs text-[#ea9497]">{blog.Category}</span></p>
           
            <h1 className="text-center mb-3 text-2xl">{blog.Heading}</h1>
            <img src={blog.ImageUrl} alt="" className="mb-5"/>

            <p className="text-[#666] leading-loose">{blog.Content}</p>
             <p className="text-center my-3"><span className="uppercase font-bold text-xs text-[#ea9497] block">AUTHOR</span> {blog.AuthorName}</p>
            <Comment postId={blog.id} />
          </BlogInfoStyle>
        )}
        <AboutMyself />
      </div>
    </Layout>
  );
};

export default BlogInfo;
