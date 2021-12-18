import React from 'react';
import './Posting.css';

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
    // function to map the array 
    const {post} = this.state;
    // const postArray = post.map((postss => 
    //   <div class="posting">{postss}</div>))
    let tableRows = null;
    if (this.state.post){
      tableRows = <td>
        {this.state.post.map((post, index) =>{
          return (
            <tr key={index}>
              {post}
            </tr>
          )
        })}
      </td>
    }

    return (
      <div>
        <h1> Tutor Posts </h1>
        <table>
          <tbody>
            {tableRows}
          </tbody>
        </table>
        <label>
          Type your post here: <br/>
          <textarea type="text" value={this.state.body} onChange={this.handlePostChange}></textarea> <br/>
          <button type="button" onClick={this.submitPost}>Submit Post</button>
        </label>
      </div>
    )
  }
}

export default Postings