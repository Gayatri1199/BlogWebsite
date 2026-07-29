import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase/FirebaseConfig';

const Comment = ({postId}) => {
  const[userName,setUserName] = useState();
  const[text,setText] = useState();
  const[allComments,setAllComments] = useState([])

  useEffect(()=>{
    const q=query(collection(db,'comments'),where('postId',"==",postId),orderBy('createdAt','desc'));
    const unsubscribe = onSnapshot(q,(snapshot)=>{
      const data=snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }))
      setAllComments(data);
    })
    return ()=>unsubscribe();
  },[postId])

  const handleCommentSubmit=async (e)=>{
    e.preventDefault();
    if (!userName.trim() || !text.trim()) return alert("Please fill both field");
    try{
      await addDoc(collection(db,'comments'),{
        postId:postId,
        userName:userName,
        text:text,
        createdAt: serverTimestamp()
      })

    }catch(error){
      console.log("Error in comments==>",error)
    }
  }


  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h3>Comments ({allComments.length})</h3>

      {/* FORM: COMMENT LIKHNE KE LIYE */}
      <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Apna Naam likhein" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <textarea 
          placeholder="Comment likhein..." 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          style={{ padding: '8px', minHeight: '60px' }}
        />
        <button type="submit" style={{ padding: '8px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none' }}>
          Comment Karein
        </button>
      </form>

      {/* LIST: COMMENTS SHOW KARNE KE LIYE */}
      <div style={{ marginTop: '20px' }}>
        {allComments.map((c) => (
          <div key={c.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <strong>{c.userName}</strong>
            <p style={{ margin: '5px 0' }}>{c.text}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Comment