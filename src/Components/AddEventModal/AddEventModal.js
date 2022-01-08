import React, { useState } from "react";
import styled from "styled-components";
import ClickOutHandler from "react-clickout-handler";

//contexts
import { useAddEventContext } from "../../Contexts/AddEventContext";
import { useAppointmentsContext } from "../../Contexts/AppointmentsContext";
import { useAuthContext } from "../../Contexts/AuthContext";

//helpers
import { newAppointment } from "../../helpers/DataHelpers";

function AddEventModal() {
  //contexts
  const { setIsAddEventOpen } = useAddEventContext();
  const { loadData } = useAppointmentsContext();
  const { token } = useAuthContext();

  //input data
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [hour, setHour] = useState("08:00 - 09:00");

  //submit handler
  const addNewAppointment = (e) => {
    //prevent page reload
    e.preventDefault();

    newAppointment(clientName, phone, date, hour, token);

    setTimeout(() => {
      loadData();
    }, 200);

    setIsAddEventOpen(false);
  };

  return (
    <Wrapper>
      <ClickOutHandler onClickOut={() => setIsAddEventOpen(false)}>
        <div className="container">
          <div className="flex">
            <h3 className="title">Add New Appointment</h3>
            <div className="close" onClick={() => setIsAddEventOpen(false)}>
              <h3>x</h3>
            </div>
          </div>
          <form>
            <input
              type="text"
              placeholder="Name of client"
              onChange={(e) => setClientName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <br />
            <select onChange={(e) => setHour(e.target.value)} required>
              <option value="08:00 - 09:00">08:00 - 09:00</option>
              <option value="09:00 - 10:00">09:00 - 10:00</option>
              <option value="10:00 - 11:00">10:00 - 11:00</option>
              <option value="11:00 - 12:00">11:00 - 12:00</option>
              <option value="12:00 - 13:00">12:00 - 13:00</option>
              <option value="13:00 - 14:00">13:00 - 14:00</option>
              <option value="14:00 - 15:00">14:00 - 15:00</option>
              <option value="15:00 - 16:00">15:00 - 16:00</option>
            </select>
            <button onClick={(e) => addNewAppointment(e)}>Add new</button>
          </form>
        </div>
      </ClickOutHandler>
    </Wrapper>
  );
}

export default AddEventModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  .container {
    width: 40rem;
    background-color: white;
    padding: 2rem 2rem 4rem;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  form * {
    width: 100%;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    border: 1px solid ${(props) => props.theme.secondary};
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input:focus {
    outline-color: ${(props) => props.theme.primary};
  }

  .title {
    text-align: center;
  }

  .container > * {
    width: 100%;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
  }

  button {
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    padding: 0.5rem 1rem;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.secondary};
    }
  }

  .close {
    background-color: ${(props) => props.theme.primary};
    padding: 0.5rem 1rem;
    color: white;

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
