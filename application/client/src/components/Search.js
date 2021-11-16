import React from 'react'
import { useHistory } from 'react-router'
import Searchdesign from './Searchdesign.css'


export default function Search() {

    const history = useHistory();
    const [state, setState] = React.useState({});

    React.useEffect(() => {
            setState(history.location.state)
    },[history.location.state])

    console.log('state on search screen ', state)

    return (
        <div id="searchComponent">
            {/*<div style={{width:'100vw'}}>*/}
            <div>
                {(state && state.searchResponse && state.searchResponse != undefined && state.searchResponse.length > 0) ? state.searchResponse.map(searchResponse =>
                
                 /*<table id="tutors" className="search-table">
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
                */
                
                
                   
                       
                <div className="swrapper">
                    <div className="i-wrapper">
                        <img src={searchResponse.imageReference} width="200" height="200"></img>
                    </div>
                    <div className="info-wrapper">
                        <ul className="searchul">
                            <li>TutorID: {searchResponse.tutorID}</li>
                            
                            <li>First Name: {searchResponse.firstName}</li>
                                <li>Last Name: {searchResponse.lastName}</li>
                                <li>Email: {searchResponse.email}</li>
                            <li>Course: {searchResponse.courseTeaching}</li>
                        
                        
                        
                        
                        
                        </ul>
                        </div>
                        

                    </div>
                    
                
                )
            
                    :
                    <div style={{height: '50vh', display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                        Nothing found!

                    </div>
            
            }
             
              
            </div>
            
        </div>
        
    )
}
