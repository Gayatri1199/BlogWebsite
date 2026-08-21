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
     
        signInWithPopup(auth,provider).then(async(result)=>{
            
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
        <span className='block text-center'>Or sign in with</span>
         <p onClick={googleLogin} className='text-center'>Gmail Login</p>
    </div>
  )
}

export default SignInWithGoogle