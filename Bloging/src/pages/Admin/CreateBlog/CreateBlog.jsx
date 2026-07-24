import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../../Firebase/FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const CreateBlog = ({page}) => {
  const[heading,setHeading] = useState();
  const[content,setContent] = useState();
  const[image,setImage] = useState(); 
  const [selectedRole, setSelectedRole] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [authorName, setAuthorName] = useState(null);
  const[data,setData] = useState();

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
              console.log("Error From Homepage Dahboard==>",error)
            }
      
           
          }
  const saveDatatoFireStore = async (e) => {
    e.preventDefault();
    try{
      const dbRef = collection(db,"userDataForBlog");
      // const fileRef = ref(storage, `user_images/${Date.now()}_${imageFile}`);
      // const snapshot = await uploadBytes(fileRef, imageFile);
      // const imageUrl = await getDownloadURL(snapshot.ref);
      await addDoc(dbRef,{Heading:heading,Content:content,Category:selectedRole,ImageUrl: "http://images.unsplash.com/photo-1783597165290-8ebe8a01a76e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",AuthorName : authorName,CreatedAt: new Date()})
      getData();
      alert("Blog has been saved");
    }catch(error){
      alert(error)
    }


    
      
    
  }

  const deleteBlog = async (id) => {
  try {
    await deleteDoc(doc(db, "userDataForBlog", id));

    setData((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));

    alert("Blog deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

  

  useEffect(() => {
  getData();
}, []);

  console.log("From createBlog==>",heading,content,image,selectedRole)
  return (
    <div>CreateBlog
      <form onSubmit={saveDatatoFireStore}>
        <input type="text" placeholder="Enter blog heading" value={heading} onChange={(e)=>{setHeading(e.target.value)}}/>
        <input type="text" placeholder="Enter Author Name" value={authorName} onChange={(e)=>{setAuthorName(e.target.value)}}/>
        <textarea placeholder='Enter Blog content' value={content} onChange={(e)=>{setContent(e.target.value)}}/>
        <select id="role-select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
          <option>Select blog category</option>
          <option value="Tech">Tech</option>
          <option value="Sport/Fitness">Sport/Fitness</option>
          <option value="Fashion">Fashion</option>
          <option value="Finance">Finance</option>
          <option value="Academic">Academic</option>
          <option value="Business">Business</option>
        </select>
        <input type='file' value={image} onChange={(e)=>{setImage(e.target.value)}}            accept="image/*" // Restricts picker window to image file types
         />
        <button type='submit'>Submit</button>
      </form>

       {
        data ? <>
          {
            data.map((data)=>{
              return<div key={data.id}>
              <hr/>
                <h1>NAme : {data.AuthorName}</h1>
                <p>Category : {data.Category}</p>
                <h2>Heading: {data.Heading}</h2>
                <p>Content : {data.Content}</p>
                {page==="dashboard" ? <p onClick={()=>{deleteBlog(data.id)}}>DELETE</p> :""}
                
              </div>
            })
          }
        </> : null
      }
    </div>
  )
}

export default CreateBlog