import React from 'react';
import './Posting.css';
import {Table} from 'fixed-data-table';

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
          <textarea type="text"></textarea>
        </label>
      </div>
    )
  }
}

export default Postings