import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../../Contexts/SidebarContext";
import { ReactComponent as ReactLogo } from "../../Images/logo.svg";
import { NavElements } from "../../Utils/NavElements";
import NavElement from "./NavElement";
function Sidebar() {
  const { isSideBarOpen, setIsSideBarOpen, handleSidebar } =
    useSidebarContext();

  return (
    <Wrapper isopen={isSideBarOpen}>
      <div className="logo-container">
        <ReactLogo className="logo" />
        <h3>The Dental</h3>
      </div>
      <div>
        {NavElements.map((navElement) => (
          <NavElement key={navElement.name} data={navElement} />
        ))}
      </div>

      <div className="bottom" onClick={handleSidebar}>
        <span>{isSideBarOpen ? "<" : ">"}</span>
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: ${(props) => (props.isopen ? "250px" : "4rem")};
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  overflow: hidden;
  transition: width 0.5s ease;
  position: relative;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 3rem;
    cursor: pointer;

    h3 {
      color: white;
      display: ${(props) => (props.isopen ? "block" : "none")};
    }
  }

  .logo {
    fill: ${(props) => props.theme.primary};
    width: 3rem;
    margin-right: 0.25rem;
  }

  .bottom {
    color: white;
    background-color: ${(props) => props.theme.primary};
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  span {
    text-align: center;
    padding: 0.5rem;
  }
`;

export default Sidebar;
