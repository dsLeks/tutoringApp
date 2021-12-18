/*
File: The tutor dashboard
Worked on by: Rui Qi Huang
Purpose: allows tutor to view messages form students
*/

import "./Tutor.css";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";

function Tutor() {
  const loggedInUser = useContext(AppContext);

  const allmessages = []; 

  const [messages, setMessages] = useState([]);
  const [listMessages, setlistMessages] = useState([]); 
  useEffect(async () => {
    console.log("LoggedInUser: ", loggedInUser); 
    const email = loggedInUser.loggedInUser.email; 
    const response = await fetch('/isTutor', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const json = await response.json(); 
    const tutorId = json.tutorId; 


    const response2 = await fetch(`/getmessages?param1=${tutorId}`, {
      method: 'GET',
      headers: {
        "Content-type": 'application/json'
      }
    })

    const json1 = await response2.json();
    for(var i = 0; i < json1.length; i++) {
      allmessages.push(json1[i].messageDescription);
    }

    setMessages(allmessages); 
    console.log(messages);  

  }, []);

  return (
    <div className="container">
      <h4 class="text-right">Hello, {loggedInUser.loggedInUser.firstName}</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div
              id="dashboard"
              className="card-body bg-info text-white mailbox-widget pb-0"
            >
              <h2 className="text-white pb-3">Dashboard</h2>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="inbox"
                aria-labelledby="inbox-tab"
                role="tabpanel"
              >
                <div>
                  <div className="row p-4 no-gutters align-items-center">
                    <div className="col-sm-12 col-md-6">
                      <h3 className="font-light mb-0">
                        <i className="ti-email mr-2" />
                        Inbox
                      </h3>
                    </div>
                  <div className="table-responsive">
                    <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                        {messages.map((mess) => <li>{mess}</li>)}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Tutor;
