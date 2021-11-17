/**
 *
 * @param {moment} day is a parameter that holds
 * the day value.
 *
 * @param {moment} value is a parameter that holds
 * the current day date
 *
 *
 * day is used alongside with  value to test different
 * cases like in these functions:
 *
 * isSelected ====> the see if the selected date(day)
 * aligns with the value of (value)
 *
 *
 *
 */

const isSelected = (day, value) => {
  return value.isSame(day, "day");
};

const isPrevMonth = (day, value) => {
  return day.isBefore(value, "day");
};
const isNextMonth = (day, value) => {
  return day.isAfter(value, "day");
};

const isToday = (day) => {
  return day.isSame(new Date(), "day");
};

export default function dayStyles(day, value) {
  const startOfMonth = value.clone().startOf("month");
  const endOfMonth = value.clone().endOf("month");
  if (isPrevMonth(day, startOfMonth)) return "before";
  if (isNextMonth(day, endOfMonth)) return "before";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";
  return "";
}
