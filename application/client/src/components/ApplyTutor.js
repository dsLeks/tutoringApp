
import "./ApplyTutor.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";
import { Form } from 'react-bootstrap';






function ApplyTutor() {

    return (
        <div class="container rounded-5 bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                </div>
                <div class="col-md-5 border-right">
                    <div class="">
                            <h3 class="text-center display-5">Application Form</h3>

                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">FirstName</label><input type="text" class="form-control" placeholder="first name" ></input></div>
                            <div class="col-md-6"><label class="labels">LastName</label><input type="text" class="form-control"  placeholder="lastname"></input></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" ></input></div>
                            <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" ></input></div>
                            <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" ></input></div>

                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" ></input></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control"  placeholder="state"></input></div>
                        </div>

                        <div className="row">
                            <div className="col-md-13">
                                <Form.Group controlId="dob">
                                    <Form.Label>Select Date Availability</Form.Label>
                                    <Form.Control type="date" name="dob" placeholder="" />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <button className="btn btn-primary profile-button" type="button">Upload Resume/Credentials</button>
                        </div>

                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Apply</button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span><h5>Choose Class(es)</h5></span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>
                        <div className="dropdown d-inline-block">
                            <button className="btn btn-danger dropdown-toggle" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Major Department
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Science</a></li>
                                <li><a className="dropdown-item" href="#">Math</a></li>
                                <li><a className="dropdown-item" href="#">History</a></li>
                            </ul>
                        </div>
                        <div class="col-md-12"><label class="labels">Classes 1 (Required) </label><input type="text" class="form-control" placeholder="required" ></input></div>
                        <div class="col-md-12"><label class="labels">Classes 2 (Optional) </label><input type="text" class="form-control" placeholder="optional" ></input></div>
                        <div className="col-md-12"><label className="labels">Classes 3 (Optional) </label><input type="text" className="form-control" placeholder="optional" ></input>
                        </div>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>


    );
}

export default ApplyTutor;