import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../../Contexts/SidebarContext";
import { Link } from "react-router-dom";

function NavElement({ data }) {
  const { isSideBarOpen } = useSidebarContext();
  return (
    <Wrapper isopen={isSideBarOpen} to={data.path}>
      {data.icon}
      <h4 className="nav-name">{data.name}</h4>
    </Wrapper>
  );
}
export const Wrapper = styled(Link)`
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isopen ? "initial" : "center")};
  padding-left: ${(props) => (props.isopen ? "1.5rem" : "0")};
  cursor: pointer;
  &:hover {
    .nav-icon {
      fill: white;
      color: white;
      margin-left: ${(props) => (props.isopen ? "0.375rem" : "0")};
    }
    background: ${(props) => props.theme.primary};
  }
  .nav-icon {
    width: 1.75rem;
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
    margin-right: ${(props) => (props.isopen ? "0.75rem" : "0")};
    transition: margin 0.2s ease;
  }
  .nav-name {
    white-space: nowrap;
    color: white;
    display: ${(props) => (props.isopen ? "block" : "none")};
    font-weight: 500;
  }
`;
export default NavElement;
