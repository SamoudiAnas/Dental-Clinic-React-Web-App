import React from "react";
import styled from "styled-components";

//icons
import { ReactComponent as EditIcon } from "../../Images/edit.svg";
import { ReactComponent as DeleteIcon } from "../../Images/delete.svg";

//contexts
import { useOptionsContext } from "../../Contexts/OptionsContext";

function PatientAppointment({ dayData }) {
  const { setIsEditOpen, setIsDeleteOpen, setSelectedPatientToEdit } =
    useOptionsContext();

  //handlers
  const editHandler = () => {
    setSelectedPatientToEdit(dayData);
    setIsEditOpen(true);
  };

  const deleteHandler = () => {
    setSelectedPatientToEdit(dayData);
    setIsDeleteOpen(true);
  };

  return (
    <Wrapper>
      <h4 className="name-patient">{dayData.clientName}</h4>
      <h5 className="appointment-hour">{dayData.hour}</h5>
      <p className="appointment-day">{dayData.phone}</p>

      <EditIcon className="icon edit" onClick={editHandler} />
      <DeleteIcon className="icon delete" onClick={deleteHandler} />
    </Wrapper>
  );
}

export default PatientAppointment;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 1fr 1fr;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 1px solid ${(props) => props.theme.light};
  padding: 1rem;

  .name-patient {
    color: #b11b1b;
    font-weight: 400;
  }
  .appointment-hour {
    margin: 0;
  }
  .appointment-day {
    color: ${(props) => props.theme.textSecondary};
    font-style: italic;
    font-weight: 400;
  }

  .icon {
    width: 2rem;
    cursor: pointer;
  }

  .edit {
    fill: ${(props) => props.theme.secondary};
  }

  .delete {
    fill: ${(props) => props.theme.primary};
  }
`;
