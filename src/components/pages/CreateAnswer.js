import React from "react";
import AppTemplate from "../ui/AppTemplate";

export default function CreateAnswer() {
   return (
      <AppTemplate>
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
                     autoFocus="autofocus"
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
      </AppTemplate>
   );
}
