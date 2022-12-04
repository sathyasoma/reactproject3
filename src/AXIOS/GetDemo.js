

import React, { Component } from 'react'
import axios from 'axios'



 class GetDemo extends Component {
     
      constructor(props){
        super(props)

        this.state={
            posts:[],
            errormsg:''

        }
      }

componentDidMount(){

axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {console.log(response)
       this.setState({
        posts:response.data
       })
    })
     .catch(error => {console.log(error)
      this.setState({errormsg:"error retriivng data"})
    })

}
  render() {

    const {posts, errormsg}=this.state

    return (
      <div>
      Welcome to axios

      {
        posts.length ?
        posts.map(post => <li key={post.id}> {post.title}</li>):null
      }

      {errormsg ? <div>{errormsg}</div> : null}
      </div>
    )
  }
}

export default GetDemo;