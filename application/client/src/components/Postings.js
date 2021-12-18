import React from 'react';


class Postings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      body: ""
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

  handlePostChange = (event) => {
    this.setState({body: event.target.value})
  }

  submitPost(event) {
    console.log(this.state.body)
    this.state.post.push(this.state.body)
    this.setState.body = " "
    event.preventDefault()

  }


  render(){
    return (
      <div>
        <ol>{this.state.post.map(post => {
          <li key={post}>{post}</li>
        })}</ol>
        <label>
          Type The post here:
          
          <input type="text" value={this.state.body} onChange={this.handlePostChange}></input>
          <button type="button" onClick={this.submitPost}>Submit</button>
        </label>
      </div>
    )
  }
}

export default Postings