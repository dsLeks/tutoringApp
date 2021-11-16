import React from "react"
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

function Login(){

    return(
        <div class="container rounded-5 bg-white mt-5 mb-5">
        <form className="form">
        <div class="row">
            <div class="col-md-3 border-right">
            </div>
            <div class="col-md-5 border-right">
                <div class="" >
                        <h3 class="text-center display-5">Login</h3>

                    <div class="row mt-3">
                    <div><label class="labels">SFSU E-mail</label><input required type="email" class="form-control"  placeholder="SFSU E-Mail"></input></div>
                    <div><label class="labels">Password</label><input required type="password" class="form-control"  placeholder="Last Name"></input></div>
                    </div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" >Login   </button></div>
                </div>
            </div>
            
        </div>
        <div>

        </div>
        </form>
    </div>
    )
}


export default Login;