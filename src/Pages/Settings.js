import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout/Layout";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../Contexts/AuthContext";

function Settings() {
  const history = useHistory();
  const { setIsLoggedIn } = useAuthContext();
  const logoutHandler = async () => {
    setIsLoggedIn(false);
    history.push("/login");
  };

  return (
    <Layout>
      <Wrapper>
        <h3>Settings</h3>
        <button onClick={logoutHandler}>Log out</button>
      </Wrapper>
    </Layout>
  );
}

export default Settings;

const Wrapper = styled.div`
  padding: 2rem;

  button {
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
  }
`;
