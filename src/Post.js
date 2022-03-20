import React,{useEffect, useState} from 'react'
import vplex from './images/vplex.png'
import './Post.css'
import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import { Avatar } from '@mui/material';
import {db ,rdb,storage} from './firebase';
import { collection, doc, getDocs, setDoc } from "firebase/firestore"; 

function Post({username,postId, caption, imageurl,timestamp}) {
  const [comment, setcomment] = useState([]);
  useEffect(()=>{
    let unsuscribe;
    if(postId){
      //const db = firebase.firestore();

      unsuscribe =  db.collection("photos").doc(postId).collection("comments").onSnaphot((snapshot)=>{
        setcomment(snapshot.docs.map((doc)=>doc.data()));
      })
    //   let colref= doc(collection(db, "photos",postId));
    //   unsuscribe= getDocs(colref).then(snapshot=>{
    //     setcomment(snapshot.docs.map(doc =>doc.data()))
    // })
  }
})
  return (
    <div className ="post">
      <div className = "post_header">
          <Avatar
            className="post_avatar"
            alt = 'RafehQazi'
            src = {vplex}
            />
            <h3>{username}</h3>
      </div>
            <img src={imageurl} className="post_image" />
            <h4 className="post_test">{caption}</h4><h6 className="time">{timestamp}</h6>
    </div>
  )
}
export default Post;