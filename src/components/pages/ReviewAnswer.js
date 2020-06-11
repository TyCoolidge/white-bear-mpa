import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewAnswer() {
   return (
      <div>
         <AppTemplate>
            {/* <!--TOP CARD FOR FUTURE PAGES--> */}
            <div className="my-5">
               <div className="card bg-primary">
                  <div className="card-body" style={{ color: "white" }}>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large language ocean. A small
                     river named Duden flows by their place and supplies it with
                     the necessary
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
               <Link
                  to="review-imagery"
                  type="button"
                  className="btn btn-outline-primary"
               >
                  Show answer
               </Link>
            </div>
         </AppTemplate>
      </div>
   );
}
