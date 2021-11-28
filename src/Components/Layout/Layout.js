import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="page-wrapper">{children}</div>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;

  .page-wrapper {
    width: 100%;
  }
`;
