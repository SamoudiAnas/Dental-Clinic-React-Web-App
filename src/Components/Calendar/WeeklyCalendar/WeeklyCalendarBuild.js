import { month_names } from "../../../Utils/DateVariables";
import { databaseRef } from "../../../firebase-config";
import { set, ref } from "firebase/database";

export const DragAppointementHandler = (dayData, res) => {
  let itemSource, itemDestination, tempItem;
  //item source
  itemSource = dayData[res.source.index];

  if (res.destination === null) {
    return;
  }

  //item Destination
  itemDestination = dayData[res.destination.index];

  //save the destination item for later
  tempItem = itemSource;

  if (itemSource.id.substring(0, 5) === "empty") {
    return;
  }

  //get the date variables
  let year = itemSource.date.substring(0, 4);
  let month = itemSource.date.substring(5, 7);
  let day = itemSource.date.substring(8, 10);

  //swap item with empty place
  if (
    itemSource.id.substring(0, 5) !== "empty" &&
    itemDestination.id.substring(0, 5) === "empty"
  ) {
    //change the hour of the source to the hour of the destination
    //change the hour if the appointment
    set(
      ref(
        databaseRef,
        "/" +
          year +
          "/" +
          month_names[month - 1] +
          "/" +
          day +
          "/" +
          itemSource.id +
          "/hour"
      ),
      itemDestination.hour
    );

    //change the index of the hour if the appointment
    set(
      ref(
        databaseRef,
        "/" +
          year +
          "/" +
          month_names[month - 1] +
          "/" +
          day +
          "/" +
          itemSource.id +
          "/index"
      ),
      itemDestination.index
    );
  }

  //swap between two appointments
  if (
    itemSource.id.substring(0, 5) !== "empty" &&
    itemDestination.id.substring(0, 5) !== "empty"
  ) {
    //change the hour of the source to the hour of the destination
    console.log(tempItem);

    console.log(itemSource);

    console.log(itemDestination);

    /**
     *
     *    =======================
     *    ===== DESTINATION =====
     *    =======================
     *
     *
     */
    //change the hour if the appointment for the destination
    set(
      ref(
        databaseRef,
        "/" +
          year +
          "/" +
          month_names[month - 1] +
          "/" +
          day +
          "/" +
          itemDestination.id +
          "/hour"
      ),
      tempItem.hour
    );

    //change the index of the hour if the appointment
    set(
      ref(
        databaseRef,
        "/" +
          year +
          "/" +
          month_names[month - 1] +
          "/" +
          day +
          "/" +
          itemDestination.id +
          "/index"
      ),
      tempItem.index
    );

    /**
     *
     *    ======================
     *    ======= SOURCE =======
     *    ======================
     *
     *
     */
    //change the hour if the appointment for the source
    set(
      ref(
        databaseRef,
        "/" +
          year +
          "/" +
          month_names[month - 1] +
          "/" +
          day +
          "/" +
          itemSource.id +
          "/hour"
      ),
      itemDestination.hour
    );

    //change the index of the hour if the appointment
    set(
      ref(
        databaseRef,
        "/" +
          year +
          "/" +
          month_names[month - 1] +
          "/" +
          day +
          "/" +
          itemSource.id +
          "/index"
      ),
      itemDestination.index
    );
  }
};
