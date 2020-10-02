import React, { Component } from 'react'
import axios from 'axios'
export default class Post extends Component {
  state = {
    id: null
  }
  componentDidMount(){
   
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    .then(res =>{
      this.setState({
        post: res.data
      })
  
    })
    
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4>{this.state.id}</h4>
        </div>
      </div>
    )
  }
}
