import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../../Firebase/FirebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInWithGoogle from "./SignInWithGoogle";

const AdminLoginStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  a{
    width: 100%;
    display: block;
    text-align: right;
    max-width: max-content;
    margin-left: auto;
  }
`;

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Login Successfully");
      window.location.href = "/dashboard";
      // form.reset();
    } catch (error) {
      console.log("Error from Login==>", error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[330px] tab:w-[500px]">
        <h1 className="mb-3">SIGN IN</h1>
        <h2>Email </h2>
        <input
          type="email"
          className="w-full my-3 pb-3 border-b border-b-[#e7e7e7]"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
        />
        <h2>Password</h2>
        <input
          type="password"
          className="w-full my-3 pb-3 border-b border-b-[#e7e7e7]"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
        />
        <a href="/forgotPassword">Forgot Password?</a>
        <button type="submit" className="w-full p-5 bg-[#ea9497] text-white mt-5">Submit</button>
       
      </form>
      <SignInWithGoogle />
      
    </div>
  );
}

function Register() {
  toast.success("You are registered now!!!", { position: "top-center" });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredentials.user, {
        displayName: `${fname} ${lname}`,
      });
      const user = auth.currentUser;
      console.log("User==>", user);

      toast.success("You are registered now!!!", { position: "top-center" });

      if (user) {
        console.log("Entered in User");
        window.location.href = "/dashboard";
        await setDoc(doc(db, "Users", user.uid), {
          email: userCredentials.user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
        // form.reset();
      }
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: "top-center" });
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  return (
    <>
      <form onSubmit={handleRegister} className="w-[500px]">
        <h1 className="mb-3">SIGN UP</h1>
        <h2 className="text-xs">FirstName </h2>
        <input
          className="w-full my-3 pb-3 border-b border-b-[#e7e7e7]"
          type="text"
          placeholder="First name"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
            console.log(e.target.value);
          }}
        />
        <h2>LastName</h2>
        <input
          className="w-full my-3 border-b border-b-[#e7e7e7]"
          type="text"
          placeholder="First name"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
            console.log(e.target.value);
          }}
        />

        <h2>Email </h2>
        <input
          className="w-full my-3 border-b border-b-[#e7e7e7]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
        />
        <h2>Password</h2>
        <input
          className="w-full my-3 border-b border-b-[#e7e7e7]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-full p-5 bg-[#ea9497] text-white my-5"
        >
          Submit
        </button>
      </form>
    </>
  );
}

const AdminLogin = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <AdminLoginStyle>
      <>
        {showLogin ? (
          <>
            <Register />
            <p>
              Already a user ?{" "}
              <span onClick={() => setShowLogin(false)}>Login</span>
            </p>
          </>
        ) : (
          <>
            <LogIn />
             <p onClick={() => setShowLogin(true)}>Or Get Registered with us!!</p>
          </>
        )}
      </>
    </AdminLoginStyle>
  );
};

export default AdminLogin;
