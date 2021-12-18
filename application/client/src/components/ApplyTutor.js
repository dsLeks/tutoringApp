import React from "react";
import "./ApplyTutor.scss";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  firstNameError: "Cannot be empty",
  lastNameError: "Field Cannot be empty",
  emailError: "",
  major: "",
  course: "",
  description: "",
  photo: null,
  resume: null,

}

class ApplyTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState
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
      };
    });
  }

  handleFileInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const file = target.files[0];
    console.log("Data File", file);
    this.setState((state) => {
      return {
        [target.name]: file,
      };
    });
  }

//Starting to validate the form
validate = () => {

if(!this.state.firstName) {
  return false
}
if (!this.state.lastName) {
  return false;
}

if (!this.state.email.includes('sfsu')) { //email must include sfsu
this.setState({emailError: "email invalid"})
console.log("email error has occured")
}
if(this.state.emailError) {
  return false;
}
return true; //no problems with the form
  };

  async handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    //Handling the validation of the form
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state)

    //moved below code inside isValid if statement
    //we append to formdata when the submission is Valid.
      formData.append("firstName", this.state.firstName);
      formData.append("lastName", this.state.lastName);
      formData.append("email", this.state.email);
      formData.append("major", this.state.major);
      formData.append("course", this.state.course);
      formData.append("description", this.state.description);
      formData.append("resume", this.state.resume);
      formData.append("photo", this.state.photo);
  
      const response = await fetch("/tutorapply", {
        method: "POST",
        body: formData,
      });
  
      const text = await response.text();
      console.log(text);

    }

    this.setState(initialState) //form goes back to initial state


  }

  render() {
    return (
      <>
        <form class="application-form" onSubmit={this.handleSubmit}>
          <h1 class="form-heading">Application Form</h1>
          <p class="helper-text">* denotes a required field</p>

          <div class="field-row">
            <div>
              <label class="form-label" for="firstName">
                First name<span>*</span>
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="first name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              <span class="message"></span>
              <div style={{ fontSize: 8, color: "red" }}>
                {this.state.firstNameError}
              </div>
            </div>
          </div>

          <div class="field-row">
            <label class="form-label cf" for="lastName">
              Last name <span>*</span>
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="last name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <span class="message"></span>
          </div>

          <div class="field-row">
            <label class="form-label" for="email">
              Email<span>*</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <span class="message"></span>
          </div>
          <div class="field-row">
            <label class="form-label">Major</label>
            <input
              name="major"
              type="text"
              placeholder="major"
              value={this.state.major}
              onChange={this.handleInputChange}
            />
            <span class="message"></span>
          </div>
          <div class="field-row">
            <label class="form-label">
              Course<span>*</span>
            </label>
            <input
              name="course"
              type="text"
              placeholder="course"
              value={this.state.course}
              onChange={this.handleInputChange}
            />
            <span class="message"></span>
          </div>

          <div class="field-row">
            <label class="form-label">
              Description<span>*</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            <span class="message"></span>
          </div>

          <div class="field-row">
            <label class="form-label">
              Resume<span>*</span>
            </label>
            <input
              name="resume"
              type="file"
              onChange={this.handleFileInputChange}
            />
          </div>
          <div class="field-row">
            <label class="form-label">
              Upload Photo<span>*</span>
              <input
                name="photo"
                type="file"
                onChange={this.handleFileInputChange}
              />
            </label>
          </div>

          <div class="field-row">
            <label class="form-label"></label>
            <button type="submit" class="form-button">
              Apply now
            </button>
          </div>
        </form>
      </>
    );
    {
      /*
      <div className="tutorForm">
        <form className="formApply" onSubmit={this.handleSubmit}>
          <div className="field-row">
            <label>
              First Name
              <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
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
        */
    }
  }
}

export default ApplyTutor;
