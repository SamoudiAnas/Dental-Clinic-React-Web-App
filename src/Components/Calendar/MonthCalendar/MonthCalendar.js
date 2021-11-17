import React, { useState, useEffect } from "react";

import styled from "styled-components";
import dayStyles from "./dayStyles";
import texture from "../../../Images/texture.svg";
import { useDateContext } from "../../../Contexts/DateContext";
import { day_names } from "../../../Utils/DateVariables";
import buildCalendar from "./build";

function MonthCalendar({ setSelectedDate }) {
  const [calendar, setCalendar] = useState([]);

  const { date } = useDateContext();

  useEffect(() => {
    setCalendar(buildCalendar(date));
  }, [date]);

  return (
    <Wrapper>
      <div className="day-names">
        {day_names.map((day_name) => (
          <div key={day_name} className="day-name-abv">
            {day_name}
          </div>
        ))}
      </div>
      {calendar.map((week) => (
        <div key={week} className="week">
          {week.map((day) => (
            <div
              key={day}
              className={`day ${dayStyles(day, date)}`}
              onDoubleClick={() => setSelectedDate(day)}
            >
              {day.format("D")}
            </div>
          ))}
        </div>
      ))}
    </Wrapper>
  );
}

export default MonthCalendar;

export const Wrapper = styled.div`
  .week,
  .day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-name-abv {
    border-bottom: 1px solid #ddd;
    text-align: center;
    padding: 0.75rem;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
  }

  .day {
    text-align: right;
    height: 7rem;
    box-sizing: border-box;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .before {
    opacity: 0.4;
    background-image: url(${texture});
    background-repeat: no-repeat;
    background-size: 100%;
    object-fit: contain;
  }

  .today {
    color: white;
    background-color: ${(props) => props.theme.secondary};
  }

  .selected {
    color: white;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.primary};
    position: relative;
  }
`;
