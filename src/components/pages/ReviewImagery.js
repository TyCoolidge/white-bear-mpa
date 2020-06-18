import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[0];

export default function ReviewImagery() {
   return (
      <div>
         <AppTemplate>
            {/* <!--TOP CARD FOR FUTURE PAGES--> */}
            <div className="my-5">
               <div className="card bg-primary">
                  <div className="card-body" style={{ color: "white" }}>
                     {memoryCard.imagery}
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
                  to="review-answer"
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
