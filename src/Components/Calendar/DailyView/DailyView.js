import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDateContext } from "../../../Contexts/DateContext";
import { useDataContext } from "../../../Contexts/PreviewDataContext";
import { sortDataByHour } from "../../../Utils/BuildAppointments";
import NothingFound from "../../Not Found/NothingFound";
import PatientAppointment from "../../PatientComponents/PatientAppointment";

function DailyView() {
  const [data, setData] = useState([]);
  const { date } = useDateContext();
  const { getData } = useDataContext();

  useEffect(() => {
    setData(getData("2021", "December", "09"));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setData(
      getData(date.format("YYYY"), date.format("MMMM"), date.format("DD"))
    );
    sortDataByHour(data);
    // eslint-disable-next-line
  }, [date]);

  return (
    <Wrapper>
      {data.length !== 0 ? (
        <div>
          <div className="clients_container">
            <h4>Client Name</h4>
            <h5> Appointment Hour</h5>
            <h4>Day</h4>
          </div>
          {data.map((item) => (
            <PatientAppointment key={item.id} dayData={item} />
          ))}
        </div>
      ) : (
        <NothingFound />
      )}
    </Wrapper>
  );
}

export default DailyView;

const Wrapper = styled.div`
  padding-top: 2rem;
  .clients_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 1rem;
    background-color: #eee;
  }
`;
