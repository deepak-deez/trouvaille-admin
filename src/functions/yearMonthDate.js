const convertYearDate = (date) => {
  const dateMonthFromat = date?.split("/");
  console.log(dateMonthFromat);
  const newDate = ` ${dateMonthFromat[2]}-${dateMonthFromat[1]}-${dateMonthFromat[0]} `;
  console.log(newDate);
  return newDate;
};

export default convertYearDate;
