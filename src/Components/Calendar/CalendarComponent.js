import React, { useState } from "react";

import CalendarHeader from "./CalendarHeader/CalendarHeader";

//month calendar view
import MonthCalendar from "./MonthCalendar/MonthCalendar";

//week calendar view
import WeeklyCalendar from "./WeeklyCalendar/WeeklyCalendar";

//day calendar view
import DailyView from "./DailyView/DailyView";

//contexts
import { useCalendarViewContext } from "../../Contexts/CalendarViewContext";

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState("");
  const { calendarViewMode } = useCalendarViewContext();

  return (
    <div>
      <CalendarHeader />

      {calendarViewMode === "month" ? (
        <MonthCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : calendarViewMode === "week" ? (
        <WeeklyCalendar />
      ) : (
        <DailyView />
      )}
    </div>
  );
}

export default CalendarComponent;
