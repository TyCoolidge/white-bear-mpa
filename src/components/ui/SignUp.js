import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false, // error will not display by default
         hasPasswordError: false,
      };
   }

   showInputs() {
      //  function assigned to sign up button, changes current state to equal the opposite state which hides our sign up inputs
      this.setState({
         isDisplayingInputs: true,
      });
   }

   async setEmailState(emailInput) {
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address",
            hasEmailError: true, //will display if input is empty
         });
      else if (emailRegex.test(emailInput.toLowerCase()) === false) {
         this.setState({
            emailError: "Please enter a valid email address",
            hasEmailError: true, //will display if email doesnt fit regex
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      if (localPart === "") return false;
      //removes bug of displaying uniqChars error message
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart); // returns boolean(true)
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);
      const uniqChars = [...new Set(passwordInput)];
      //array of unique characters
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password",
            hasPasswordError: true, //will display if input is empty
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         // returns boolean
         this.setState({
            passwordError:
               "Your email address cannot be used in your password.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "Your password must contain at least 3 unique characters ",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      //need async in ordxer for await to work
      const emailInput = document.getElementById("email-input").value;
      const passwordInput = document.getElementById("create-password-input")
         .value;
      await this.setEmailState(emailInput); //waits until the promise of setEmailState has settled and returns result
      await this.setPasswordState(passwordInput, emailInput); //waits until the promise of setPasswordState has settled and returns result
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
      }
   }

   render() {
      return (
         <div className="col-xl-4 offset-xl-1 mb-5 col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
            <div className="card">
               <div className="card-body">
                  <h2 className="card-title">Nice to meet you</h2>
                  <p style={{ fontSize: "13px" }} className="mb-1">
                     Sign up for White Bear. Free forever.
                  </p>
                  {this.state.isDisplayingInputs && (
                     <>
                        <p
                           style={{ color: " blue", fontSize: "13px" }}
                           className="mb-5"
                           id="signUpText"
                        >
                           Let's get you signed up.
                        </p>

                        {/* <!-- Dragdown menu once click on signup --> */}
                        <h4 className="text-muted">Email address</h4>
                        <input
                           className={classnames({
                              "form-control": true,
                              "thick-border": true,
                              "is-invalid": this.state.hasEmailError,
                           })} ///format for classnames, set the class is invalid to current state of hasEmailError which is set at false
                           type="email"
                           id="email-input"
                        />
                        {this.state.hasEmailError && (
                           <p
                              className="text-danger mt-1"
                              style={{
                                 fontSize: "14px",
                              }}
                           >
                              {this.state.emailError}
                           </p>
                        )}
                        <h4 className="text-muted mt-2">Create a password</h4>
                        <input
                           className={classnames({
                              "form-control": true,
                              "thick-border": true,
                              "mb-1": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           type="password"
                           id="create-password-input"
                        />
                        {this.state.hasPasswordError && (
                           <p
                              id="warningPassword"
                              className="mb-3 text-danger"
                              style={{
                                 fontSize: "14px",
                              }}
                           >
                              {this.state.passwordError}
                           </p>
                        )}

                        <p
                           id="warningNoCommon"
                           className="invalid-feedback"
                           style={{
                              display: "none",
                              fontSize: "13px",
                           }}
                        >
                           Do not use a common password.
                        </p>
                        <Link
                           to="#"
                           className="mt-5 btn btn-success btn-block"
                           onClick={() => {
                              this.validateAndCreateUser();
                           }}
                        >
                           Let's go!
                        </Link>
                     </>
                  )}
                  {/*if this.state is the opposite , then render button  */}
                  {!this.state.isDisplayingInputs && (
                     <Link
                        to="#"
                        className="btn btn-success btn-block mt-2"
                        //  function assigned to onClick, should return sign up menu
                        onClick={() => {
                           this.showInputs();
                        }}
                     >
                        Sign up
                     </Link>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
