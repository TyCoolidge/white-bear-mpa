import React from "react";
import smallLogo from "../../icons/logo-app.svg";

export default function ReviewAnswer() {
   return (
      <div>
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
                        className="btn btn-secondary"
                     >
                        Create new
                     </a>
                     <a
                        href="review-answer"
                        type="button"
                        className="btn btn-secondary tab-separator tab-active"
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

                  {/* <!--TOP CARD FOR FUTURE PAGES--> */}
                  <div className="my-5">
                     <div className="card bg-primary">
                        <div className="card-body" style={{ color: "white" }}>
                           Far far away, behind the word mountains, far from the
                           countries Vokalia and Consonantia, there live the
                           blind texts. Separated they live in Bookmarksgrove
                           right at the coast of the Semantics, a large language
                           ocean. A small river named Duden flows by their place
                           and supplies it with the necessary
                        </div>
                     </div>
                  </div>
                  {/* <!-- make Button link to next page--> */}
                  <button
                     type="button"
                     className="btn btn-link"
                     style={{ float: "left" }}
                  >
                     Previous card
                  </button>
                  <div className="float-right">
                     <a
                        href="review-imagery"
                        type="button"
                        className="btn btn-outline-primary"
                     >
                        Show answer
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
