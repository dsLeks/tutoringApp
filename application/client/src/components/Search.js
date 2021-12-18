import React from "react";
import { useHistory } from "react-router";
import Searchdesign from "./Searchdesign.css";

export default function Search() {
  const history = useHistory();
  const [state, setState] = React.useState({});

  console.log("state.selectedCategory", state.selectedCategory);
  React.useEffect(() => {
    console.log("history.location.state", history.location.state);
    setState(history.location.state);
  }, [history.location.state]);

  console.log("state on search screen ", state);

  return (
    <div id="searchComponent">
      {/*<div style={{width:'100vw'}}>*/}
      <div>
        {state &&
        state.searchResponse &&
        state.searchResponse != undefined &&
        state.searchResponse.length > 0 ? (
          state.searchResponse.map((searchResponse, index) => {
            if (state.selectedCategory == "2") {
              return (
                <div className="swrapper" key={index}>
                  <div className="i-wrapper">
                    <img
                      src={searchResponse.imageReference}
                      width="200"
                      height="200"
                    ></img>
                  </div>
                  <div className="info-wrapper">
                    <ul className="searchul">
                      {console.log(
                        "Search Response length is: " +
                          Object.keys(searchResponse).length
                      )}
                      <li>TutorID: {searchResponse.tutor_id}</li>
                      <li>First Name: {searchResponse.firstName}</li>
                      <li>Last Name: {searchResponse.lastName}</li>
                      <li>Email: {searchResponse.email}</li>
                      <li>Course: {searchResponse.courseTeaching}</li>
                      <li>
                        Course Description: {searchResponse.courseDescription}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            } else if (state.selectedCategory == "1") {
              //for Tutors
              return (
                <div className="swrapper" key={index + "c"}>
                  <div className="i-wrapper">
                    <img
                      src={searchResponse.imageReference}
                      width="200"
                      height="200"
                    ></img>
                  </div>
                  <div className="info-wrapper">
                    <ul className="searchul">
                      {console.log(
                        "Search Response length is: " +
                          Object.keys(searchResponse).length
                      )}
                      <li>TutorID: {searchResponse.tutorID}</li>
                      <li>First Name: {searchResponse.firstName}</li>
                      <li>Last Name: {searchResponse.lastName}</li>
                      <li>Email: {searchResponse.email}</li>
                      <li>Course: {searchResponse.courseTeaching}</li>
                    </ul>
                  </div>
                </div>
              );
            } else {
              //for Courses
              return (
                <div className="swrapper" key={index + "cat"}>
                  <div className="i-wrapper">
                    <img
                      src={searchResponse.imageReference}
                      width="200"
                      height="200"
                    ></img>
                  </div>
                  <div className="info-wrapper">
                    <ul className="searchul">
                      {console.log(
                        "Search Response length is: " +
                          Object.keys(searchResponse).length
                      )}
                      <li>CourseID: {searchResponse.courseID}</li>
                      <li>TutorID: {searchResponse.tutor_id}</li>
                      <li>Email: {searchResponse.email}</li>
                      <li>Tutor Name: {searchResponse.firstName}</li>
                      <li>Course Name: {searchResponse.lastName}</li>
                      <li>
                        Course Description: {searchResponse.courseDescription}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Nothing found!
          </div>
        )}
      </div>
    </div>
  );
}
