import React, { useState } from 'react'
import styled from 'styled-components';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth,db} from "../../../Firebase/FirebaseConfig";
import {setDoc,doc} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import SignInWithGoogle from './SignInWithGoogle';

// const AdminLoginStyle = styled.div``;



 function LogIn(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const handleSubmit=async (e)=>{
      e.preventDefault();
      try{
        await signInWithEmailAndPassword(auth,email,password);
        console.log("User Login Successfully");
        window.location.href="/dashboard";
        // form.reset();
      }catch(error){
        console.log("Error from Login==>",error.message)
      }
      
    }
    return(
      <>
        <form onSubmit={handleSubmit}>
        <h2>Email </h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value)}}/>
        <h2>Password</h2>
         <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value)}}/>
         <button type='submit'>Submit</button>
      </form>
      <SignInWithGoogle/>
      </>
      
    )
  }
 

    function Register(){
      toast.success("You are registered now!!!",{position:"top-center"});
      const handleRegister= async (e)=>{
        e.preventDefault();
        try{
          const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
          await updateProfile(userCredentials.user, {
            displayName: `${fname} ${lname}`,
          });
          const user = auth.currentUser;
          console.log("User==>",user);
         
          toast.success("You are registered now!!!",{position:"top-center"});
         
          
          if(user){
            console.log("Entered in User")
            await setDoc(doc(db,"Users",user.uid),{
              email:userCredentials.user.email,
              firstName:fname,
              lastName:lname
            });
            // form.reset();
          }

        }catch(error){
          console.log(error.message);
           toast.success(error.message,{position:"top-center"})
        }
  }

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[fname,setFname] = useState("");
  const[lname,setLname] = useState("");
    return(
      <>
        <form onSubmit={handleRegister}>
          <h2>FirstName </h2>
        <input type="text" placeholder="First name" value={fname} onChange={(e)=>{setFname(e.target.value); console.log(e.target.value)}}/>
        <h2>LastName</h2>
         <input type="text" placeholder="First name" value={lname} onChange={(e)=>{setLname(e.target.value); console.log(e.target.value)}}/>

        <h2>Email </h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value)}}/>
        <h2>Password</h2>
         <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value)}}/>
         <button type='submit'>Submit</button>
      </form>
      
      </>
      
    )
  }


const AdminLogin = () => {
  

  

 



  return (
    // <AdminLoginStyle>
    <>
      {/* <Register/> */}
      <LogIn/>
    </>
    // </AdminLoginStyle>
  )
}

export default AdminLogin