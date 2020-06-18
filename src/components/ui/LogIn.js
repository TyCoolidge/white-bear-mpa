import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      <div className="col-xl-4 offset-xl-1 col-lg-5 col-md-5 col-sm-6">
         <div className="card">
            <div className="card-body">
               <h2 className="card-title">Welcome back</h2>
               <p style={{ fontSize: "13px" }} className="mb-5">
                  Log in with your email address and password.
               </p>
               <form className="needs-validation">
                  <h4 className="text-muted">Email address</h4>
                  <input
                     className="form-control thick-border"
                     type="text"
                     id="welcomeBackEmail"
                     required
                  />
                  <p
                     id="warningWelcomeEmail"
                     className="mb-4 invalid-feedback"
                     style={{
                        display: "none",
                        fontSize: "13px",
                     }}
                  >
                     Please enter your email address.
                  </p>
                  <h4 className="text-muted mt-2">Password</h4>
                  <input
                     className="form-control thick-border"
                     type="password"
                     id="welcomePassword"
                     required
                  />
                  <p
                     id="warningWelcomePassword"
                     className="mb-4 invalid-feedback"
                     style={{
                        display: "none",
                        fontSize: "13px",
                     }}
                  >
                     Please enter your password.
                  </p>
                  <p
                     id="warningWelcomePasswordCharacters"
                     className="invalid-feedback"
                     style={{
                        display: "none",
                        fontSize: "13px",
                     }}
                  >
                     Your password must be at least 9 characters.
                  </p>
                  {/* <!-- disable log in if email/ password fields are not accepted --> */}
                  <div className="float-right">
                     <Link
                        to="create-answer"
                        type="submit"
                        className="btn btn-success mt-5 "
                        id="logIn"
                     >
                        Log in
                     </Link>
                     {/* Link used to stay in React, acts like <a> */}
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
