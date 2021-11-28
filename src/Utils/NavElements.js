import { ReactComponent as Calendar } from "../Images/calendar.svg";
import { ReactComponent as Patient } from "../Images/patient.svg";
import { ReactComponent as Dashboard } from "../Images/dashboard.svg";
import { ReactComponent as Settings } from "../Images/settings.svg";
export const NavElements = [
  {
    name: "Dashboard",
    path: "/",
    icon: <Dashboard className="nav-icon" />,
  },
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
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="nav-icon" />,
  },
];
