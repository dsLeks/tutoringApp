import React from "react"
import { useForm } from "react-hook-form";
// import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/css/bootstrap.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Registration.css";


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



function Login() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
      console.log({ data });
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
                      placeholder="Last Name"
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
              </div>
            </div>
          </div>
          <div></div>
        </form>
      </div>
    );
}


export default Login;