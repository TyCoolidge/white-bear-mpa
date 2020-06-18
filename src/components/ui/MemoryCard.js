import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";

export default function MemoryCard(props) {
   return (
      <div>
         {/* <!-- first edit button --> */}
         <div className="row">
            <div className="col-10">
               <div className="card bg-primary ">
                  <div
                     className="card-body"
                     style={{ color: "white", fontSize: "16px" }}
                  >
                     {props.imagery}
                  </div>
               </div>

               <div className="card bg-secondary mb-5">
                  <div className="card-body" style={{ fontSize: "16px" }}>
                     {props.answer}
                  </div>
               </div>
            </div>
            <div className="col-2">
               <Link
                  to="/edit"
                  type="button"
                  className="btn btn-link float-right"
               >
                  <img
                     src={editIcon}
                     width="24px"
                     style={{ marginBottom: "0px" }}
                     className="mr-1"
                     alt="edit icon"
                  />
                  Edit
               </Link>
            </div>
         </div>
      </div>
   );
}
