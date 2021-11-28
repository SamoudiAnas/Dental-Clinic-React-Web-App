import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Overview from "./Pages/Overview";
import CalendarPage from "./Pages/CalendarPage";
import PatientList from "./Pages/PatientList";
import Auth from "./Pages/Auth";

//routes
import PrivateRoute from "./Components/Route/PrivateRoute";
import Settings from "./Pages/Settings";

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

        <PrivateRoute exact path="/patient-list">
          <PatientList />
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
