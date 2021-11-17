// import React from "react";
// import "./App.css";
// import SFSUText from "./components/SFSUText";  
// import SearchForm from "./components/SearchForm.js"
// import Footer from "./components/Footer.js"

// function App() {
//   return (
//     <div className="App">
//       <SFSUText/>
//       <SearchForm/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import { Home, About, Footer, Tutor, ApplyTutor, Login, Registration, StudentProfile} from './components';
// importing member pages below
import Member1 from './components/members/Member1';
import Member2 from './components/members/Member2';
import Member3 from './components/members/Member3';
import Member4 from './components/members/Member4';
import Member5 from './components/members/Member5';
import Member6 from './components/members/Member6';

//for search
import Search from './components/Search';

import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import MyHeader from './components/MyHeader';

import "./App.css"

function App(props) {
    return (

        <div className="page-container">
        <div className="content-wrap">
            {
                //trying browser router and member1 in routes
            }
            <MyHeader />
            <Mynavbar/>


                <div style = {{ display: 'flex', justifyContent: 'center'}}>
                <Switch>
                        <Route exact path="/" component={Home} />
                          <Route exact history={props.history} path="/SearchTemp" component={Search}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/Justin-Diones" component={Member1} />
                    <Route exact path="/about/RuiQi-Huang" component={Member2} />
                    <Route exact path="/about/Rupak-Khatri" component={Member3} />
                    <Route exact path="/about/William-Lushbough" component={Member4} />
                    <Route exact path="/about/Alekhya-Gandu" component={Member5} />
                    <Route exact path="/about/Mai-Ra" component={Member6} />
                    <Route exact path="/Tutor-Dashboard" component={Tutor} />
                        <Route exact path="/Apply-Tutor" component={ApplyTutor} />
                        
                        <Route exact path="/StudentProfile" component={StudentProfile} />
                        <Route exact path="/Registration" component={Registration} />
                        <Route exact path="/Login" component={Login} />
                      
                        
                    
                    
                </Switch>
                </div>
            
            {/*<div className="Footer" style = {{ display: 'flex', justifyContent: 'center', position:'fixed' }}>
                <Footer />
            </div>
        */}
        </div>
        
        <Footer />
        
        </div>
        
    );

}


export default App;