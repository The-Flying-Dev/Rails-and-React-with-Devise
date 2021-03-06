import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {

  state = {
    posts: []
  }

  //makes fetch request and updates state when promise is completed

  componentDidMount() {
    fetch('/api/v1/posts')
      .then(posts => posts.json())
      .then(posts => {
        this.setState({
          posts: posts
        })
      })
  }

  //return html
  
  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div key={post.id}> 
          {post.title} - {post.description}
        </div>
      )
    })
  }

  
  render() {
    return (
      <div>
        PostList Component
        {this.renderPosts()}
        <Link to="/posts/new">Add a New Post</Link>
      </div>
    )
  }
}

export default PostList