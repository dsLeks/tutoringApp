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

                            <div className="mt-5 text-center">
                            {/* Upload button for profile picture of the tutor */}
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span" class="btn btn-primary profile-button" style={{textTransform: 'none'}}>
                                <h6>Upload Profile Picture</h6>
                                </Button>
                                </label>
                        </div>

                        <br/>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels"><h5>First Name</h5></label><input type="text" class="form-control" placeholder="First Name" ></input></div>
                            <div class="col-md-6"><label class="labels"><h5>Last Name</h5></label><input type="text" class="form-control"  placeholder="Last Name"></input></div>
                        </div>
                        <br/>

                        {/* Removed address, phone number, and date availaibility fields to match those with the table on the back end */}
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
                        <br/><br/>
                        <div class="col-md-12"><label class="labels"><h5>Classes 1 (Required) </h5></label><input type="text" class="form-control" placeholder="required (CSC, BIO MATH, etc.)" ></input></div>
                        <div class="col-md-12"><label class="labels"><h5>Classes 2 (Optional) </h5></label><input type="text" class="form-control" placeholder="optional (CSC, BIO MATH, etc.)" ></input></div>
                        <div className="col-md-12"><label className="labels"><h5>Classes 3 (Optional) </h5></label><input type="text" className="form-control" placeholder="optional (CSC, BIO MATH, etc.)" ></input>
                        </div>

                        <div className="mt-5 text-center">
                            {/* Upload button for credentials of the tutor */}
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button class="btn btn-primary profile-button" variant="contained" color="primary" component="span" style={{textTransform: 'none'}}>
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