export default function buildCalendar(date) {
  const startDay = date.clone().startOf("month").startOf("week");
  const endDay = date.clone().endOf("month").endOf("week");

  const day = startDay.subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return calendar;
}
