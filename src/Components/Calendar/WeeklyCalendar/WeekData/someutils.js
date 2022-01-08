import { generateColor } from "../../../../Utils/BuildAppointments";
export const getItemStyle = (isDragging, draggableStyle) => ({
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

export const getItemStyleForEmpty = (isDragging, draggableStyle) => ({
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

export const getListStyle = (isDraggingOver) => ({
  backgroundColor: "#ddd",
});

export const grid = 8;
