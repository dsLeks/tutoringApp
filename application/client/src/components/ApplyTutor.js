import React from 'react';
import './ApplyTutor.css';

class ApplyTutor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          major: "",
          course: "",
          description:"",
          photo: null,
          resume: null
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileInputChange = this.handleFileInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState((state) => {
            return {
                [target.name]: target.value,
            }
        });
      }

      handleFileInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const file = target.files[0];
        console.log("Data File",file); 
        this.setState((state) => {
            return {
                [target.name]: file
            }
        });
      }

      async handleSubmit(event) {
          event.preventDefault(); 
          const formData = new FormData();

          formData.append("firstName", this.state.firstName);
          formData.append("lastName", this.state.lastName);
          formData.append("email", this.state.email);
          formData.append("major", this.state.major);
          formData.append("course", this.state.course);
          formData.append("description", this.state.description);
          formData.append("resume", this.state.resume);
          formData.append("photo", this.state.photo); 

          const response = await fetch('/tutorapply', {
              method: 'POST',
              body: formData
          });

          const text = await response.text();
          console.log(text); 
      }
    render(){
        return (
            <div className="tutorForm">
                <form onSubmit={this.handleSubmit}>
                        <label>
                            First Name
                            <input
                                name="firstName"
                            type="text"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Last Name
                            <input
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Email
                            <input
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Major
                            <input
                                name="major"
                                type="text"
                                value={this.state.major}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Course
                            <input
                                name="course"
                                type="text"
                                value={this.state.course}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Description
                            <input
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Upload Resume
                            <input
                                name="resume"
                                type="file"
                                onChange={this.handleFileInputChange}
                            />
                        </label>
                        <label>
                            Upload Photo
                            <input
                                name="photo"
                                type="file"
                                onChange={this.handleFileInputChange}
                            />
                        </label>
                        <button type="submit">Register</button>
                    </form> 
            </div>
        )
    }
}

export default ApplyTutor; 