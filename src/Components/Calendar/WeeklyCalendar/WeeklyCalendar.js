import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { useDateContext } from "../../../Contexts/DateContext";
import texture from "../../../Images/texture.svg";
import { hoursOfWork } from "../../../Utils/DateVariables";
import WeekData from "./WeekData/WeekData";

function WeeklyCalendar() {
  const { date } = useDateContext();

  var startOfWeek = date.clone().startOf("week");

  let tempArray = [];

  for (let i = 0; i < 7; i++) {
    tempArray.push(startOfWeek.clone().add(i, "day"));
  }

  return (
    <Wrapper>
      <div className="days_container">
        <div className="empty-tab"></div>
        <div className="day-names">
          {tempArray.map((day_name) => (
            <div key={v4()} className="day-name-abv">
              {day_name.format("dddd")}
              <br />
              <span className="day-date">{day_name.format("DD")}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="info">
        <div className="hours">
          {hoursOfWork.map((hour) => (
            <div key={v4()} className="hour">
              {hour}
            </div>
          ))}
        </div>

        <WeekData />
      </div>
    </Wrapper>
  );
}

export default WeeklyCalendar;

export const Wrapper = styled.div`
  .empty-tab {
    min-width: 10rem !important;
    max-width: 10rem !important;
    height: 5rem;
    background-image: url(${texture});
    background-repeat: no-repeat;
    background-size: 100%;
    object-fit: contain;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .days_container {
    display: flex;
  }
  .day-names {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .info {
    display: flex;
  }

  .hours {
    width: 11rem;
  }
  .day-name-abv,
  .hour {
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 0.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
  }

  .hour {
    height: 5rem;
    min-width: 10rem !important;
    max-width: 10rem !important;
  }

  .tab {
    overflow: hidden;
  }

  .cell {
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: center;
    padding: 0.75rem;
    text-align: center;
    text-transform: capitalize;
    color: ${(props) => props.theme.secondary};
    height: 5rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .day-name-abv {
    font-weight: 400;
  }

  .day-date {
    color: ${(props) => props.theme.secondary};
    font-weight: 600;
  }
`;
