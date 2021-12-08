import React, { useState } from "react";
import styled from "styled-components";
import ClickOutHandler from "react-clickout-handler";

//contexts
import { useDataContext } from "../../../Contexts/PreviewDataContext";
import { useOptionsContext } from "../../../Contexts/OptionsContext";
import { useLoginContext } from "../../../Contexts/LoginContext";
//utils
import { editAppointment } from "../../../Utils/DatabaseFunctions";

function EditModal() {
  const { getData } = useDataContext();
  const { selectedPatientToEdit, setIsEditOpen } = useOptionsContext();
  const { setError } = useLoginContext();

  //client name
  const [clientName, setClientName] = useState(
    selectedPatientToEdit.clientName
  );

  //appointment date
  const [date, setDate] = useState(selectedPatientToEdit.date);

  //appointment hour
  const [hour, setHour] = useState(selectedPatientToEdit.hour);

  //handlers
  const editHandler = (e) => {
    e.preventDefault();
    //we putting edit inside setError method to check...
    //...  if we encounter an error to display it.
    setError(
      editAppointment(
        selectedPatientToEdit.id,
        clientName,
        date,
        selectedPatientToEdit.date,
        hour,
        getData
      )
    );
  };

  return (
    <ClickOutHandler onClickOut={() => setIsEditOpen(false)}>
      <Wrapper>
        <div className="flex">
          <h3>Edit Modal</h3>
          <div className="close" onClick={() => setIsEditOpen(false)}>
            <h3>x</h3>
          </div>
        </div>
        <form onSubmit={editHandler}>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select onChange={(e) => setHour(e.target.value)}>
            <option value="08:00 - 09:00">08:00 - 09:00</option>
            <option value="09:00 - 10:00">09:00 - 10:00</option>
            <option value="10:00 - 11:00">10:00 - 11:00</option>
            <option value="11:00 - 12:00">11:00 - 12:00</option>
            <option value="12:00 - 13:00">12:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
            <option value="14:00 - 15:00">14:00 - 15:00</option>
            <option value="15:00 - 16:00">15:00 - 16:00</option>
          </select>

          <button type="submit">Edit</button>
        </form>
      </Wrapper>
    </ClickOutHandler>
  );
}

export default EditModal;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  h3 {
    margin: 0.5rem 0;
    color: 1px solid ${(props) => props.theme.secondary};
  }

  form * {
    width: 100%;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    border: 1px solid ${(props) => props.theme.secondary};
  }

  input:focus {
    outline-color: ${(props) => props.theme.primary};
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    padding: 0.75rem 1rem;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.secondary};
    }
  }

  .close {
    background-color: ${(props) => props.theme.primary};
    padding: 0rem 0.5rem;
    height: 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.secondary};
    }
    span {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      transform: rotate(+45deg);
    }
  }
`;
