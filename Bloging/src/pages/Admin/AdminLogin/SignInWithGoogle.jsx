import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, db } from '../../../Firebase/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const SignInWithGoogle = () => {
    function googleLogin(){
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt:"select_account",
        });
        console.log("Current User==>",auth.currentUser);
        signInWithPopup(auth,provider).then(async(result)=>{
            console.log("Result from Google Login",result);
            const user = result.user;
            if(result.user){
                await setDoc(doc(db,"Users",user.uid),{
                              email:user.email,
                              firstName:user.displayName,
                              lastName:"",
                              photo:""
                            });
                window.location.href="/dashboard"
            }
        })
    }
  return (
    <div>
        <span>Or sign in with</span>
         <p onClick={googleLogin}>Gmail Login</p>
    </div>
  )
}

export default SignInWithGoogle