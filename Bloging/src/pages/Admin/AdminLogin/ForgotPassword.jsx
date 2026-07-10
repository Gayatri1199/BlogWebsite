import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../../Firebase/FirebaseConfig';

const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const handlePasswordReset = async(e)=>{
        alert("Aagye bhai yaha forgot pasword m")
        try{
            await sendPasswordResetEmail(auth,email)
        }catch(error){
            console.log("Error from forgot Password==>",error)
        }
    }
  return (
    <div>
        <form onSubmit={handlePasswordReset}>
            <input type="email" placeholder="Enter your mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button >Reset Link</button>
        </form>
    </div>
  )
}

export default ForgotPassword