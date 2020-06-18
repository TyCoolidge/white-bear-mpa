import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

export default function AllCards() {
   return (
      <AppTemplate>
         {/* <!-- top of all cards page --> */}
         <div className="input-group-prepend mt-4 mb-4">
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

         <div className="row mb-6">
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

         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
         {/* key = allows react to iterate over data quickly */}
      </AppTemplate>
   );
}
