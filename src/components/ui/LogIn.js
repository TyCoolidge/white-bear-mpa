import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         logInEmailError: "",
         logInPasswordError: "",
         hasLogInEmailError: false,
         hasLogInPasswordError: false,
      };
   }
   async setLogInEmailState(logInEmailInput) {
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (logInEmailInput === "")
         this.setState({
            logInEmailError: "Please enter your email address",
            hasLogInEmailError: true, //will display if input is empty
         });
      else if (emailRegex.test(logInEmailInput.toLowerCase()) === false) {
         this.setState({
            logInEmailError: "Please enter a valid email address",
            hasLogInEmailError: true, //will display if email doesnt fit regex
         });
      } else {
         this.setState({ logInEmailError: "", hasLogInEmailError: false });
      }
   }
   async setLogInPasswordState(logInPasswordInput) {
      //   console.log(passwordInput);
      //   const uniqChars = [...new Set(passwordInput)];
      //array of unique characters
      if (logInPasswordInput === "") {
         this.setState({
            logInPasswordError: "Please create a password",
            hasLogInPasswordError: true, //will display if input is empty
         });
      } else {
         this.setState({
            logInPasswordError: "",
            hasLogInPasswordError: false,
         });
      }
   }

   async validateAndLogInUser() {
      //need async in ordxer for await to work
      const logInEmailInput = document.getElementById("welcome-back-email")
         .value;
      const logInPasswordInput = document.getElementById(
         "welcome-back-password"
      ).value;
      await this.setLogInEmailState(logInEmailInput); //waits until the promise of setEmailState has settled and returns result
      await this.setLogInPasswordState(logInPasswordInput); //waits until the promise of setPasswordState has settled and returns result
      if (
         this.state.hasLogInEmailError === false &&
         this.state.hasLogInPasswordError === false
      ) {
         const logInUser = {
            id: getUuid(),
            email: logInEmailInput,
            password: hash(logInPasswordInput),
            createdAt: Date.now(),
         };
         console.log(logInUser);
      }
   }

   checkIfLogInInputsAreValid(logInEmailInput) {
      if (
         this.state.hasLogInEmailError === false ||
         this.state.hasLogInPasswordError === false ||
         logInEmailInput !== ""
      ) {
         return "/create-answer";
      } else {
         return "#";
      }
   }
   render() {
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
                        className={classnames({
                           "form-control": true,
                           "thick-border": true,
                           "is-invalid": this.state.hasLogInEmailError,
                        })}
                        type="text"
                        id="welcome-back-email"
                        required
                     />
                     {this.state.hasLogInEmailError && (
                        <p
                           id="warningWelcomeEmail"
                           className="mb-4 text-danger"
                           style={{
                              fontSize: "14px",
                           }}
                        >
                           {this.state.logInEmailError}
                        </p>
                     )}
                     <h4 className="text-muted mt-2">Password</h4>
                     <input
                        className={classnames({
                           "form-control": true,
                           "thick-border": true,
                           "is-invalid": this.state.hasLogInPasswordError,
                        })}
                        type="password"
                        id="welcome-back-password"
                        required
                     />
                     {this.state.hasLogInPasswordError && (
                        <p
                           id="warningWelcomePassword"
                           className="mb-4 text-danger"
                           style={{
                              fontSize: "14px",
                           }}
                        >
                           {this.state.logInPasswordError}
                        </p>
                     )}

                     {/* <!-- disable log in if email/ password fields are not accepted --> */}
                     <div className="float-right">
                        <Link
                           to={this.checkIfLogInInputsAreValid()}
                           className={classnames("btn btn-success mt-5", {
                              //   disabled: this.checkIfLogInInputsAreValid(),
                           })}
                           onClick={() => {
                              this.validateAndLogInUser();
                           }}
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
}
