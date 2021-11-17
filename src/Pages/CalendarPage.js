import React from "react";
import styled from "styled-components";
import AddEventModal from "../Components/AddEventModal/AddEventModal";
import CalendarComponent from "../Components/Calendar/CalendarComponent";
import Loading from "../Components/Loading/Loading";
import { useAddEventContext } from "../Contexts/AddEventContext";
import { useDataContext } from "../Contexts/PreviewDataContext";

function CalendarPage() {
  const { isAddEventOpen, setIsAddEventOpen } = useAddEventContext();
  const { database } = useDataContext();
  return (
    <Wrapper>
      <div className="flex">
        <h3>Calendar</h3>
        <button className="add-client" onClick={() => setIsAddEventOpen(true)}>
          Add Event
        </button>
      </div>
      <hr />
      <div className="calendar-wrapper">
        <CalendarComponent />
      </div>
      {database.length === 0 ? <Loading /> : null}
      {isAddEventOpen ? <AddEventModal /> : null}
    </Wrapper>
  );
}

export default CalendarPage;

export const Wrapper = styled.div`
  padding: 2rem;
  color: black;
  .calendar-wrapper {
    /* display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem; */
  }

  .week-days {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }
  .day-name {
    padding: 0.75rem;
    color: ${(props) => props.theme.secondary};
    background-color: #ddd;
    text-align: center;
    font-weight: 600;
  }

  .date {
    margin-bottom: 1rem;
  }
  .appointments {
    margin-bottom: 3rem;
  }

  hr {
    opacity: 0.2;
    margin: 1rem 0 2rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .add-client {
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
  }
`;

export const CalendarDiv = styled.div``;
