import "./ApplyTutor.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
import React from "react";
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
      .string()
      .max(40, "Maximum Character only 40")
      .min(1, "Field cannot be Empty")
      .required("Field cannot be Empty"),
    lastName: yup
      .string()
      .required()
      .max(40, "Maximum Character only 40")
      .min(1, "Field cannot be Empty"),
    email: yup
      .string()
      .max(40, "Maximum Character only 40")
      .matches(/^([a-zA-Z0-9_-]+)(@mail.sfsu.edu)$/, "Email must be SFSU email"),
    major: yup
        .string()
        .max(40, "Maximum Character only 40"),
    course: yup
        .string()
        .max(40, "Maximum Character only 40"),
    description: yup
        .string()
        .max(150, "Maximum Character only 150"),
    picture: yup
        .mixed()
        .required("Picture must be uploaded"),
    resume: yup
        .mixed()
        .required("Picture must be uploaded"),
    });

function ApplyTutor() {
    const{
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log({data});
    };
    

    return (
        <div class="container rounded-5 bg-white mt-5 mb-5">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div class="row">
                <div class="col-md-3 border-right"></div>
                <div class="col-md-5 border-right">
                    <div class="">
                            <h3 class="text-center display-5">Apply to be a Tutor</h3>
                            <h6 class="text-center">(All fields required)</h6>

                        <div>
                            <div>
                                <label class="labels"><h5>First Name</h5></label>
                                <input 
                                    required type="text" 
                                    class="form-control" 
                                    placeholder="First Name"
                                    {...register("firstName", {required:true})}>
                                </input>
                                <p>{errors.firstName?.message}</p>
                            </div>
                            <div>
                                <label class="labels">
                                    <h5>Last Name</h5></label>
                                    <input 
                                        required type="text" 
                                        class="form-control"  
                                        placeholder="Last Name"
                                        {...register("lastName", {required:true})}>
                                    </input>
                                    <p>{errors.lastName?.message}</p>
                            </div>
                            <div>
                                <label class="labels"><h5>SFSU E-mail</h5></label>
                                <input 
                                required type="text" 
                                class="form-control"  
                                placeholder="yourname@mail.sfsu.edu"
                                {...register("email", {required:true})}>
                                </input>
                                <p>{errors.email?.message}</p>
                            </div>
                        </div>
                        <br/>

                        {/* Removed address, phone number, major department dropdown menu, 2 optional classes, and date availaibility fields to match those with the table on the back end */}
                        {/* Added text fields for major/course to tutor, added description text field*/}
                        <div class="col-md-12">
                            <label class="labels"><h5>Major to tutor</h5></label>
                            <input 
                            required type="text" 
                            class="form-control"
                            placeholder="required (CSC, BIO, MATH, etc.)"
                            {...register("major", {required:true})}>
                            </input>
                            <p>{errors.major?.message}</p>
                        </div>
                        <div class="col-md-12">
                            <label class="labels"><h5>Course to tutor</h5></label>
                            <input 
                            required type="text" 
                            class="form-control" 
                            placeholder="required (CSC510, BIO100 MATH325, etc.)"
                            {...register("course", {required:true})}>
                            </input>
                            <p>{errors.course?.message}</p>
                        </div>
                        <br/>
                        <div class="col-md-12">
                            <label class="labels"><h5>Description</h5></label><br/>
                            <textarea 
                            required type="text" 
                            class="form-control" 
                            className="desc" 
                            placeholder="(150 characters or less) Tell us about yourself..."
                            {...register("description", {required:true})}>
                            </textarea>
                            <p>{errors.description?.message}</p>
                        </div>
                        

                        <div className="mt-5 text-center">
                             {/* Upload button for profile picture of the tutor */}
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                multiple
                                {...register("picture", {required:true})}
                            />
                            <label htmlFor="contained-button-file">
                                <Button 
                                variant="contained" 
                                component="span" 
                                class="btn btn-primary profile-button" 
                                className="profile-button"
                                style={{textTransform: 'none'}}>
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
                                multiple
                                {...register("resume", {required:true})}
                            />
                            <label htmlFor="contained-button-file">
                                <Button class="btn btn-primary profile-button1" 
                                className="profile-button1" 
                                variant="contained" 
                                component="span" 
                                style={{textTransform: 'none'}}>
                                <h6>Upload Resume/Credentials</h6>
                                </Button>
                            </label>
                        </div>

                        <div class="mt-5 text-center">
                            <button
                                class="btn btn-primary profile-button"
                                type="submit"
                                id="submit"
                                >
                            Apply
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        </form>
    </div>
    );
}

export default ApplyTutor;