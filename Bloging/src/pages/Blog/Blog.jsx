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
    <div>
      {data ? (
        <>
          {data.map((data) => {
            return (
              <div key={data.id} onClick={() => navigate(`/bloginfo/${data.id}`)}>
                <h1>NAme : {data.AuthorName}</h1>
                <p>Category : {data.Category}</p>
                <h2>Heading: {data.Heading}</h2>
                <p>Content : {data.Content}</p>
                <Comment postId={data.id} />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default Blog;
