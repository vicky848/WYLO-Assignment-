import React, { Component } from 'react'
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

 class PostItem extends Component {

  state = {
    
    editing: false,
    editTitle: this.props.detailItems.title,
    editContent: this.props.detailItems.content,
    likes:0,
    
  }

  toggleEdit  = () => {
    this.setState({
      editing:!this.state.editing
    })
  }

handlerLikeButton = () => {
  this.setState ((prevSate)=>({
    likes:prevSate.likes+1,
  }));
;
}
handlerTitle = (event) => {
  this.setState ({[event.target.name]: event.target.value})

}
handlerContent = (event) => {
  this.setState ({[event.target.name]: event.target.value})
} 

handelSaveOnclick = () => {
  const {editTitle, editContent} = this.state

  this.props.onEdit({title:editTitle, content:editContent})
  this.toggleEdit();

}





  render() {
    const{detailItems} = this.props 
     
   const {editTitle, editContent, likes,editing}= this.state
    return (
      <li className='list-item'>
      
    { editing ? (
       <div className='edit-container'>
       <input
       name="editTitle"
       className='edit-input'
       value={editTitle}
       onChange={this.handlerTitle}
       />
       <textarea
        type='text'
        className='edit-text-area'
        name="editContent"
        value={editContent}
        onChange={this.handlerContent}
      
       />
       <button className='edit-save-button' onClick={this.handelSaveOnclick}>Save</button>
       <button className='edit-cancel-button' onClick={this.toggleEdit}>Cancel</button>


      </div>
    ): (

      <div className='content-container'>
        <div className='card'>
        <h1>{detailItems.title}</h1>
        <p>{detailItems.content}</p> 
       <div>
       <button className='like-button' onClick={this.handlerLikeButton}>Like ({likes})</button>
        <button className='edit-button' onClick={this.toggleEdit}><FontAwesomeIcon icon={faPen} />
        </button>
        </div>
       </div>


      </div>

    )

    }








    </li>
      
    )
  }
}


export default PostItem







