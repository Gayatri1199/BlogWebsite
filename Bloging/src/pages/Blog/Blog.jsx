import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/FirebaseConfig";
import Comment from "../Admin/Comment/Comment";

const Blog = ({ category }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  console.log("Category From blog==>", category);
  useEffect(() => {
    const getData = async () => {
      try {
        const blogRef = collection(db, "userDataForBlog");
        let q;

        if (category) {
          q = query(
            blogRef,
            where("Category", "==", category),
            orderBy("CreatedAt", "desc"),
          );
        } else {
          q = query(blogRef, orderBy("CreatedAt", "desc"));
        }

        const querySnapshot = await getDocs(q);
        const fetchedData = querySnapshot.docs.map((doc) => {
          const userData = doc.data();
          return {
            id: doc.id,
            ...userData,
          };
        });
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.log("Error From Homepage==>", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="blog-section">
      {data ? (
        <div className="blog-section-inner ">
          {data.map((data) => {
            return (
              <div key={data.id}  className="blog-card relative">
                <p className="text-[#ea9497] font-bold text-center text-xs! mb-3"> <span className="sec-font">By</span> {data.AuthorName}</p>
                <div className="h-[300px] flex items-center justify-center bg-[#d4d4d4]">
                    <img src="https://cheerup2.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/logo-2x.png" className="max-w-[400px] w-[80%]"/>
                </div>
                <h2 className="text-2xl font-bold heading">{data.Heading}</h2>
                <p className="max-w-max p-1 px-3 bg-[#ea9497] text-[#d4d4d4] text-[12px] absolute top-3 right-3">{data.Category}</p>
                <p className="text-[#666] content">{data.Content}</p>
                
               <p onClick={() => navigate(`/bloginfo/${data.id}`)} className="text-[#ea9497] uppercase font-bold max-w-max m-auto my-4">CONTINUE READING</p>
                <Comment postId={data.id} /> 
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
