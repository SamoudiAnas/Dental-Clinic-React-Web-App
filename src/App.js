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
        <PrivateRoute exact path="/">
          <Overview />
        </PrivateRoute>

        <PrivateRoute exact path="/calendar">
          <CalendarPage />
        </PrivateRoute>

        <PrivateRoute exact path="/messages">
          <Messages />
        </PrivateRoute>

        <PrivateRoute exact path="/settings">
          <Settings />
        </PrivateRoute>
        <Route exact path="/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
