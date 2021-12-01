import "./ApplyTutor.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';


function ApplyTutor() {
    return (
        
        <div class="container rounded-5 bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                </div>
                <div class="col-md-5 border-right">
                    <div class="">
                            <h3 class="text-center display-5">Apply to be a Tutor</h3>

                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels"><h5>First Name</h5></label><input type="text" class="form-control" placeholder="first name" ></input></div>
                            <div class="col-md-6"><label class="labels"><h5>Last Name</h5></label><input type="text" class="form-control"  placeholder="last name"></input></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels"><h5>Mobile Number</h5></label><input type="text" class="form-control" placeholder="enter phone number (xxx) xxx-xxxx" ></input></div>
                            <div class="col-md-12"><label class="labels"><h5>Address</h5></label><input type="text" class="form-control" placeholder="enter address line 1" ></input></div>
                            <div class="col-md-12"><label class="labels"><h5>City</h5></label><input type="text" class="form-control" placeholder="enter city (San Francisco, Oakland, etc.)" ></input></div>
                            <div class="col-md-12"><label class="labels"><h5>State</h5></label><input type="text" class="form-control" placeholder="enter state (CA, NY, etc.)" ></input></div>
                        </div>

                        <br/>

                            {/* Dropdown menu to choose major department not working properly */}
                            <div class="d-flex justify-content-between align-items-center experience"><span><h4>Choose Class(es)</h4></span></div>
                            <div className="dropdown d-inline-block">
                            <button className={`btn btn-danger dropdown-toggle`} type="button"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Major Department
                            </button> {/* Dropdown selections */}
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Science</a></li>
                                <li><a className="dropdown-item" href="#">Math</a></li>
                                <li><a className="dropdown-item" href="#">History</a></li>
                            </ul>
                        </div>
                        <div class="col-md-12"><label class="labels"><h5>Classes 1 (Required) </h5></label><input type="text" class="form-control" placeholder="required (CSC, BIO MATH, etc.)" ></input></div>
                        <div class="col-md-12"><label class="labels"><h5>Classes 2 (Optional) </h5></label><input type="text" class="form-control" placeholder="optional (CSC, BIO MATH, etc.)" ></input></div>
                        <div className="col-md-12"><label className="labels"><h5>Classes 3 (Optional) </h5></label><input type="text" className="form-control" placeholder="optional (CSC, BIO MATH, etc.)" ></input>
                        </div>

                        {/* Commented out data availability, may be too difficult to implement on the back end */}
                        {/* <div className="row">
                            <div className="col-md-13">
                                <Form.Group controlId="dob">
                                    <Form.Label>Select Date Availability</Form.Label>
                                    <Form.Control type="date" name="dob" placeholder="" />
                                </Form.Group>
                            </div>
                        </div> */}

                        <div className="mt-5 text-center">
                            {/* Upload button for profile picture of the tutor */}
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span" style={{textTransform: 'none'}}>
                                <h6>Upload Profile Picture</h6>
                                </Button>
                                </label>
                        </div>

                        <div className="mt-5 text-center">
                            {/* Upload button for credentials of the tutor */}
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span" style={{textTransform: 'none'}}>
                                <h6>Upload Resume/Credentials</h6>
                                </Button>
                            </label>
                        </div>

                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Apply</button></div>
                    </div>
                </div>
        </div>
    </div>

    );
}

export default ApplyTutor;