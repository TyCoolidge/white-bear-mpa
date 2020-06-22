import React from "react";
import successIcon from "../../icons/success.svg";
import errorIcon from "../../icons/error.svg";
import saveIcon from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

const memoryCard = memoryCards[0];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }
   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <div>
            {/* <!-- created success overlay --> */}
            <div
               className="bg-success w-100 py-4 d-none justify-content-center fixed-top"
               id="overlay-success"
            >
               <img
                  src={successIcon}
                  width="28px"
                  style={{ marginTop: "-1px" }}
                  className="mr-2"
                  alt="success icon"
               />
               {/* <!-- find out what broke this --> */}
               <p className="lead" style={{ color: "white" }}>
                  Card created!
               </p>
            </div>

            {/* <!-- created danger overlay --> */}
            <div
               className="bg-danger w-100 py-4 d-none justify-content-center fixed-top"
               id="overlay-danger"
            >
               <img
                  src={{ errorIcon }}
                  width="28px"
                  style={{ marginTop: "-1px" }}
                  className="mr-2"
                  alt="error icon"
               />
               {/* <!-- find out what broke this --> */}
               <p className="lead" style={{ color: "white" }}>
                  Oops! Our bad. Please try again.
               </p>
            </div>

            {/* <!-- comment just to split code for organization--> */}
            <AppTemplate>
               <h4 className="my-4 text-center text-muted">Edit card</h4>

               {/* <!--TOP CARD FOR FUTURE PAGES--> */}
               <div className="mb-2">
                  <div className="card bg-primary">
                     <div className="card-body">
                        {/* <!--add rows --> */}
                        {/* <textarea rows="7" autoFocus="autofocus"></textarea> */}
                        <textarea
                           rows="7"
                           defaultValue={memoryCard.imagery}
                           onChange={(e) => this.setImageryText(e)}
                        ></textarea>
                     </div>
                  </div>

                  <div className="card bg-secondary">
                     <div className="card-body">
                        {" "}
                        <textarea
                           rows="4"
                           defaultValue={memoryCard.answer}
                           onChange={(e) => this.setAnswerText(e)}
                        ></textarea>
                     </div>
                  </div>
               </div>
               {/* <!-- character count--> */}
               <p className="float-right mb-5 text-muted">
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.imageryText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Top: {this.state.imageryText.length}/{MAX_CARD_CHARS}
                  </span>{" "}
                  &nbsp;&nbsp;
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.answerText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
                  </span>
               </p>
               {/* <!-- create margin between card and buttons --> */}
               <div className="clearfix"></div>
               {/* <!-- make Button link to next page--> */}
               <Link
                  to="/all-cards"
                  type="button"
                  className="btn btn-link"
                  style={{ float: "left" }}
               >
                  Discard changes
               </Link>
               <div className="float-right">
                  <Link
                     type="button"
                     className={classnames("btn btn-primary btn-lg", {
                        disabled: this.checkHasInvalidCharCount(),
                     })}
                     id="save-imagery"
                  >
                     <img
                        src={saveIcon}
                        width="22px"
                        style={{ marginTop: "-1px" }}
                        className="mr-2"
                        alt="save icon"
                     />
                     Save
                  </Link>
               </div>
               <div className="clearfix"></div>

               <h4 className="mt-5 mb-3 text-center text-muted">
                  Card properties
               </h4>
               <div className="row mb-1">
                  <div className="col-4">
                     <p className="mb-2 text-muted">Created on:</p>
                     <p className="mb-2 text-muted">Last attempt:</p>
                     <p className="mb-2 text-muted">Next attempt:</p>
                     <p className="mb-2 text-muted">Consecutives:</p>
                  </div>

                  <div className="col-6 ml-6">
                     <p className="mb-2">
                        {toDisplayDate(memoryCard.createdAt, "MMM. d, y")}
                     </p>
                     <p className="mb-2">
                        {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}
                     </p>
                     <p className="mb-2">
                        {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}
                     </p>
                     <p className="mb-2">
                        {memoryCard.totalSuccessfulAttempts}
                     </p>
                  </div>
               </div>

               {/* <!-- Need to fix margins as well as checkbox color --> */}
               <div className="row">
                  <div className="col">
                     <form>
                        <div className="custom-control custom-checkbox mb-2">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                              name="example1"
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                           >
                              Show delete button
                           </label>
                        </div>
                     </form>

                     <Link
                        to="/all-cards"
                        className="btn btn-outline-danger "
                        id="deleteCard"
                     >
                        Delete this Card
                     </Link>
                  </div>
               </div>
            </AppTemplate>
         </div>
      );
   }
}
