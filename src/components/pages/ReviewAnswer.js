import React from "react";
import thumbsUp from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/actions";

class ReviewAnswer extends React.Component {
   goToNextCard() {
      //TODO if index of current card =total length THEN show out of cards
      this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
      this.props.history.push("/review-imagery");
   }
   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];
      return (
         <AppTemplate>
            {/* <!--TOP CARD FOR FUTURE PAGES--> */}
            <div className="my-5">
               <div className="card bg-primary">
                  <div className="card-body" style={{ color: "white" }}>
                     {memoryCard && memoryCard.imagery}
                  </div>
               </div>

               <div className="card bg-secondary">
                  <div className="card-body">
                     {memoryCard && memoryCard.answer}
                  </div>
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
               <button
                  type="button"
                  onClick={() => {
                     this.goToNextCard();
                  }}
                  className="btn btn-outline-primary mr-5"
               >
                  Needs Work
               </button>
               <button
                  type="button"
                  onClick={() => {
                     this.goToNextCard();
                  }}
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
}

function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}
export default connect(mapStateToProps)(ReviewAnswer);
