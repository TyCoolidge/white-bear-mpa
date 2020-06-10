import React from "react";
import LogoLanding from "../../icons/logo-landing.png";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container mt-7">
            <div className="row">
               <div className="col">
                  {/* <!-- NEED TO MAKE MOBILE FRIENDLY 
          <div
          className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1"
       > -->
          <!--First card, needs correct fonts and margins, also needs drop down when clicking sign up--> */}
                  <div className="row mb-3">
                     <div className="col">
                        <div className="d-flex justify-content-start">
                           <img
                              className="img-responsive mr-5 img-size"
                              src={LogoLanding}
                              alt="White Bear Logo"
                              width="135px;"
                           />
                           <h1
                              className="ml-3 h1-size"
                              style={{ color: "white" }}
                           >
                              White Bear
                           </h1>
                        </div>
                     </div>
                  </div>

                  {/* <!--REMINDER to make mobile friendly get text to reappear & fix margins for textbox--> */}
                  <div className="row mt-5">
                     <div className="col-xl-4 offset-xl-1 mb-5 col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
                        <div className="card">
                           <div className="card-body">
                              <h2 className="card-title">Nice to meet you</h2>
                              <p style={{ fontSize: "13px;" }} className="mb-1">
                                 Sign up for White Bear. Free forever.
                              </p>
                              <p
                                 style={{ color: " blue", fontSize: "13px;" }}
                                 className="mb-5"
                                 id="signUpText"
                              >
                                 Let's get you signed up.
                              </p>

                              <button
                                 type="button"
                                 className="btn btn-success btn-block mt-5"
                                 id="signup"
                              >
                                 Sign up
                              </button>
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
                                       display: "none;",
                                       fontSize: "13px;",
                                    }}
                                 >
                                    Please enter your email address.
                                 </p>
                                 <p
                                    id="noUniqueCharacters"
                                    className="mb-4 invalid-feedback"
                                    style={{
                                       display: "none",
                                       fontSize: "13px;",
                                    }}
                                 >
                                    Please enter a email that contains three
                                    unique characters
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
                                       fontSize: "13px;",
                                    }}
                                 >
                                    Please enter your password.
                                 </p>
                                 <p
                                    id="warningPasswordCharacters"
                                    className="invalid-feedback mb-1"
                                    style={{
                                       display: "none",
                                       fontSize: "13px;",
                                    }}
                                 >
                                    Your password must be at least 9 characters.
                                 </p>
                                 <p
                                    id="noEmailPassword"
                                    className="invalid-feedback"
                                    style={{
                                       display: "none",
                                       fontSize: "13px;",
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
                                       fontSize: "13px;",
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
                           </div>
                        </div>
                     </div>

                     {/* <!--Second card that needs fonts and margins as well--> */}
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
                                       fontSize: "13px;",
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
                                       fontSize: "13px;",
                                    }}
                                 >
                                    Please enter your password.
                                 </p>
                                 <p
                                    id="warningWelcomePasswordCharacters"
                                    className="invalid-feedback"
                                    style={{
                                       display: "none",
                                       fontSize: "13px;",
                                    }}
                                 >
                                    Your password must be at least 9 characters.
                                 </p>
                                 {/* <!-- disable log in if email/ password fields are not accepted --> */}
                                 <div className="float-right">
                                    <a
                                       href="create-answer"
                                       type="submit"
                                       className="btn btn-success mt-5 btn-lg"
                                       id="logIn"
                                    >
                                       Log in
                                    </a>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
