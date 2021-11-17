import React, { useEffect, useState } from "react";
import ClickOutHandler from "react-clickout-handler";
import styled from "styled-components";
import { v4 } from "uuid";
import { useAddEventContext } from "../../Contexts/AddEventContext";
import { hoursOfWork, month_names } from "../../Utils/DateVariables";
import { useDataContext } from "../../Contexts/PreviewDataContext";
import ConfirmOverwrite from "./ConfirmOverwrite";

function AddEventModal() {
  //contexts
  const { setIsAddEventOpen } = useAddEventContext();
  const { addData, getData } = useDataContext();

  //input data
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("08:00 - 09:00");

  //selected date data
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  //if a value is duplicate
  const [duplicateId, setDuplicateId] = useState(null);

  //confirm data overwrite modal
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  //new item
  const [newItem, setNewItem] = useState({});

  const dateHandler = (e) => {
    setDate(e.target.value);
    //set the date variables (year,month,day)
    setYear(e.target.value.substring(0, 4));
    setMonth(e.target.value.substring(5, 7));
    setDay(e.target.value.substring(8));
  };

  //submit handler
  const addEventToDatabase = (e) => {
    //prevent page reload
    e.preventDefault();

    setNewItem({
      id: v4(),
      clientName: clientName,
      date: date,
      hour: hour,
      index: hoursOfWork.indexOf(hour),
    });
  };

  const verifyThenAddNewItem = () => {
    //get the old data to check if the place selected is reserved
    let oldData = getData(year, month_names[parseInt(month) - 1], day);

    //if the selected day has no appointments
    if (oldData.length === 0) {
      addData(year, month, day, newItem, newItem.id);
      //if the selected day has appointments
    } else {
      let isDuplicate = false;
      //check is the selected day and time is already reserved
      oldData.forEach((item) => {
        //if so
        if (item.hour === hour) {
          //check if user wants to overwrite
          //1- Open confirmation modal
          setIsConfirmOpen(true);
          isDuplicate = true;
          //2- save old item id for later
          setDuplicateId(item.id);
        }
      });

      //if there is no duplicate
      if (isDuplicate === false) {
        addData(year, month, day, newItem, newItem.id);
      }
    }
  };

  useEffect(() => {
    verifyThenAddNewItem(); // eslint-disable-next-line
  }, [newItem]);

  return (
    <Wrapper>
      <ClickOutHandler onClickOut={() => setIsAddEventOpen(false)}>
        <div className="container">
          <h3 className="title">Add New Appointment</h3>
          <form onSubmit={(e) => addEventToDatabase(e)}>
            <input
              type="text"
              placeholder="Name of client"
              onChange={(e) => setClientName(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Date"
              onChange={(e) => dateHandler(e)}
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
            <button>Add new</button>
          </form>
        </div>
        {isConfirmOpen ? (
          <ConfirmOverwrite
            year={year}
            month={month}
            day={day}
            newItem={newItem}
            duplicateId={duplicateId}
            setIsConfirmOpen={setIsConfirmOpen}
          />
        ) : null}
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
    cursor: pointer;
  }
`;
