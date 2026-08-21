import React, { useEffect, useState } from "react";
import { auth, db } from "../../../Firebase/FirebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import CreateBlog from "../CreateBlog/CreateBlog";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState();
  const [data, setData] = useState();
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setUserDetails(user);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogOut() {
    try {
      await auth.signOut();
      window.location.href = "/";
      alert("User LoggedOut Successfully");
    } catch (error) {
      alert("Error Logging out", error.message);
    }
  }
  return (
    <div className="max-w-[1200px] mx-auto my-10 px-8">
      {userDetails ? (
        <div>
          <div className="flex gap-5 items-center">
            <div className="image-section">
            {userDetails.photoURL === null ? (
              ""
            ) : (
              <img src={userDetails.photoURL} alt="User Image" />
            )}
          </div>
          <div className="detail-section">
            <p>
              Name : {userDetails.firstName} {userDetails.lastName}{" "}
              {userDetails.displayName}
            </p>
            <p>Email: {userDetails.email}</p>
            <button onClick={handleLogOut} className="py-1 px-5 bg-red-400 text-white mt-4">Logout</button>
          </div>
          </div>
          
          <CreateBlog page="dashboard" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
