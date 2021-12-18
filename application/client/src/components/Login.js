import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/css/bootstrap.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Registration.css";
import { Registration } from "./Registration";
import axios from "axios";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const schema = yup.object().shape({
  email: yup
    .string()
    .max(40, "Maximum Character only 40")
    .matches(/^([a-zA-Z0-9_-]+)(@mail.sfsu.edu)$/, "Email must be SFSU email"),
  password: yup
    .string()
    .min(8, "Minimum 8 character")
    .max(15, "Maximum 15 character")
    .required(),
});

function Login(props) {
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);

  const [loginStatus, setLoginStatus] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log({ data });

    const data1 = {
      email: data.email,
      password: data.password,
    };

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });

    const json = await response.json();

    console.log("login response", json);
    console.log(json.status);
    //console.log(response.data.email);

    if (json.status === "User does not exist") {
      console.log(setLoginStatus(json.data[0]));
      props.history.push("/Register");
      //props.history.push("/StudentProfile");
    } else if (json.status === "Password Incorrect") {
      setLoginStatus(json.message);

      props.history.push("/Login");
    } else {
      console.log("res json", json);
      setLoggedInUser(json);
      localStorage.setItem("whpf_user", JSON.stringify(json));
      props.history.push("/");
      setLoginStatus(json.message);
      //setLoginStatus(json.status);
    }

    //loggedInUser.setLoggedInUser(res.data.data[0]);
    //if (res.data.status != "User does not exist") {
    //setLoginStatus(res.data.message);
    // props.history.push("/StudentProfile");
    //} else {
    //setLoginStatus(res.data[0]);
    //}
    //props.history.push("/StudentProfile");
  };

  return (
    <div class="container rounded-5 bg-white mt-5 mb-5">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div class="row">
          <div class="col-md-3 border-right"></div>
          <div class="col-md-5 border-right">
            <div class="">
              <h3 class="text-center display-5">Login</h3>

              <div class="row mt-3">
                <div>
                  <label class="labels">SFSU E-mail</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    placeholder="SFSU E-Mail"
                    {...register("email", { required: true })}
                  ></input>
                  <p>{errors.email && "Please enter SFSU email"}</p>
                </div>
                <div>
                  <label class="labels">Password</label>
                  <input
                    required
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  ></input>
                  <p>{errors.password?.message}</p>
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="submit">
                  Login{" "}
                </button>
              </div>

              <div class="mt-3 text-center">
                <h5>Don't have an account?</h5>
                <Link to="/Registration">
                  <button class="btn btn-primary profile-button" type="submit">
                    Register{" "}
                  </button>
                </Link>
              </div>

              {/** <Link to="/Registration">Don't have an account? Register</Link>*/}
            </div>
          </div>
        </div>
      </form>
      {/*<p>{setLoginStatus}</p>*/}
    </div>
  );
}

export default Login;
