import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//styling
import styled from "styled-components";
import { getItemStyle, getItemStyleForEmpty, getListStyle } from "./someutils";

//components
import WeekDayComponent from "../WeekDayComponent";
import { dragAppointementHandler } from "../WeeklyCalendarBuild";
import Loading from "../../../Loading/Loading";

//helpers
import { replaceEmptyAppointments } from "../../../../Utils/BuildAppointments";

//contexts
import { useAppointmentsContext } from "../../../../Contexts/AppointmentsContext";
import { useDateContext } from "../../../../Contexts/DateContext";

function WeekData() {
  //for the date
  const { date } = useDateContext();
  //appointments context where we get the data
  const { appointments, getAppointmentsByDate, loadData } =
    useAppointmentsContext();

  //states
  const [weekData, setWeekData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  //get the start of the week
  var startOfWeek = date.clone().startOf("week");

  //array that will hold the info temporarily
  let weekDates = [];

  //get the week days dates
  for (let i = 0; i < 7; i++) {
    weekDates.push(startOfWeek.clone().add(i, "day"));
  }

  /**
   *
   * @returns {Array} of the data for the whole week
   */
  const loadWeekData = () => {
    //temporary array that will holds data for the whole week
    let tempArray = [];

    //get the data of each day one by one then push it in one array
    for (let i = 0; i < 7; i++) {
      //get the data of the day
      let dayData = replaceEmptyAppointments(
        getAppointmentsByDate(weekDates[i]),
        weekDates[i].format("YYYY-MM-DD")
      );
      //push it into the array
      tempArray.push(dayData);
    }

    return tempArray;
  };

  const onDragHandler = (res) => {
    dragAppointementHandler(res, weekData);
    setTimeout(() => {
      loadData();
    }, 200);
  };

  /**
   *
   * runs at the first run of the app
   * to load data into the screen
   */
  useEffect(() => {
    setWeekData(loadWeekData);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setWeekData(loadWeekData);
    //eslint-disable-next-line
  }, [appointments, date]);

  useEffect(() => {
    setisLoading(false);
  }, [weekData]);

  return (
    <Container>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <DragDropContext onDragEnd={(res) => onDragHandler(res)}>
          <Wrapper>
            {weekData.map((dayData, index) => (
              <Droppable droppableId={weekData[index][index]._id} key={index}>
                {(provided, snapshot) => (
                  <div
                    key={index}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {dayData.map((item, index) => (
                      <Draggable
                        key={item._id}
                        draggableId={item._id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            key={index}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={
                              item._id.substring(0, 5) === "empty"
                                ? getItemStyleForEmpty(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )
                                : getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )
                            }
                          >
                            {item?._id.substring(0, 5) === "empty" ? (
                              <EmptyData key={item._id} />
                            ) : (
                              <WeekDayComponent item={item} key={item._id} />
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </Wrapper>
        </DragDropContext>
      )}
    </Container>
  );
}

export default WeekData;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Container = styled.div`
  width: 100%;
`;

const EmptyData = styled.div`
  pointer-events: none;
`;
