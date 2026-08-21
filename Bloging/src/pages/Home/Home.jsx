import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/FirebaseConfig";
import Comment from "../Admin/Comment/Comment";
import Blog from "../Blog/Blog";
import Layout from "../../components/Layout/Layout";
import HeroSection from "../../components/HeroSection/HeroSection";
import styled from "styled-components";
import MainCategory from "../../components/MainCategory/MainCategory";
import AboutMyself from "../../components/AboutMyself/AboutMyself";

const HomeStyle = styled.div`
  .blog-section-inner {
  
    flex-wrap: wrap;
    gap: 10px;
    @media screen and (min-width:768px){
        display: flex;

    }

    .content {
      display: -webkit-box;
      -webkit-line-clamp: 3; /* kitni lines dikhani hain */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .heading {
      display: -webkit-box;
      -webkit-line-clamp: 2; /* kitni lines dikhani hain */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .blog-card {
    
    width: 100%;
    @media screen and (min-width:768px){
      max-width: calc(50% - 20px);
    }
    img {
      width: 70%;
      height: 100%;
      object-fit: contain;
      @media screen and (min-width: 1260px) {
        width: 100%;
     
      }
    }
  }
  .blog-container {
    margin: auto;
    margin-top: 50px;
    padding: 0px 32px;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HomeStyle>
        <HeroSection />

        <div className="max-w-[1320px] blog-container">
          <MainCategory />
          <div className="lg:flex">
            <Blog />
            <AboutMyself />
          </div>
        </div>
      </HomeStyle>
    </Layout>
  );
};

export default Home;
