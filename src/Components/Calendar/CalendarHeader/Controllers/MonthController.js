import React from "react";
import styled from "styled-components";
import { useDateContext } from "../../../../Contexts/DateContext";

function MonthController() {
  const { date, setDate } = useDateContext();

  /**
   * @returns the date after subtracting a month to it
   */
  const prevMonth = () => {
    return date.clone().subtract(1, "Month");
  };

  /**
   * @returns the date after adding a month to it
   */
  const nextMonth = () => {
    return date.clone().add(1, "Month");
  };

  return (
    <Wrapper>
      <div className="controller" onClick={() => setDate(prevMonth())}>
        &lt;
      </div>
      <div className="month-year">{date.format("MMMM YYYY")}</div>
      <div className="controller" onClick={() => setDate(nextMonth())}>
        &gt;
      </div>
    </Wrapper>
  );
}

export default MonthController;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .month-year {
    text-align: center;
    font-weight: 600;
  }

  .controller {
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: ${(props) => props.theme.primary};
    }
  }
`;
