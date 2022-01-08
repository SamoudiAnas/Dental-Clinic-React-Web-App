import { editAppointment } from "../../../helpers/DataHelpers";

export const dragAppointementHandler = (res, data) => {
  //if the destination is null
  if (res.destination === null) {
    return;
  }

  //if im dragging on the 9th column
  if (res.destination.index === 8) {
    return;
  }

  //if im dragging empty appointment
  if (res.draggableId.substring(0, 5) === "empty") {
    return;
  }

  //if the element dragged is put in the same place
  if (
    res.source.index === res.destination.index &&
    res.source.droppableId === res.destination.droppableId
  ) {
    return;
  }

  let sourceObject;
  //source
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 8; j++) {
      if (data[i][j]._id === res.draggableId) {
        sourceObject = data[i][j];
      }
    }
  }

  let destinationDate;
  //date of destination
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 8; j++) {
      if (data[i][j]._id === res.destination.droppableId) {
        destinationDate = data[i][j].date;
      }
    }
  }

  let destinationObject;
  //find the destination object by date and the index of the hour
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 8; j++) {
      if (
        data[i][j].date === destinationDate &&
        data[i][j].index === res.destination.index
      ) {
        destinationObject = data[i][j];
      }
    }
  }

  if (destinationObject._id.substring(0, 5) === "empty") {
    editAppointment(
      sourceObject._id,
      sourceObject.clientName,
      sourceObject.phone,
      destinationObject.date,
      destinationObject.hour
    );
  }

  if (destinationObject._id.substring(0, 5) !== "empty") {
    editAppointment(
      sourceObject._id,
      sourceObject.clientName,
      sourceObject.phone,
      destinationObject.date,
      destinationObject.hour
    );

    editAppointment(
      destinationObject._id,
      destinationObject.clientName,
      destinationObject.phone,
      sourceObject.date,
      sourceObject.hour
    );
  }
};
