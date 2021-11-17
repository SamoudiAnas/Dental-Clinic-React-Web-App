export default function GET_WEEK_OF_DATE(date) {
  // 26 Sep
  var startOfMonth = date.clone().startOf("month").startOf("week");
  // 6 Nov
  var endOfMonth = date.clone().endOf("month").endOf("week");

  //date in range
  var dateText = "";

  //week variables
  var startOfWeek = startOfMonth.clone();
  var endOfWeek = startOfWeek.clone().add(6, "days");

  //loop through weeks
  while (true) {
    //date place range
    //condition 1 : if the actual date is in between the week
    if (date.isAfter(startOfWeek) && date.isBefore(endOfWeek)) {
      dateText = startOfWeek.format("MMM DD, ") + endOfWeek.format("MMM DD");
    }

    //condition 2 : if the actual date is the same as the start of a week
    if (date.isSame(startOfWeek)) {
      dateText = startOfWeek.format("MMM DD, ") + endOfWeek.format("MMM DD");
    }

    //condition 3 : if the actual date is the same as the end of a week
    if (date.isSame(endOfWeek, "day")) {
      dateText = startOfWeek.format("MMM DD, ") + endOfWeek.format("MMM DD");
    }

    //condition to break from the loop
    if (endOfWeek.format("DD/MM/YYYY") === endOfMonth.format("DD/MM/YYYY")) {
      break;
    }

    //increment the week variables
    startOfWeek = endOfWeek.clone().add(1, "day");
    endOfWeek = startOfWeek.clone().add(6, "day");
  }

  return dateText;
}
