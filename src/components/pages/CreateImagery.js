import React from "react";
import successIcon from "../../icons/success.svg";
import errorIcon from "../../icons/error.svg";
import smallLogo from "../../icons/logo-app.svg";
import saveIcon from "../../icons/save.svg";
export default function CreateImagery() {
   return (
      <div>
         {/* //   <!-- created success overlay --> */}
         <div
            className="bg-success w-100 py-4 d-none justify-content-center fixed-top"
            id="overlay-success"
         >
            <img
               src={successIcon}
               width="28px"
               style={{ marginTop: "-1px" }}
               className="mr-2"
               alt="Success Icon"
            />
            {/* <!-- find out what broke this --> */}
            <p className="lead" style={{ color: "white" }}>
               Card created!
            </p>
         </div>

         {/* // <!-- created danger overlay --> */}
         <div
            className="bg-danger w-100 py-4 d-none justify-content-center fixed-top"
            id="overlay-danger"
         >
            <img
               src={errorIcon}
               width="28px"
               style={{ marginTop: "-1px" }}
               className="mr-2"
               alt="error icon"
            />
            {/* <!-- find out what broke this --> */}
            <p className="lead" style={{ color: "white" }}>
               Oops! Our bad. Please try again.
            </p>
         </div>

         {/* <!-- comment just to split code for organization--> */}
         <div className="container">
            <div className="row">
               <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div>
                     <img src={smallLogo} width="32px;" alt="White Bear Logo" />

                     <h3 className="d-inline btn-group">White Bear</h3>
                     <a href="/" className="btn btn-link float-right">
                        Log out
                     </a>
                  </div>

                  {/* <!--Navigation bar--> */}
                  <div
                     className="btn-group nav-bar"
                     role="navigation"
                     style={{ width: "100%" }}
                     aria-label="navigation"
                  >
                     <a
                        href="create-answer"
                        type="button"
                        className="btn btn-secondary tab-active"
                     >
                        Create new
                     </a>
                     <a
                        href="review-answer"
                        type="button"
                        className="btn btn-secondary tab-separator"
                     >
                        Review
                     </a>
                     <a
                        href="all-cards"
                        type="button"
                        className="btn btn-secondary tab-separator"
                     >
                        All cards
                     </a>
                  </div>

                  <h4 className="my-4 text-center text-muted">
                     Add memorable imagery
                  </h4>

                  {/* <!--TOP CARD FOR FUTURE PAGES--> */}
                  <div className="mb-2">
                     <div className="card bg-primary">
                        <div className="card-body">
                           {/* <!--add rows --> */}
                           <textarea
                              rows="7"
                              autofocus="autofocus"
                              id="imageryCard"
                           ></textarea>
                        </div>
                     </div>

                     <div className="card bg-secondary">
                        <div className="card-body">
                           <textarea rows="4" id="answerCard"></textarea>
                        </div>
                     </div>
                  </div>
                  {/* <!-- character count--> */}
                  <p className="float-right mb-5 text-muted">0/240</p>
                  {/* <!-- create margin between card and buttons --> */}
                  <div className="clearfix"></div>
                  {/* <!-- make Button link to next page--> */}
                  <button
                     type="button"
                     className="btn btn-link"
                     style={{ float: "left" }}
                     id="create-error"
                  >
                     Back to answer
                  </button>
                  <div className="float-right">
                     <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        id="save-imagery"
                     >
                        <img
                           src={saveIcon}
                           width="20px"
                           style={{ marginTop: "-1px" }}
                           className="mr-2"
                           alt="save icon"
                        />
                        Save
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
