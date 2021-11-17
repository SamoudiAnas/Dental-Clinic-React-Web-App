import React from "react";
import styled from "styled-components";
import texture from "../../../../Images/texture.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DayTab({ dayData }) {
  const getItemStyle = (isDragging, draggableStyle) => ({
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
    background: isDragging ? "#F72C25" : "white",

    //rotate if dragging
    transform: isDragging ? "rotate(5deg)" : "none",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: `url(${texture})`,
  });

  const grid = 8;

  return (
    <Wrapper>
      <DragDropContext onDragEnd={(res) => console.log(res)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {dayData.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.clientName}
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
