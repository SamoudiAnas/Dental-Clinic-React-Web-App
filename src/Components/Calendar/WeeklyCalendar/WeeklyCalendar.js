import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { useDateContext } from "../../../Contexts/DateContext";
import texture from "../../../Images/texture.svg";
//import { previewData } from "../../../Utils/PreviewData";
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
      <div className="day-names">
        <div className="empty-tab"></div>
        {tempArray.map((day_name) => (
          <div key={v4()} className="day-name-abv">
            {day_name.format("dddd")}
            <br />
            <span className="day-date">{day_name.format("DD")}</span>
          </div>
        ))}
      </div>
      <div className="info">
        <div>
          {hoursOfWork.map((hour) => (
            <div key={v4()} className="hour">
              {hour}
            </div>
          ))}
        </div>

        {tempArray.map((day) => (
          <WeekData key={v4()} date={day} />
        ))}
      </div>
    </Wrapper>
  );
}

export default WeeklyCalendar;

export const Wrapper = styled.div`
  .empty-tab {
    background-image: url(${texture});
    background-repeat: no-repeat;
    background-size: 100%;
    object-fit: contain;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .day-names,
  .info {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
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
