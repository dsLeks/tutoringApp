import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import useForm from "./useForm";
import validate from "./validateInfo";

function Registration(){
    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    return(
        <div class="container rounded-5 bg-white mt-5 mb-5">
            <form className="form" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-md-3 border-right">
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="" >
                            <h3 class="text-center display-5">Register</h3>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label class="labels">First Name</label>
                                    <input required type="text" class="form-control"  placeholder="First Name"></input>
                                </div>
                            <div class="col-md-6">
                                <label class="labels">Last Name</label>
                                <input required type="text" class="form-control"  placeholder="Last Name"></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label class="labels">Phone Number</label>
                                <input required type="text" class="form-control" placeholder="(xxx)xxx-xxxx" ></input>
                            </div>
                        <div class="col-md-12">
                            <label class="labels">SFSU E-mail</label>
                            <input values={values.email} onChange={handleChange} required type="email" class="form-control" placeholder="@mail.sfsu.edu"></input>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Password</label>
                            <input required type="password" class="form-control" placeholder="Password" ></input>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Re-enter Passowrd</label>
                            <input required type="password" class="form-control" placeholder="Re-enter Password" ></input>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <button class="btn btn-primary profile-button" type="submit" >Register</button>
                    </div>
                </div>
            </div>
        </div>
        </form>  
    </div>
    )
}

export default Registration;