import { v4 } from "uuid";
import { hoursOfWork } from "./DateVariables";

export function replaceEmptyAppointments(data, date) {
  if (date === undefined) {
    return;
  }

  let tempData = [];
  //generate an array full of empty data
  for (let i = 0; i < 8; i++) {
    tempData.push(generateEmptyData(i, date));
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

const generateEmptyData = (index, day) => {
  return {
    _id: "empty " + v4(),
    clientName: "",
    date: day,
    hour: hoursOfWork[index],
    phone: "",
    index: index,
  };
};

/**
 *
 * @returns {String} a random color HEX
 */
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

/**
 *
 * @param {Array} data of the day
 * @returns arranged data by hours
 */
export const arrangeAppointments = (data) => {
  if (data === undefined || data.length === 0) {
    return [];
  }
  let arrangedArray = [];
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].index === j) {
        arrangedArray.push(data[i]);
      }
    }
  }

  return arrangedArray;
};
