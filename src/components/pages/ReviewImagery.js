import React from "react";
import thumbsUp from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         {/* <!--TOP CARD FOR FUTURE PAGES--> */}
         <div className="my-5">
            <div className="card bg-primary">
               <div className="card-body" style={{ color: "white" }}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large
               </div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large
               </div>
            </div>
         </div>

         {/* <!-- make Button link to next page--> */}
         <a
            href="edit"
            type="button"
            className="btn btn-link"
            style={{ float: "left" }}
         >
            Edit
         </a>
         <div className="float-right">
            <a
               href="review-answer"
               type="button"
               className="btn btn-outline-primary mr-5"
            >
               Needs Work
            </a>
            <a href="review-empty" type="button" className="btn btn-secondary ">
               <img
                  src={thumbsUp}
                  width="20px"
                  style={{ marginBottom: "5px" }}
                  className="mr-2"
                  alt="thumbsUp"
               />
               Got it
            </a>
         </div>
      </AppTemplate>
   );
}
