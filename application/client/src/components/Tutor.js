
import './Tutor.css';
import Picture from './pictures/math-teacher-vector.png'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
import React from "react";


function Tutor() {

    return (
        <div class="container rounded bg-white mt-5 mb-5">


            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle img-thumbnail mt-5 border border-success" width="200px" src={Picture}></img>
                        <span className="font-weight-bold text-lowercase">Name: Michael </span>
                        <span className="text-lowercase text-black-50">Email: michael@gmail.com </span>
                        <span className="text-lowercase text-black-50">Schedule: 10am-2pm Thurs-Fri </span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Tutor Dashboard</h4>
                        </div>




                        <div class="row mt-2">
                            <div class="col-md-10">Message Students

                                <div >

                                        <select  id="categoryDROPDOWN"
                                                className="form-select"
                                                name="selectedCategory"
                                                type="category"
                                                aria-label=".form-select-sm example">
                                            <option selected>List of Students</option>
                                            <option value="1">Michael</option>
                                            <option value="2">Billy</option>
                                            <option value="2">Johnny</option>
                                        </select>

                                </div>

                                <textarea id="messageStudent" type="text" class="form-control"  placeholder="Send Message.."/>
                            </div>

                        </div>
                        <button class="btn btn-primary profile-button" type="button">Send </button> <span></span>
                        <button className="btn btn-primary profile-button" type="button">Upload Documents</button>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        {/*<div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>*/}
                        {/*<div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div>*/}
                        {/*<div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>*/}

                    </div>
                </div>
            </div>


        </div>


    );
}

export default Tutor;