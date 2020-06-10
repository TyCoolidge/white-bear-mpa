import React from "react";
import smallLogo from "../../icons/logo-app.svg";

export default function ReviewEmpty() {
   return (
      <div>
         <div class="container">
            <div class="row">
               <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <img src={smallLogo} width="32px;" alt="White Bear Logo" />

                  <h3 class="d-inline btn-group">White Bear</h3>
                  <a href="/" class="btn btn-link float-right">
                     Log out
                  </a>

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

                  <h4 class="my-4 text-center text-muted">Out of cards</h4>

                  {/* <!--TOP CARD FOR FUTURE PAGES--> */}

                  {/* <!-- <div class="card bg-primary col-md-12">
           <div class="card-body" style="color: white;">
              Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large
           </div>
        </div> -->

        <!-- make Button link to next page--> */}
                  <button
                     type="button"
                     class="btn btn-link"
                     style={{ float: "left" }}
                  >
                     Previous card
                  </button>
                  <button
                     href="#"
                     type="button"
                     class="btn btn-outline-primary"
                     style={{ float: "right" }}
                  >
                     Get more cards
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
