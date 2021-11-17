import React from "react";
import styled from "styled-components";

function WeekController() {
  return (
    <Wrapper>
      <p>&lt;</p>
      <p>week 1</p>
      <p>&gt;</p>
    </Wrapper>
  );
}

export default WeekController;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.textSecondary};
`;
