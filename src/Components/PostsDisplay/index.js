import React, { useContext } from 'react';
import PostItem from '../PostItem';
import PostContext from '../../context/PostContext';
import './index.css';
 const PostsDisplay = () => {

const {posts, editPost} = useContext(PostContext)


  return (
    <div className>
      <ul className='list-container'>
        {posts.map((post, index)=>(
          <PostItem key = {index} detailItems={post} onEdit={(updatedPost)=> editPost(index, updatedPost)} />
        ))
        }

      </ul>

    </div>
  )
}

export default PostsDisplay