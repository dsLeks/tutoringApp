import "./StudentProfile.css";
import Student from "./pictures/Student.jpeg";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

function StudentProfile() {
  const { loggedInUser } = useContext(AppContext);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [tutorId, setTutorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      message: message,
      subject: subject,
      tutorId: tutorId,
    };
    console.log({ data });

    // const data1 = {
    //   tutorId: data.tutorId,
    //   subject: data.subject,
    //   message: data.message,
    // };

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      setMessage("");
      setSubject("");
      setTutorId("");

      console.log("login response", json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="text-right">Hello, {loggedInUser.firstName || ""}</h4>
      </div>
      <div class="row">
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle img-thumbnail mt-4 border border-success"
              width="200px"
              src={Student}
            ></img>
            <span className="font-weight-bold ">
              Name: {loggedInUser.firstName || ""} {loggedInUser.lastName || ""}
            </span>
            <span className="text-lowercase text-black-50">
              {loggedInUser.email || ""}:
            </span>
          </div>
        </div>
        <div class="col-md-7 border-right">
          <form onSubmit={handleSubmit} class="p-8 py-8">
            <div class="d-flex justify-content-between align-items-center mb-7">
              <h4 class="text-right">Send Message to the tutor</h4>
            </div>
            {/**Or we can add checkBox instead of Text area */}
            <div class="row mt-5">
              <h4 class="text-right">Tutor-ID</h4>
              <div class="col-md-10">
                <textarea
                  id="tutorId"
                  type="text"
                  class="form-control"
                  placeholder="Enter Tutor-ID"
                  value={subject}
                  onChange={(e) => setTutorId(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div class="row mt-5">
              <h4 class="text-right">Subject-Line</h4>
              <div class="col-md-10">
                <textarea
                  id="subject"
                  type="text"
                  class="form-control"
                  placeholder="Subject Here"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div class="row mt-5">
              <h4 class="text-right">Message:</h4>
              <div class="col-md-10">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  type="text"
                  class="form-control"
                  placeholder="Enter Your message Here"
                ></textarea>
              </div>
            </div>
            <button
              class="btn btn-primary profile-button col-md-10"
              type="submit"
              //{/*onSubmit={handleSubmit(onSubmit)}*/}
            >
              Send{" "}
            </button>{" "}
            <span></span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
