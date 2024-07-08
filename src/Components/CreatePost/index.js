
import React, { Component } from 'react'
import PostContext from '../../context/PostContext';
import './index.css'
 class CreatePost extends Component {

state ={
    title: '',
    content:'',
    error:'',
    success: '',
    
    
}

handlerSubmit = (event, addPost) => {
    event.preventDefault()
    const {title, content} = this.state 
    if (title.trim() ==="" || content.trim()===""){
      this.setState({error:'Both fields are required', success:''})
      return;
    }
    
    const newPost = {title, content};
    addPost(newPost) 


    this.setState ({ title: '',content: '', error:'', success: 'Post created successfully'});

    setTimeout (()=>{
      this.setState({
        success:'',
      });
    },3000);  





};





handlerInput = (event) => {
   
    const {name, value} = event.target;
    this.setState({
        [name]:value,
        error: '',
        success:'',
    })
    
}


  render() {
    const {title, content, error , success} = this.state
    
    return (

  <PostContext.Consumer>
  {({addPost})=>(

<form className='form-container'  onSubmit={(e)=>this.handlerSubmit(e, addPost)}>
  <h1>WYLO</h1>
 
<input
className='input'
type = "text"
placeholder='Title'
name='title'
value = {title}
onChange={this.handlerInput}

/><br/> <br/>
<textarea
type="text"
className='text-area'
placeholder='Content'
name='content'
value={content}
onChange={this.handlerInput}

 /> <br/> <br/>
  {error &&<p className='error'>* *{error}* *</p>}
  {success && <p className='success'> {success} </p>}
 <button type='submit' className='button'> Create Post</button>

 </form>






  )}


  </PostContext.Consumer>
    )
  }
}

export default CreatePost;