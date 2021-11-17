import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDateContext } from "../../../../Contexts/DateContext";
import GET_WEEK_OF_DATE from "../../Methods/getWeekOfDate";

function WeekController() {
  const { date, setDate } = useDateContext();
  const [weekRange, setWeekRange] = useState("");
  const prevWeek = () => {
    return date.clone().subtract(6, "days");
  };

  const nextWeek = () => {
    return date.clone().add(6, "days");
  };

  useEffect(() => {
    setWeekRange(GET_WEEK_OF_DATE(date));
  }, [date]);

  return (
    <Wrapper>
      <div className="controller" onClick={() => setDate(prevWeek)}>
        &lt;
      </div>
      <div className="current-week">{weekRange}</div>
      <div className="controller" onClick={() => setDate(nextWeek)}>
        &gt;
      </div>
    </Wrapper>
  );
}

export default WeekController;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .controller {
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: ${(props) => props.theme.primary};
    }
  }

  .current-week {
    text-align: center;
    font-weight: 600;
  }
`;
