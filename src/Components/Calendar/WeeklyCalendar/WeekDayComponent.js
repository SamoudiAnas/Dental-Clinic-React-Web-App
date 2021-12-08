import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Options } from "../../../Images/options.svg";
import ClickOutHandler from "react-clickout-handler";
import { useOptionsContext } from "../../../Contexts/OptionsContext";

function WeekDayComponent({ item }) {
  //options modal
  const [isOpen, setIsOpen] = useState(false);
  const { setIsEditOpen, setIsDeleteOpen, setSelectedPatientToEdit } =
    useOptionsContext();

  //handlers
  const edit = () => {
    setSelectedPatientToEdit(item);
    setIsEditOpen(true);
  };

  return (
    <Wrapper>
      {item.clientName}

      <Options className="options" onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <ClickOutHandler onClickOut={() => setIsOpen(false)}>
          <div className="options_container">
            <p className="option" onClick={edit}>
              Edit
            </p>
            <p className="option" onClick={() => setIsDeleteOpen(true)}>
              Delete
            </p>
          </div>
        </ClickOutHandler>
      )}
    </Wrapper>
  );
}

export default WeekDayComponent;

const Wrapper = styled.div`
  position: relative;

  .options {
    position: absolute;
    top: -0.125rem;
    right: -0.75rem;
    width: 1.2rem;
    &:hover {
      fill: ${(props) => props.theme.primary};
    }
  }

  .options_container {
    position: absolute;
    top: 1rem;
    right: -8rem;
    z-index: 999;
    padding: 1rem 0rem;
    background: rgba(48, 41, 47, 0.8);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .option {
    color: white;
    font-size: 0.9rem;
    padding: 0.375rem 1.5rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease-in;
    &:hover {
      background: rgb(247, 44, 37, 0.8);
    }
  }

  .option:nth-child(3) {
    margin-bottom: 0;
  }
`;
