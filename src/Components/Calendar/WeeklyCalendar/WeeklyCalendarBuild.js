export default function weeklyCalendarBuild(value) {
  const startDay = value.clone().startOf("week");
  const endDay = value.clone().endOf("week");

  return startDay;
}
