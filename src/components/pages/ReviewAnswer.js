import React from "react";
import thumbsUp from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[0];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         {/* <!--TOP CARD FOR FUTURE PAGES--> */}
         <div className="my-5">
            <div className="card bg-primary">
               <div className="card-body" style={{ color: "white" }}>
                  {memoryCard.imagery}
               </div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">{memoryCard.answer}</div>
            </div>
         </div>

         {/* <!-- make Button link to next page--> */}
         <Link
            to="/edit"
            type="button"
            className="btn btn-link"
            style={{ float: "left" }}
         >
            Edit
         </Link>
         <div className="float-right">
            <Link
               to="/review-imagery"
               type="button"
               className="btn btn-outline-primary mr-5"
            >
               Needs Work
            </Link>
            <button
               href="review-empty"
               type="button"
               className="btn btn-secondary "
            >
               <img
                  src={thumbsUp}
                  width="20px"
                  style={{ marginBottom: "5px" }}
                  className="mr-2"
                  alt="thumbsUp"
               />
               Got it
            </button>
         </div>
      </AppTemplate>
   );
}
