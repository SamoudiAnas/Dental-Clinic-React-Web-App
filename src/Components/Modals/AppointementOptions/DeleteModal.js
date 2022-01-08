import React from "react";
import styled from "styled-components";

import { ReactComponent as DangerIcon } from "../../../Images/danger.svg";
import { deleteAppointment } from "../../../helpers/DataHelpers";

//contexts
import { useOptionsContext } from "../../../Contexts/OptionsContext";
import { useAppointmentsContext } from "../../../Contexts/AppointmentsContext";

function DeleteModal() {
  const { selectedPatientToEdit, setIsDeleteOpen } = useOptionsContext();
  const { loadData } = useAppointmentsContext();

  const deleteHandler = () => {
    setIsDeleteOpen(false);
    deleteAppointment(selectedPatientToEdit._id);
    setTimeout(() => {
      loadData();
    }, 300);
  };

  return (
    <Wrapper>
      <DangerIcon className="danger" />
      <h3>Are you sure you want to delete</h3>
      <h3> this appointment? </h3>
      <br />
      <div className="appointment-details">
        <p className="client-name">{selectedPatientToEdit?.date}</p>
        <h4 className="client-name">{selectedPatientToEdit?.clientName}</h4>
        <p className="client-name">{selectedPatientToEdit?.hour}</p>
      </div>
      <br />
      <button className="delete" onClick={deleteHandler}>
        Delete
      </button>
      <button className="cancel" onClick={() => setIsDeleteOpen(false)}>
        Cancel
      </button>
    </Wrapper>
  );
}

export default DeleteModal;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: white;
  padding: 3rem 6rem;
  color: ${(props) => props.theme.secondary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  .danger {
    width: 5rem;
  }
  .appointment-details {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .client-name {
    color: black;
  }

  .delete {
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    padding: 0.75rem 1.5rem;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.secondary};
    }
  }
  .cancel {
    border: transparent;
    background-color: ${(props) => props.theme.secondary};
    padding: 0.75rem 1.5rem;
    margin-left: 1rem;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: black;
    }
  }
`;
