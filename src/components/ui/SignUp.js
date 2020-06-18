import React from "react";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         isDisplayingSignUpInputs: false,
      };
   }

   toggleSignUpInputs() {
      //  function assigned to sign up button, changes current state to equal the opposite state which hides our sign up inputs
      this.setState({
         isDisplayingSignUpInputs: !this.state.isDisplayingSignUpInputs,
      });
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
                  {this.isDisplayingSignUpInputs && (
                     <>
                        <p
                           style={{ color: " blue", fontSize: "13px" }}
                           className="mb-5"
                           id="signUpText"
                        >
                           Let's get you signed up.
                        </p>

                        {/* <!-- Dragdown menu once click on signup --> */}
                        <div id="dragdown">
                           <h4 className="text-muted">Email address</h4>
                           <input
                              className="form-control thick-border"
                              type="text"
                              required
                              id="emailRequired"
                           />
                           <p
                              id="warningEmail"
                              className="mb-4 invalid-feedback"
                              style={{
                                 display: "none",
                                 fontSize: "13px",
                              }}
                           >
                              Please enter your email address.
                           </p>
                           <p
                              id="noUniqueCharacters"
                              className="mb-4 invalid-feedback"
                              style={{
                                 display: "none",
                                 fontSize: "13px",
                              }}
                           >
                              Please enter a email that contains three unique
                              characters
                           </p>
                           <h4 className="text-muted mt-2">
                              Create a password
                           </h4>
                           <input
                              className="form-control thick-border mb-1"
                              type="password"
                              required
                              id="requiredPassword"
                           />
                           <p
                              id="warningPassword"
                              className="mb-3 invalid-feedback"
                              style={{
                                 display: "none",
                                 fontSize: "13px",
                              }}
                           >
                              Please enter your password.
                           </p>
                           <p
                              id="warningPasswordCharacters"
                              className="invalid-feedback mb-1"
                              style={{
                                 display: "none",
                                 fontSize: "13px",
                              }}
                           >
                              Your password must be at least 9 characters.
                           </p>
                           <p
                              id="noEmailPassword"
                              className="invalid-feedback"
                              style={{
                                 display: "none",
                                 fontSize: "13px",
                              }}
                           >
                              Your email address cannot be used in your
                              password.
                           </p>
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
                           <button
                              href="#"
                              type="button"
                              className="mt-5 btn btn-success btn-block"
                              id="letsGo"
                           >
                              Let's go!
                           </button>
                        </div>
                     </>
                  )}
                  {!this.isDisplayingSignUpInputs && (
                     <button
                        className="btn btn-success btn-block mt-5"
                        //  function assigned to onClick, should return sign up menu
                        onClick={() => {
                           this.toggleSignUpInputs();
                        }}
                     >
                        Sign up
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
