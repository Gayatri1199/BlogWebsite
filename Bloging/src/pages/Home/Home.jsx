import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/FirebaseConfig'

const Home = () => {
  const [data,setData] = useState();
 
  useEffect(()=>{
    const getData =async ()=>{
      try{
         const blogRef = collection(db,"userDataForBlog");
        const q = query(blogRef,orderBy("CreatedAt"));
        const querySnapshot =await getDocs(q); 
         const fetchedData= querySnapshot.docs.map((doc)=>{
          const userData = doc.data();
          return{
            id:doc.id,
            ...userData
          };
         })
        console.log(fetchedData);
         setData(fetchedData);
         
          
      }catch(error){
        console.log("Error From Homepage==>",error)
      }

     
    }
    getData();
},[])
  return (
    <div>
      {
        data ? <>
          {
            data.map((data)=>{
              return<>
                <h1>NAme : {data.AuthorName}</h1>
                <p>Category : {data.Category}</p>
                <h2>Heading: {data.Heading}</h2>
                <p>Content : {data.Content}</p>
              </>
            })
          }
        </> : null
      }
        {console.log("DATA===>",data)}
    
  </div>
  )
}

export default Home