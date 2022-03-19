import React from 'react'
import vplex from './images/vplex.png'
import './Post.css'
import { Avatar } from '@mui/material'
function Post({username, caption, imageurl}) {
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
            <h4 className="post_test">{caption}</h4>
    </div>
  )
}
export default Post;