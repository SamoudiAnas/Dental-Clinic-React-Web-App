import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <div className="container">
        {" "}
        <div className="spinner"></div>
        <h2> Loading...</h2>
      </div>
    </Wrapper>
  );
}

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(48, 41, 47, 0.99);
  z-index: 999;

  .container {
    background-color: white;
    padding: 2rem 3rem;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
  }
  .spinner {
    width: 6rem;
    height: 6rem;
    border: 1rem solid #ddd;
    margin: 0 auto 1rem;
    border-top-color: ${(props) => props.theme.primary};
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
