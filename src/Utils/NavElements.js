import { ReactComponent as Calendar } from "../Images/calendar.svg";
import { ReactComponent as Patient } from "../Images/patient.svg";
export const NavElements = [
  {
    name: "Calendar",
    path: "/calendar",
    icon: <Calendar className="nav-icon" />,
  },
  {
    name: "Patient List",
    path: "/patient-list",
    icon: <Patient className="nav-icon" />,
  },
];
