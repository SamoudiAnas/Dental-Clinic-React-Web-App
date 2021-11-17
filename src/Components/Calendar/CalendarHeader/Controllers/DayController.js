import React from "react";
import styled from "styled-components";
import { useDateContext } from "../../../../Contexts/DateContext";

function DayController() {
  const { date, setDate } = useDateContext();

  const prevDay = () => {
    return date.clone().subtract(1, "day");
  };

  const nextDay = () => {
    return date.clone().add(1, "day");
  };

  return (
    <Wrapper>
      <div className="controller" onClick={() => setDate(prevDay)}>
        &lt;
      </div>
      <div className="current-day">{date.format("dddd, MMM DD")}</div>
      <div className="controller" onClick={() => setDate(nextDay)}>
        &gt;
      </div>
    </Wrapper>
  );
}

export default DayController;

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

  .current-day {
    text-align: center;
    font-weight: 600;
  }
`;
