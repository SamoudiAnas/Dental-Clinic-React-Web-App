import { ref, update } from "firebase/database";
import { databaseRef } from "../firebase-config";
import { hoursOfWork, month_names } from "./DateVariables";

export const editAppointment = (id, name, date, oldDate, hour, getData) => {
  //get the date variables
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);

  if (isAppointmentReserved(date, hour, getData)) {
    return "This date and hour is already reserved!";
  } else {
    //update the data in the appointment
    const updates = {};
    updates["/" + year + "/" + month_names[month - 1] + "/" + day + "/" + id] =
      {
        id: id,
        clientName: name,
        date: date,
        hour: hour,
        index: hoursOfWork.indexOf(hour),
      };

    if (oldDate !== date) {
      //get the date variables from the old date
      let oldYear = oldDate.substring(0, 4);
      let oldMonth = oldDate.substring(5, 7);
      let oldDay = oldDate.substring(8, 10);
      updates[
        "/" +
          oldYear +
          "/" +
          month_names[oldMonth - 1] +
          "/" +
          oldDay +
          "/" +
          id
      ] = null;
    }

    update(ref(databaseRef), updates);
    return "";
  }
};

//this function will check if the date ...
//... and the hour given are already reserved...
//... for na appointment.

const isAppointmentReserved = (date, hour, getData) => {
  //return value
  let isReserved = false;

  //get the date variables
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);

  //get the old data to check if the place selected is reserved
  let oldData = getData(year, month_names[parseInt(month) - 1], day);

  //if the selected day has no appointments
  if (oldData.length === 0) {
    return isReserved;
    //if the selected day has appointments
  } else {
    //check is the selected day and time is already reserved
    oldData.forEach((item) => {
      //if so
      if (item.hour === hour) {
        isReserved = true;
        return isReserved;
      }
    });
  }
  return isReserved;
};
