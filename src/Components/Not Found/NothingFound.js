import React from "react";
import styled from "styled-components";
import empty from "../../Images/empty.svg";
function NothingFound() {
  return (
    <Wrapper>
      <div>
        <img src={empty} alt="" />
        <h3 className="title">
          There is <span>nothing</span> to show here!
        </h3>
      </div>
    </Wrapper>
  );
}

export default NothingFound;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin: 5rem auto 1rem;
    width: 30rem;
  }
  .title {
    text-align: center;
    span {
      color: ${(props) => props.theme.primary};
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
  }
`;
