import React from "react";

import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <div>
         <AppTemplate>
            <h4 className="my-4 text-center text-muted">Out of cards</h4>

            {/* <!--TOP CARD FOR FUTURE PAGES--> */}

            {/* <!-- <div className="card bg-primary col-md-12">
           <div className="card-body" style="color: white;">
              Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large
           </div>
        </div> -->

        <!-- make Button link to next page--> */}
            <button
               type="button"
               className="btn btn-link"
               style={{ float: "left" }}
            >
               Previous card
            </button>
            <button
               href="#"
               type="button"
               className="btn btn-outline-primary"
               style={{ float: "right" }}
            >
               Get more cards
            </button>
         </AppTemplate>
      </div>
   );
}
