//PostList.js
import React, { Component } from 'react';
import Post from './post';
import style from './style';

class PostList extends Component {
  render() {
    let postNodes = this.props.data.map(post => {
      return (
        <Post
            author={ post.author } 
            email = { post.email }
            uniqueID = {post['_id']}
            onPostDelete = { this.props.onPostDelete }
            onPostUpdate = { this.props.onPostUpdate }
            key={ post['_id'] }>
            { post.message }
        </Post>
      )
    })
    return (
      <div>
        { postNodes }
      </div>
    )
  }
}

export default PostList;