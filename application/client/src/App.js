import React, { useState } from "react";

import {
  Home,
  About,
  Footer,
  Tutor,
  ApplyTutor,
  Login,
  Registration,
  StudentProfile,
} from "./components";

// importing member pages below
import Member1 from "./components/members/Member1";
import Member2 from "./components/members/Member2";
import Member3 from "./components/members/Member3";
import Member4 from "./components/members/Member4";
import Member5 from "./components/members/Member5";
import Member6 from "./components/members/Member6";
import { AppContext } from "./AppContext";

//for search
import Search from "./components/Search";

import { Route, Link, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Mynavbar from "./components/Mynavbar";
import MyHeader from "./components/MyHeader";

import "./App.css";

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isLoggedIn: false,
  });

  React.useEffect(() => {
    let authUser = localStorage.getItem("whpf_user");
    if (authUser && Object.keys(authUser).length) {
      setLoggedInUser(JSON.parse(authUser));
    } else {
      localStorage.removeItem("whpf_user");
      setLoggedInUser({});
    }
  }, []);

  console.log(loggedInUser, "logINuse");

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="page-container">
        <div className="content-wrap">
          {
            //trying browser router and member1 in routes
          }
          <MyHeader />
          <Mynavbar />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                history={props.history}
                path="/SearchTemp"
                component={Search}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/about/Justin-Diones" component={Member1} />
              <Route exact path="/about/RuiQi-Huang" component={Member2} />
              <Route exact path="/about/Rupak-Khatri" component={Member3} />
              <Route
                exact
                path="/about/William-Lushbough"
                component={Member4}
              />
              <Route exact path="/about/Alekhya-Gandu" component={Member5} />
              <Route exact path="/about/Mai-Ra" component={Member6} />

              {
                // as like when  conditon is tutor  it get from backend else Home;
                // or create a dashbord index file  and create  two routes of studnt profile and student logout;
                //     1 -- > if usre is Registerd  and  tutor;
                //       2-- only Register 3   Routes  //about us, apply to be a tutor and search , logout
                //   3 --for  Regurlar    Routes home path  = "/" about, apply to be a tutor-redirect login,
                // <Route exact path="/">
                //{loggedInUser.Tutor?<Redirect to ="/Tutor-Dashboard" /> :<Home/>}
                // </Route>
              }

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
    </AppContext.Provider>
  );
}

export default App;
