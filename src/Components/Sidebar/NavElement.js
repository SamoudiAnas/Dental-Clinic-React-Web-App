import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../../Contexts/SidebarContext";

function NavElement({ data }) {
  const { sidebarState } = useSidebarContext();
  return (
    <Wrapper isSidebarOpen={sidebarState.isSidebarOpen} href="/">
      {data.icon}
      <h4 className="nav-name">{data.name}</h4>
    </Wrapper>
  );
}
export const Wrapper = styled.a`
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isSidebarOpen ? "initial" : "center")};
  padding-left: ${(props) => (props.isSidebarOpen ? "1.5rem" : "0")};
  cursor: pointer;
  &:hover {
    .nav-icon {
      fill: white;
      color: white;
      margin-left: ${(props) => (props.isSidebarOpen ? "0.375rem" : "0")};
    }
    background: ${(props) => props.theme.primary};
  }
  .nav-icon {
    width: 1.75rem;
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
    margin-right: ${(props) => (props.isSidebarOpen ? "0.75rem" : "0")};
    transition: margin 0.2s ease;
  }
  .nav-name {
    white-space: nowrap;
    color: white;
    display: ${(props) => (props.isSidebarOpen ? "block" : "none")};
    font-weight: 500;
  }
`;
export default NavElement;
