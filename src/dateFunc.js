export default function todayDate(todayDate) {
  // console.log(todayDate, "function");
  let today = todayDate;
  if (today === 1) {
    return "Mon";
  } else if (today === 2) {
    return "Tue";
  } else if (today === 3) {
    return "Wed";
  } else if (today === 4) {
    return "Thu";
  } else if (today === 5) {
    return "Fri";
  } else if (today === 6) {
    return "Sat";
  } else {
    return "Sun";
  }
}
