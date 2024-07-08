import { Component } from "react";
import PostContext from "./PostContext";



class PostsProvider extends Component {
    state = {
        posts: [],

    }

     addPost = (post) =>{
        
       this.setState((prevState)=>({
        posts: [...prevState.posts, post]
       }));


        
    };
  
 editPost = (index, updatedPost) => {
        this.setState((prevState)=>
        ({
            posts:prevState.posts.map((post, i) => 
            (i=== index ? updatedPost:post)),

        }))
    }




  render() {

const {children} = this.props

const {posts} = this.state


    return (
    <PostContext.Provider
    value={{
         posts,
         addPost:this.addPost,
         editPost: this.editPost,

    }}
    
    >
        {children}

    </PostContext.Provider>

     
    )
  }
}

export default PostsProvider
