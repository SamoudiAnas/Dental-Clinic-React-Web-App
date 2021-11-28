import { replaceEmptyAppointments } from "../Utils/BuildAppointments";

export default function AppointmentReducer(state = [], action) {
  //load and organize data imported from firebase
  if (action.type === "LOAD_DATA") {
    state = replaceEmptyAppointments(action.payload);
    return state;
  }
}
