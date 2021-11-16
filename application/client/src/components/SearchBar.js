import React from 'react';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import "./SearchBar.css";

import { useHistory } from 'react-router';

export default function SearchBar() {
    
    const [checkSearch, setCheckSearch] = React.useState(false);

    const [state, setState] = React.useState({
        selectedCategory: '',
        textSearch: '',
        searchResponse: '',
        filteredData: [],
    })

    const history = useHistory();

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({ ...state, [target.name]: value })
       
    }

    ///fetching Api 



    const handleSubmit = async (event) => {
        setCheckSearch(false);

        let cat = state.selectedCategory;
        let searchquery = state.textSearch;

        await fetch(`/onSubmit?param1=${cat}&param2=${searchquery}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((result, err) => result.json())
            .then(contents => {console.log('contents are ', contents); //The results are logged on the console of the browser 
                //The results are stored in the c variable searchResponse. Use this state variable to display the output. 
                setState({ ...state, searchResponse: contents })
            }
            )
            setCheckSearch(true)

     }

    console.log('state is ', state);
    
    React.useEffect(() => {
       
        if (checkSearch) {
            history.push({
            pathname: '/SearchTemp',
            state : state,
         })
        }
    }, [state.searchResponse, checkSearch])
    if (!checkSearch) {
        <div>No data</div>
    }
    

    
        return (
            <>
                
            <form className="d-flex" id="cater-nav">

                            <select id="formID" 
                            className="form-select" 
                            name="selectedCategory"
                            type="category"
                            aria-label=".form-select-sm example"
                            value={state.selectedCategory}
                            onChange={handleInputChange}
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
                                value={state.textSearch}
                            onChange={handleInputChange} />
                                    
                                    <button type="button" className="btn btn-success" onClick={handleSubmit}>Search</button>
                                                     </div>
                    
                    
                </form>

                <div className="col">

             </div>
                </>
        );
    
}
