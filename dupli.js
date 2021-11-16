/*import React from 'react';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import "./SearchBar.css";

import {Link } from 'react-router-dom';

class searchbar extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            textSearch: '',
            searchResponse: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState( {
            ...this.state,
            [target.name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let cat = this.state.selectedCategory;
        let searchquery = this.state.textSearch;

        fetch(`/onSubmit?param1=${cat}&param2=${searchquery}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((result, err) => result.json())
            .then(contents => {

             
                 
                console.log(contents); //The results are logged on the console of the browser 
                this.setState({ searchResponse: contents }); //The results are stored in the state variable searchResponse. Use this state variable to display the output. 
             
                
             

    }
            )
     }


    render(){
        return (
            <>
                
            <form className="d-flex" id="cater-nav">

                            <select id="formID" 
                            className="form-select" 
                            name="selectedCategory"
                            type="category"
                            aria-label=".form-select-sm example"
                            value={this.state.selectedCategory}
                            onChange={this.handleInputChange}
                            >
                                <option selected>Category</option>
                                <option value="1">Tutors</option>
                                <option value="2">Courses</option>
                            </select>

                            <div className="input-group" id="thesearch">
                                <input type="text" 
                                name="textSearch"
                                className="form-control" 
                                placeholder="Search.."
                                value={this.state.textSearch}
                            onChange={this.handleInputChange} />
                                    
                                    <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Search</button>
                                                     </div>
                    
                    
                </form>

                <div className="col">
                 {this.state.searchResponse.map(searchResponse => 
                 <table id="tutors">
                     <tr>
                         <th>TutorID</th>
                         <th>Email</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Course</th>
                         <th>Photo</th>
                     </tr>
                     <tr>
                         <td>{searchResponse.tutorID}</td>
                         <td>{searchResponse.email}</td> 
                        <td>{searchResponse.firstName}</td> 
                        <td>{searchResponse.lastName}</td> 
                        <td>{searchResponse.courseTeaching}</td> 
                        <td><img src={searchResponse.imageReference} width="200" height="100"></img></td>
                     </tr>
                 </table>
              )}
             </div>
                </>
        );
    }
}

export default searchbar;

*/