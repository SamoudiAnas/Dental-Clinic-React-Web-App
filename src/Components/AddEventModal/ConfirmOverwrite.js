import React from "react";
import styled from "styled-components";
import { useAddEventContext } from "../../Contexts/AddEventContext";
import { useDataContext } from "../../Contexts/PreviewDataContext";

function ConfirmOverwrite({
  setIsConfirmOpen,
  year,
  month,
  day,
  newItem,
  duplicateId,
}) {
  //contexts
  const { setIsAddEventOpen } = useAddEventContext();
  const { addData } = useDataContext();

  //closing the add event modal and the confirmation modal
  const closeModals = () => {
    setIsConfirmOpen(false);
    setIsAddEventOpen(false);
  };

  //if the user chooses to press the "Yes" button
  const confirmHandler = () => {
    addData(year, month, day, null, duplicateId);
    //add new item
    addData(year, month, day, newItem, newItem.id);
    closeModals();
  };

  return (
    <Wrapper>
      <div className="container">
        <h4 className="disclaimer">
          This specific date and hour is already <span>reserved!</span>
        </h4>
        <h3 className="question">Overwrite?</h3>
        <div className="button-container">
          <button className="yes" onClick={confirmHandler}>
            Yes
          </button>
          <button className="no" onClick={closeModals}>
            No
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default ConfirmOverwrite;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  .container {
    width: 28rem;
    background-color: white;
    padding: 2rem 2rem 4rem;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .disclaimer {
    text-align: center;
    font-size: 0.9rem;
    span {
      color: ${(props) => props.theme.primary};
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: ${(props) => props.theme.secondary};
    }
  }

  .question {
    text-align: center;
    font-size: 1.4rem;
  }
  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  button {
    border: transparent;
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
  }
  .yes {
    &:hover {
      background-color: ${(props) => props.theme.primaryHover};
    }
  }

  .no {
    background-color: ${(props) => props.theme.secondary};
    &:hover {
      background-color: ${(props) => props.theme.secondaryHover};
    }
  }
`;
