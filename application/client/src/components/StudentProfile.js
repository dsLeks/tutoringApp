
import './StudentProfile.css';
import Student from './pictures/Student.jpeg'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
import React from "react";


function StudentProfile() {

    return (

        <div class="container rounded bg-white mt-5 mb-5">
             <div class="d-flex justify-content-between align-items-center mb-4">
                            <h4 class="text-right">Random's Profile</h4>
                        </div>
            <div class="row">
                <div class="col-md-4 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle img-thumbnail mt-4 border border-success" width="200px" src={Student}></img>
                        <span className="font-weight-bold ">Name: Random Guy</span>
                        <span className="text-lowercase text-black-50">Email: randomguy@gmail.com </span>
                        
                    </div>
                </div>
                <div class="col-md-7 border-right">
                    <div class="p-8 py-8">
                        <div class="d-flex justify-content-between align-items-center mb-7">
                            <h4 class="text-right">Upcoming Appointment</h4>
                        </div>



                            {/**Or we can add checkBox instead of Text area */}
                        <div class="row mt-5">
                            <div class="col-md-10">
                                <textarea id="messageStudent" type="text" class="form-control" placeholder="No Upcomming Appointment" >
        
                            </textarea>
                            </div>

                        </div>
                        <button class="btn btn-primary profile-button" type="button">See Past Appointment  </button> <span></span>
                        <button className="btn btn-primary profile-button" type="button">Cancel Appointment</button> <span></span>
                        <button className="btn btn-primary profile-button" type="button">Review a tutor</button>

                    </div>
                </div>
                
            </div>


        </div>


    );
}

export default StudentProfile;