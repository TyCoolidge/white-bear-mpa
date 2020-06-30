import { actions } from "../actions";

export default function queuedCards(state = [], action) {
   // action.GET_USER - "GET_USER"
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload;
      default:
         return state;
   }
}
