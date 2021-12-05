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
            <form className="form">
            <div class="row">
                <div class="col-md-3 border-right">
                </div>
                <div class="col-md-5 border-right">
                    <div class="">
                            <h3 class="text-center display-5">Apply to be a Tutor</h3>
                            <h6 class="text-center">(All fields required)</h6>

                        <div>
                            <div><label class="labels"><h5>First Name</h5></label><input required type="text" class="form-control" placeholder="First Name" ></input></div>
                            <div><label class="labels"><h5>Last Name</h5></label><input required type="text" class="form-control"  placeholder="Last Name"></input></div>
                            <div><label class="labels"><h5>SFSU E-mail</h5></label><input required type="text" class="form-control"  placeholder="yourname@mail.sfsu.edu"></input></div>

                        </div>
                        <br/>

                        {/* Removed address, phone number, major department dropdown menu, 2 optional classes, and date availaibility fields to match those with the table on the back end */}
                        {/* Added text fields for major/course to tutor, added description text field*/}
                        <div class="col-md-12"><label class="labels"><h5>Major to tutor</h5></label><input required type="text" class="form-control" placeholder="required (CSC, BIO, MATH, etc.)" ></input></div>
                        <div class="col-md-12"><label class="labels"><h5>Course to tutor</h5></label><input required type="text" class="form-control" placeholder="required (CSC510, BIO100 MATH325, etc.)" ></input></div>
                        <br/>
                        <div class="col-md-12"><label class="labels"><h5>Description</h5></label><br/><textarea required type="text" class="form-control" className="desc" placeholder="Tell us about yourself..." ></textarea></div>
                        

                        <div className="mt-5 text-center">
                            {/* Upload button for profile picture of the tutor */}
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" class="btn btn-primary profile-button" className="profile-button"style={{textTransform: 'none'}}>
                                <h6>Upload Profile Picture</h6>
                                </Button>
                                </label>
                        </div>

                        <div className="mt-5 text-center">
                            {/* Upload button for credentials of the tutor */}
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button class="btn btn-primary profile-button" className="profile-button" variant="contained" component="span" style={{textTransform: 'none'}}>
                                <h6>Upload Resume/Credentials</h6>
                                </Button>
                            </label>
                        </div>

                        <div class="mt-5 text-center">
                            <Button class="btn btn-primary profile-button" className="profile-button" variant="contained" component="span" style={{textTransform: 'none'}} type="submit">
                                <h6>Apply</h6>
                                </Button>
                            </div>
                    </div>
                </div>
        </div>
        </form>
    </div>

    );
}

export default ApplyTutor;