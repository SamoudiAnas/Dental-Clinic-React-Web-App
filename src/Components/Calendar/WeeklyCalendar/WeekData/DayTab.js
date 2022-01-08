import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { generateColor } from "../../../../Utils/BuildAppointments";
import { dragAppointementHandler } from "../WeeklyCalendarBuild";
import WeekDayComponent from "../WeekDayComponent";

function DayTab({ dayData }) {
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    marginLeft: ".25rem",
    marginRight: ".25rem",
    margin: "0",
    height: "5rem",
    borderLeft: isDragging ? "" : `3px solid ${generateColor()}`,
    boxShadow: "0 5px 5px 5px rgba(0,0,0,0.1)",
    //change text color if dragging
    color: isDragging ? "#fff" : "black",

    // change background colour if dragging
    background: isDragging ? "#F72C25" : "white",

    //rotate if dragging
    transform: isDragging ? "rotate(5deg)" : "none",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getItemStyleForEmpty = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: "0",
    height: "5rem",
    borderBottom: "1px solid #ddd",
    borderRight: "1px solid #ddd",
    //change text color if dragging
    color: isDragging ? "#fff" : "black",

    // change background colour if dragging
    background: isDragging ? "#F72C25" : "#F8F8F8",

    //rotate if dragging
    transform: isDragging ? "rotate(5deg)" : "none",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    backgroundColor: "#ddd",
  });

  const grid = 8;

  return (
    <Wrapper>
      <DragDropContext
        onDragEnd={(res) => dragAppointementHandler(dayData, res)}
      >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {dayData.map((item, index) => (
                <Draggable key={item._id} draggableId={item._id} index={index}>
                  {(provided, snapshot) => (
                    <div
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
                        item.clientName
                      ) : (
                        <WeekDayComponent item={item} />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}

export default DayTab;

const Wrapper = styled.div``;
