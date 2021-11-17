import React from "react";
import moment from "moment";
import styled from "styled-components";
import CalendarViewMode from "./CalendarViewMode";
import MonthController from "./Controllers/MonthController";

//contexts
import { useCalendarViewContext } from "../../../Contexts/CalendarViewContext";
import { useDateContext } from "../../../Contexts/DateContext";
import WeekController from "./Controllers/WeekController";
import DayController from "./Controllers/DayController";

function CalendarHeader() {
  const { date, setDate } = useDateContext();
  const { calendarViewMode } = useCalendarViewContext();

  const today = moment();

  /**
   * this function checks if the displayed month in
   * the calendar controller is the same to the current
   * month
   * @returns {string} => "disabled-btn" to add some additional styling
   * @returns {string} => "" to keep it as it is
   */
  const isExactDate = () => {
    if (today.format("DD/MM/YYYY") === date.format("DD/MM/YYYY")) {
      return "disabled-btn";
    } else {
      return "";
    }
  };

  const setDateToToday = () => {
    setDate(moment());
  };

  return (
    <Wrapper>
      <button className={`today-btn ${isExactDate()}`} onClick={setDateToToday}>
        Today
      </button>

      {calendarViewMode === "month" ? (
        <MonthController />
      ) : calendarViewMode === "week" ? (
        <WeekController />
      ) : (
        <DayController />
      )}

      <CalendarViewMode />
    </Wrapper>
  );
}

export default CalendarHeader;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  .today-btn {
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.primary};
    font-weight: 500;
    border: transparent;
    color: white;
    background-color: ${(props) => props.theme.primary};
    &:hover {
      cursor: pointer;
    }
  }
  .disabled-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    font-weight: 500;
    color: #999999;
    background-color: #ddd;
    pointer-events: none;
  }

  .view-controller {
    background-color: transparent;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    &:hover {
      background-color: #ddd;
      cursor: pointer;
    }
  }

  .view-controller .selected-view {
    background-color: ${(props) => props.theme.secondary};
  }

  .year {
    color: ${(props) => props.theme.textSecondary};
  }
`;
