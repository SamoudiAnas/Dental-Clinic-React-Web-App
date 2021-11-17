import React from "react";
import styled from "styled-components";

function PatientAppointment({ dayData }) {
  return (
    <Wrapper>
      <h4 className="name-patient">{dayData.clientName}</h4>
      <h5 className="appointment-hour">{dayData.hour}</h5>
      <p className="appointment-day">{dayData.date}</p>
    </Wrapper>
  );
}

export default PatientAppointment;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.light};
  padding: 1rem;

  .name-patient {
    color: #b11b1b;
    font-weight: 400;
  }
  .appointment-hour {
    margin: 0;
  }
  .appointment-day {
    color: ${(props) => props.theme.textSecondary};
    font-weight: 400;
  }
`;
