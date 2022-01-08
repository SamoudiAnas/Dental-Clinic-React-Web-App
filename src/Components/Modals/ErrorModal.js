import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../../Contexts/AuthContext";
import errorImg from "../../Images/error.svg";

function ErrorModal() {
  const { error } = useAuthContext();
  return (
    <Wrapper error={error ? "3rem" : "-50rem"}>
      <img src={errorImg} alt="" />
      <h4>{error?.message}</h4>
    </Wrapper>
  );
}

export default ErrorModal;

const Wrapper = styled.div`
  position: absolute;
  top: 5rem;
  right: ${(props) => props.error};
  padding: 1rem 3rem 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: all 0.5s ease-in;

  img {
    width: 1.5rem;
  }
`;
