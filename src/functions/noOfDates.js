const getNumberOfDays = (start, end) => {
  console.log(start, "start");
  console.log(end, "end");
  const date1 = new Date(start);
  console.log(date1);
  const date2 = new Date(end);
  console.log(date2);
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};

export default getNumberOfDays;
// console.log(getNumberOfDays("2/1/2021", "3/1/2021"));
