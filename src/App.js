import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Calendar from "./Pages/Calendar";
import PatientList from "./Pages/PatientList";

function App() {
  return (
    <Router>
      <Wrapper>
        <Sidebar />

        <div className="page-wrapper">
          <Switch>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/patient-list">
              <PatientList />
            </Route>
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
}
export const Wrapper = styled.div`
  display: flex;

  .page-wrapper {
    width: 100%;
  }
`;
export default App;
