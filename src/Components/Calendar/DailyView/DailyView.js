import React, { useState, useEffect } from "react";
import styled from "styled-components";

//contexts
import { useDateContext } from "../../../Contexts/DateContext";
import { useAppointmentsContext } from "../../../Contexts/AppointmentsContext";

//components
import NothingFound from "../../Not Found/NothingFound";
import PatientAppointment from "../../PatientComponents/PatientAppointment";

function DailyView() {
  const { date } = useDateContext();
  const { appointments, getAppointmentsByDate } = useAppointmentsContext();
  const [dailyAppointments, setDailyAppointments] = useState([]);

  useEffect(() => {
    setDailyAppointments(getAppointmentsByDate(date));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDailyAppointments(getAppointmentsByDate(date));
    //eslint-disable-next-line
  }, [date, appointments]);

  return (
    <Wrapper>
      {dailyAppointments.length !== 0 ? (
        <div>
          <div className="clients_container">
            <h4>Client Name</h4>
            <h4> Appointment Hour</h4>
            <h4>Phone Number</h4>
            <h4>Edit</h4>
            <h4>Delete</h4>
          </div>
          {dailyAppointments.map((item) => (
            <PatientAppointment key={item._id} dayData={item} />
          ))}
        </div>
      ) : (
        <NothingFound />
      )}
    </Wrapper>
  );
}

export default DailyView;

const Wrapper = styled.div`
  padding-top: 2rem;
  .clients_container {
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 1fr 1fr;
    align-items: center;
    padding: 1rem;
    color: #313131;
    background-color: #eee;
  }
`;
