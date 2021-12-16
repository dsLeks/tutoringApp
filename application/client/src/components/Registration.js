import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.css";
//import { useForm } from "./useForm";
//import validate from "./validateInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Registration.css";
import axios from "axios";
import { Link } from "react-router-dom";

const phonevalid =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

/*function validateEmail(email) {
  return /^\"?[\w-_\.]*\"?@mail\.sfsu$/.test(email);
}
*/

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
  //{/*email: yup.string().email().required().max(40),*/}
  email: yup
    .string()
    .max(40, "Maximum Character only 40")
    .matches(/^([a-zA-Z0-9_-]+)(@mail.sfsu.edu)$/, "Email must be SFSU email"),
  phoneNo: yup
    .string()
    .max(40, "Maximum Character only 40")
    .matches(phonevalid, "Phone number is not valid"),
  password: yup
    .string()
    .min(8, "Minimum 8 character")
    .max(15, "Maximum 15 character")
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Registration(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    //console.log({ data });
    const data1 = {
      "firstName": data.firstName,
      "lastName": data.lastName,
      "email": data.email,
      "password": data.password
    }
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data1)
    });
    const json = await response.json();
    console.log(json); 
    props.history.push("/Login");
    //props.history.push("/StudentProfile");
  };

  return (
    <div class="container rounded-5 bg-white mt-5 mb-5">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div class="row">
          <div class="col-md-3 border-right"></div>
          <div class="col-md-5 border-right">
            <div class="">
              <h3 class="text-center display-5">Register</h3>

              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">First Name</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="firstName"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  ></input>
                  <p>
                    {/*errors.firstName?.message*/}
                    {errors.firstName?.message}
                  </p>
                </div>
                <div class="col-md-6">
                  <label class="labels">Last Name</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    {...register("lastName", { required: true })}
                  ></input>
                  <p>{errors.lastName?.message}</p>
                </div>
              </div>
              <div class="row mt-3">
                {/*<div class="col-md-12">
                  <label class="labels">Phone Number</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="phoneNo"
                    placeholder="(xxx)xxx-xxxx"
                    {...register("phoneNo", { required: true })}
                  ></input>
                  <p>
                    {errors.phoneNo && "Please Enter 10 digit Phone Number"}
                  </p>
                </div>*/} 
                <div class="col-md-12">
                  <label class="labels">SFSU E-mail</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    placeholder="@mail.sfsu.edu"
                    name="email"
                    {...register("email", { required: true })}
                  ></input>
                  <p>{errors.email?.message}</p>
                  {/*{errors.email && <p>{errors.email}</p>}*/}
                </div>
                <div class="col-md-12">
                  <label class="labels">Password</label>
                  <input
                    required
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    {...register("password", { required: true })}
                  ></input>
                  <p>{errors.password?.message}</p>
                </div>
                <div class="col-md-12">
                  <label class="labels">Re-enter Passowrd</label>
                  <input
                    required
                    type="password"
                    class="form-control"
                    placeholder="Re-enter Password"
                    name="confirmPassword"
                    {...register("confirmPassword", { required: true })}
                  ></input>
                  <p>{errors.confirmPassword && "Password don't match"}</p>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    By clicking Register, you agree to our Terms and Privacy
                    Policy.
                    <Link to="">Terms of Use</Link>
                  </label>
                </div>
              </div>
              <div class="mt-3 text-center">
                <button
                  class="btn btn-primary profile-button"
                  type="submit"
                  id="submit"
                >
                  Register
                </button>
                <div class="mt-4 text-center">
                  <h5>Already have an account?</h5>
                  <Link to="/Login">
                    <button
                      class="btn btn-primary profile-button"
                      type="submit"
                    >
                      Login{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default Registration;
