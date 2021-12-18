/*
File: The tutor dashboard
Worked on by: Rui Qi Huang
Purpose: allows tutor to view messages form students
*/

import "./Tutor.css";
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

function Tutor() {
  const loggedInUser = useContext(AppContext);

  const allmessages = [
    {
      message_id: 1,
      date: "May 13",
      name: "Bob Shimurda",
      message:
        "but also the leap into electronic typesetting, remaining essentially unchanged. It was",
      status: false,
    },
    {
      message_id: 2,
      date: "Sep 12",
      name: "Test 1",
      message: "to electronic typesetting, rem",
      status: false,
    },
    {
      message_id: 3,
      date: "Cct 12",
      name: "John Doe",
      message: "this is another message to electronic typesetting, rem",
      status: false,
    },
  ];
  const [messages, setMessages] = useState(allmessages);

  function reorderMessages(id) {
    let sms = messages.map((message) => {
      if (message.message_id == id) {
        message.status = !message.status;
      }
      return message;
    });
    sms = messages.sort((a, b) => {
      return a.status - b.status;
    });
    console.log(sms);
    setMessages(sms);
  }

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
                    <div className="col-sm-12 col-md-6">
                      <ul className="list-inline dl mb-0 float-left float-md-right">
                        <li className="list-inline-item text-info mr-3"></li>
                      </ul>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                      <tbody>
                        {messages.map(
                          ({ name, message, date, status, message_id }) => {
                            return (
                              <tr className="border-top">
                                <td className="pl-3">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="cst1"
                                      value={status}
                                      onChange={() =>
                                        reorderMessages(message_id)
                                      }
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="cst1"
                                    >
                                      &nbsp;
                                    </label>
                                  </div>
                                </td>

                                <td>
                                  <i className="fa fa-star text-warning"></i>
                                </td>
                                <td>
                                  <span className="mb-0 text-muted">
                                    {name}
                                    {status}
                                  </span>
                                </td>

                                <td>
                                  <a
                                    className="link"
                                    href="javascript: void(0)"
                                  >
                                    <span className="text-dark">{message}</span>
                                  </a>
                                </td>

                                <td>
                                  <i className="fa fa-paperclip text-muted"></i>
                                </td>

                                <td className="text-muted">{date}</td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
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
