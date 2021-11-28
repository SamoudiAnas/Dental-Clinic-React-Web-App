import { ref, set } from "firebase/database";
import { databaseRef } from "../firebase-config";
import { month_names } from "../Utils/DateVariables";

export default function DatabaseReducer(state = [], action) {
  //LOAD DATA FROM FIREBASE
  if (action.type === "LOAD_FROM_DATABASE") {
    state = action.payload;
    return state;
  }

  //ADD NEW ITEM TO FIREBASE
  if (action.type === "ADD_TO_DATABASE") {
    set(
      ref(
        databaseRef,
        "/" +
          action.payload.year +
          "/" +
          month_names[action.payload.month - 1] +
          "/" +
          action.payload.day +
          "/" +
          action.payload.id
      ),
      action.payload.item
    );
  }
}
