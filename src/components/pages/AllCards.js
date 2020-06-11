import React from "react";
import editIcon from "../../icons/edit.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function AllCards(props) {
   return (
      <AppTemplate>
         {/* <!-- top of all cards page --> */}
         <div className="input-group-prepend mt-4 mb-5">
            <input
               type="text"
               className="form-control col-8 thick-border"
               placeholder="Search for a word"
            />
            <button
               type="submit"
               className="btn btn-primary btn-sm col-3 offset-1"
            >
               Search
            </button>
            <div className="clearfix"></div>
         </div>
         {/* <!-- come back to fix dropdown --> */}

         <div className="row">
            <div className="col-4">
               <p className="text-muted mt-2">Sort cards by</p>
            </div>
            <div className="col-8">
               <select className="thick-border form-control">
                  <option defaultValue>Most recent</option>
                  <option value="1">Easiest</option>
                  <option value="2">Hardest</option>
                  <option value="3">Oldest</option>
               </select>
            </div>
         </div>
         <div className="clearfix"></div>

         {/* <!-- first edit button --> */}
         <div className="row">
            <div className="mt-6 col-9">
               <div className="card bg-primary ">
                  <div
                     className="card-body"
                     style={{ color: "white", fontSize: "16px" }}
                  >
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large
                  </div>
               </div>

               <div className="card bg-secondary mb-5">
                  <div className="card-body" style={{ fontSize: "16px" }}>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large
                  </div>
               </div>
            </div>
            <div className=" mt-5 col-3">
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
         {/* <!-- second edit button--> */}
         <div className="row">
            <div className="col-9">
               <div className="card bg-primary">
                  <div
                     className="card-body"
                     style={{ color: "white", fontSize: "16px" }}
                  >
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large
                  </div>
               </div>

               <div className="card bg-secondary mb-5">
                  <div className="card-body" style={{ fontSize: "16px" }}>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large
                  </div>
               </div>
            </div>
            <div className="col-3">
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
      </AppTemplate>
   );
}
