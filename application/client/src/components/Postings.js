import React from 'react';


class Postings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`/getPosts`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
      })

      const json = await response.json(); 
      console.log(json.posts); 
      this.setState({
        post: json.posts
      })
  }

  render(){
    return (
      <div>
        <ol>{this.state.post.map(post => {
          <li key={post}>{post}</li>
        })}</ol>
        <label>
          Type The post here:
          <input type="text"></input>
        </label>
      </div>
    )
  }
}

export default Postings