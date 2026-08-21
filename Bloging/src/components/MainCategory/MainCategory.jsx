import React from "react";
import { Link } from "react-router-dom";
import CatgoryPage from "../../pages/Category/Category";
import styled from "styled-components";

const MainCategoryStyle = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-direction:column;
  @media screen and (min-width:768px){
    flex-direction:row;
  }
  a {
    width: 350px;
    height: 160px;
    @media screen and (min-width: 1260px) {
      height: 350px;
       width: 500px;
    }

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }

    button {
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
      <Link to="/tech" className="relative">
        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <button className="absolute">TECH</button>
      </Link>
      <Link to="/fashion" className="relative">
        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <button className="absolute">FASHION</button>
      </Link>

      <Link to="/sports" className="relative">
        <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=3107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <button className="absolute">SPORTS</button>
      </Link>
    </MainCategoryStyle>
  );
};

export default MainCategory;
