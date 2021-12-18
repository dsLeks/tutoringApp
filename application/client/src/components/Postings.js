import React from "react";
import "./Posting.css";

class Postings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      body: "",
      loggedInUser: {},
    };
    this.submitPost = this.submitPost.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  async componentDidMount() {
    const loggedInUser = localStorage.getItem("whpf_user");
    this.setState({ loggedInUser: JSON.parse(loggedInUser) });
    await this.fetchPosts();
  }

  handlePostChange = (event) => {
    this.setState({ body: event.target.value });
  };

  async fetchPosts() {
    const response = await fetch(`/getPosts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json.posts);
    this.setState({
      post: json.posts,
    });
  }

  async submitPost(event) {
    event.preventDefault();
    if (
      !!this.state.loggedInUser &&
      Object.values(this.state.loggedInUser).length > 0 &&
      this.state.loggedInUser.status === "Authenticated!"
    ) {
      //console.log(this.state.body);
      this.state.post.push(this.state.body);
      const data = { "description": this.state.body };
      console.log("The submitted Post is: ", data); 

      const response = await fetch("/userPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!!response) {
        this.fetchPosts();
      }

      this.setState.body = " ";
    } else {
      this.props.history.push("/Login");
    }
  }

  render() {
    // function to map the array
    const { post } = this.state;
    // const postArray = post.map((postss =>
    //   <div class="posting">{postss}</div>))
    let tableRows = null;
    if (this.state.post) {
      tableRows = (
        <td>
          {this.state.post.map((post, index) => {
            return <tr key={index}>{post}</tr>;
          })}
        </td>
      );
    }

    return (
      <div>
        <h1> Tutor Posts </h1>
        <table>
          <tbody>{tableRows}</tbody>
        </table>
        <label>
          Type your post here: <br />
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.handlePostChange}
          ></textarea>{" "}
          <br />
          <button type="button" onClick={this.submitPost}>
            Submit Post
          </button>
        </label>
      </div>
    );
  }
}

export default Postings;
