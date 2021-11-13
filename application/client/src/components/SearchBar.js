import React from 'react';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';

class searchbar extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            textSearch: '',
            searchResponse: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
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

    render(){
        return (
            <form className="d-flex" id="cater-nav">

                            <select id="formID" 
                            className="form-select" 
                            name="selectedCategory"
                            type="category"
                            aria-label=".form-select-sm example"
                            value={this.state.selectedCategory}
                            onChange={this.handleInputChange}
                            >
                                <option selected>Select Category</option>
                                <option value="1">Math</option>
                                <option value="2">Science</option>
                                <option value="3">History</option>
                            </select>

                            <div className="input-group" id="thesearch">
                                <input type="text" 
                                name="textSearch"
                                className="form-control" 
                                placeholder="Search.."
                                value={this.state.textSearch}
                                onChange={this.handleInputChange}/>
                                    <button type="button" className="btn btn-success">Search</button>
                            </div>
                        </form>
        );
    }
}

export default searchbar;