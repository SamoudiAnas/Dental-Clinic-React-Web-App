import React, { useEffect } from "react";
import styled from "styled-components";
import { useCalendarViewContext } from "../../../Contexts/CalendarViewContext";

function CalendarViewMode() {
  const { calendarViewMode, setCalendarViewMode } = useCalendarViewContext();

  useEffect(() => {
    setCalendarViewMode("week");
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <fieldset id="group1" onChange={(e) => setCalendarViewMode(e.target.id)}>
        <input
          id="day"
          type="radio"
          name="radiogroup1"
          checked={calendarViewMode === "day" ? true : false}
          readOnly
        />
        <label htmlFor="day">Day</label>
        <input
          id="week"
          type="radio"
          name="radiogroup1"
          checked={calendarViewMode === "week" ? true : false}
          readOnly
        />
        <label htmlFor="week">Week</label>
        <input
          id="month"
          type="radio"
          name="radiogroup1"
          checked={calendarViewMode === "month" ? true : false}
          readOnly
        />
        <label htmlFor="month">Month</label>
      </fieldset>
    </Wrapper>
  );
}

export default CalendarViewMode;

export const Wrapper = styled.div`
  fieldset {
    border: transparent;
  }
  input[name="radiogroup1"] {
    /* hiding the radio button */
    display: none;
  }
  input[name="radiogroup1"] + label {
    /* styling of the passive state */
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  input[name="radiogroup1"]:checked + label {
    /* styling of the checked state  */
    border: 1px solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;
