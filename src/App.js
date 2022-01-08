import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Overview from "./Pages/Overview";
import CalendarPage from "./Pages/CalendarPage";
import Messages from "./Pages/Messages";
import Auth from "./Pages/Auth";
import Settings from "./Pages/Settings";

//routes
import PrivateRoute from "./Components/Route/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/TheDental/admin">
          <Overview />
        </PrivateRoute>

        <PrivateRoute exact path="/TheDental/admin/calendar">
          <CalendarPage />
        </PrivateRoute>

        <PrivateRoute exact path="/TheDental/admin/messages">
          <Messages />
        </PrivateRoute>

        <PrivateRoute exact path="/TheDental/admin/settings">
          <Settings />
        </PrivateRoute>
        <Route exact path="/TheDental/admin/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
