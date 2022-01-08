import { ReactComponent as Calendar } from "../Images/calendar.svg";
import { ReactComponent as Message } from "../Images/message.svg";
import { ReactComponent as Dashboard } from "../Images/dashboard.svg";
import { ReactComponent as Settings } from "../Images/settings.svg";

export const NavElements = [
  /*{
    name: "Dashboard",
    path: "/",
    icon: <Dashboard className="nav-icon" />,
  },*/
  {
    name: "Calendar",
    path: "/TheDental/admin/calendar",
    icon: <Calendar className="nav-icon" />,
  },
  {
    name: "Messages",
    path: "/TheDental/admin/messages",
    icon: <Message className="nav-icon" />,
  },
  {
    name: "Settings",
    path: "/TheDental/admin/settings",
    icon: <Settings className="nav-icon" />,
  },
];
