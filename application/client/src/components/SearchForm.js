// import React, {useState} from 'react';
// import "./SearchForm.css"; 
// import SearchIcon from '@mui/icons-material/Search';
// import { getChipUtilityClass } from '@mui/material';



// class SearchForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedCategory: '',
//             textSearch: '',
//             searchResponse: []
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;

//         this.setState( {
//             ...this.state,
//             [target.name]: value
//         });
//     }

//     handleSubmit(event) {
//         event.preventDefault(); 
//         let cat = this.state.selectedCategory;
//         let searchquery = this.state.textSearch; 

//         fetch(`/onSubmit?param1=${cat}&param2=${searchquery}`, {
//             method: "GET",
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })
//         .then((result, err) => result.json())
//         .then(contents => {
//             console.log(contents); 
//             this.setState( {searchResponse: contents} ); 
//         });
//     }

//     render() {
//         return (
//             <>
//             <p className="greeting">Hi, what would you like to search? After searching, please scroll to see full results.</p>
//             <form onSubmit={this.handleSubmit}>
                
//             <div className="wrapper">

//                <select class="theme" 
//                 name="selectedCategory"
//                 type="category"
//                 value={this.state.selectedCategory} 
//                 onChange={this.handleInputChange}>
//                     <option value="all">Search All</option>
//                     <option value="tutors">Tutors</option>
//                     <option value="Courses">Courses</option>
//                 </select>

              

                    
//                 <input className="searchBar" 
//                 name="textSearch" 
//                 type="text" 
//                 placeholder="search"
//                 value={this.state.textSearch}
//                 onChange={this.handleInputChange}>
//                 </input> 
                    

//                 <div className="searchIcon">       
//                     <SearchIcon onClick={this.handleSubmit}/>
//                 </div>

                

//             </div>

//             </form>

//             <div className="col">
//                 {this.state.searchResponse.map(searchResponse => 
//                 <table id="tutors">
//                     <tr>
//                         <th>TutorID</th>
//                         <th>Email</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Course</th>
//                         <th>Photo</th>
//                     </tr>
//                     <tr>
//                         <td>{searchResponse.tutorID}</td>
//                         <td>{searchResponse.email}</td> 
//                         <td>{searchResponse.firstName}</td> 
//                         <td>{searchResponse.lastName}</td> 
//                         <td>{searchResponse.courseTeaching}</td> 
//                         <td><img src={searchResponse.imageReference} width="200" height="100"></img></td>
//                     </tr>
//                 </table>
//                 )}
//             </div>
//         </>
//         )
//     }
// }

// export default SearchForm; 