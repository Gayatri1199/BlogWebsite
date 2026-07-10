import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../Firebase/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [userDetails,setUserDetails] = useState();
  const fetchUserData = async()=>{
    auth.onAuthStateChanged(async(user)=>{
      console.log(user);
      setUserDetails(user);
      // const docRef = doc(db,"Users",user.uid);
      // const docSnap = await getDoc(docRef);
      // if(docSnap.exists()){
      //   setUserDetails(docSnap.data());
      //   console.log("User Details==>",docSnap.data())
      // }
    });
  }

  useEffect(()=>{
    fetchUserData();
  }
  ,[])

  async function handleLogOut() {
    try{
      await auth.signOut();
      window.location.href="/"
      alert("User LoggedOut Successfully")
    }catch(error){
      alert("Error Logging out",error.message)
    }
  }
  return (
    <div>{
        userDetails ? <>
          <p>Name : {userDetails.firstName} {userDetails.lastName}  {userDetails.displayName}</p>
          <p>Email: {userDetails.email}</p>
          <button onClick={handleLogOut}>Logout</button>
        </> : <p>Loading...</p>
      }</div>
  )
}

export default Dashboard