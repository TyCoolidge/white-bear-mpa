import React from "react";
import smallLogo from "../../icons/logo-app.svg";

export default function CreateAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img src={smallLogo} width="32px;" alt="White Bear Logo" />

               <h3 className="d-inline btn-group">White Bear</h3>
               <a href="/" className="btn btn-link float-right">
                  Log out
               </a>

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

               <h4 className="my-4 text-center text-muted">Add an answer</h4>

               {/* <!--TOP CARD FOR FUTURE PAGES--> */}
               {/* 
        <!-- <div className="card bg-primary col-md-12">
           <div className="card-body" style="color: white;">
              Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large
           </div>
        </div> --> */}
               <div className="mb-2">
                  <div className="card bg-secondary">
                     <div className="card-body">
                        <textarea
                           rows="7"
                           autofocus="autofocus"
                           id="textInput"
                        ></textarea>
                     </div>
                  </div>
               </div>
               {/* <!-- character count--> */}
               <p className="float-right mb-4" id="overLimit">
                  <span id="wordCount">0</span>/240
               </p>
               {/* <!-- create margin between card and buttons --> */}
               <div className="clearfix"></div>

               {/* <!-- make Button link to next page--> */}
               <a
                  href="create-imagery.html"
                  type="button"
                  className="btn btn-outline-primary btn-lg disabled"
                  style={{ float: "right" }}
                  id="nextButton"
               >
                  Next
               </a>
            </div>
         </div>
      </div>
   );
}
