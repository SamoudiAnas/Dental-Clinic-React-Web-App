import { v4 } from "uuid";
import { hoursOfWork } from "./DateVariables";

export function replaceEmptyAppointments(data) {
  let tempData = [];

  //generate an array full of empty data
  for (let i = 0; i < 8; i++) {
    tempData.push(generateEmptyData(i));
  }

  //put the reserved data in its place
  tempData.forEach((tempElement, tempIndex) => {
    data.forEach((element) => {
      if (tempIndex === element.index) {
        tempData.splice(tempIndex, 1, element);
      }
    });
  });

  return tempData;
}

const generateEmptyData = (index) => {
  return {
    id: "empty " + v4(),
    clientName: "",
    Date: "",
    hour: hoursOfWork[index],
    index: index,
  };
};

export const sortDataByHour = (data) => {
  let tempData = [];

  let numberOfDataItems = data.length;

  if (numberOfDataItems === 0) {
    console.log("empty");
  } else {
    //take indexes of hours in tempData
    for (let i = 0; i < numberOfDataItems; i++) {
      tempData.push(hoursOfWork.indexOf([data[i].hour]));
    }
    console.log(tempData);
  }
};

export const generateColor = () => {
  const Colors = [
    "#F72C25",
    "#1C0B19",
    "#F9DC5C",
    "#17887b",
    "#0353A4",
    "#28702c",
  ];

  return Colors[Math.floor(Math.random() * 6)];
};
