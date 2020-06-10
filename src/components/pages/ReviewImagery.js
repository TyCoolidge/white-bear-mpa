import React from "react";
import smallLogo from "../../icons/logo-app.svg";
import thumbsUp from "../../icons/thumbs-up.svg";

export default function ReviewImagery() {
   return (
      <div class="container">
         <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <div>
                  <img src={smallLogo} width="32px;" alt="White Bear Logo" />

                  <h3 class="d-inline btn-group">White Bear</h3>
                  <a href="/" class="btn btn-link float-right">
                     Log out
                  </a>
               </div>

               {/* <!--Navigation bar--> */}
               <div
                  class="btn-group nav-bar"
                  role="navigation"
                  style={{ width: "100%" }}
                  aria-label="navigation"
               >
                  <a
                     href="create-answer"
                     type="button"
                     class="btn btn-secondary"
                  >
                     Create new
                  </a>
                  <a
                     href="review-answer"
                     type="button"
                     class="btn btn-secondary tab-separator tab-active"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards"
                     type="button"
                     class="btn btn-secondary tab-separator"
                  >
                     All cards
                  </a>
               </div>

               {/* <!--TOP CARD FOR FUTURE PAGES--> */}
               <div class="my-5">
                  <div class="card bg-primary">
                     <div class="card-body" style={{ color: "white" }}>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large
                     </div>
                  </div>

                  <div class="card bg-secondary">
                     <div class="card-body">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large
                     </div>
                  </div>
               </div>

               {/* <!-- make Button link to next page--> */}
               <a
                  href="edit"
                  type="button"
                  class="btn btn-link"
                  style={{ float: "left" }}
               >
                  Edit
               </a>
               <div class="float-right">
                  <a
                     href="review-answer"
                     type="button"
                     class="btn btn-outline-primary mr-4"
                  >
                     Needs Work
                  </a>
                  <a
                     href="review-empty"
                     type="button"
                     class="btn btn-secondary"
                  >
                     <img
                        src={thumbsUp}
                        width="20px"
                        style={{ marginBottom: "5px" }}
                        class="mr-2"
                        alt="thumbsUp"
                     />
                     Got it
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
