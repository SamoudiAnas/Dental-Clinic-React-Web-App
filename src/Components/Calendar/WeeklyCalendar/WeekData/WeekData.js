import React, { useState, useEffect } from "react";
import DayTab from "./DayTab";
import { useDataContext } from "../../../../Contexts/PreviewDataContext";
import { replaceEmptyAppointments } from "../../../../Utils/BuildAppointments";

function WeekData({ date }) {
  const { getData } = useDataContext();
  const [dayData, setDayData] = useState([]);

  useEffect(() => {
    setDayData(
      replaceEmptyAppointments(
        getData(date.format("YYYY"), date.format("MMMM"), date.format("DD"))
      )
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <DayTab dayData={dayData} />
    </div>
  );
}

export default WeekData;
