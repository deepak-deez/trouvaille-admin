import React, { useEffect, useState } from "react";
import getNumberOfDays from "../../functions/noOfDates";
import dateRange from "../../functions/dateRange";
import convertDate from "../../functions/monthFormat";

const MultipleDateInputs = ({ duration, setArrayDate, arrayDate }) => {
  console.log(duration);
  const date = duration.split(" ");
  const startDate = date[0];
  const endDate = date[2];
  const [counter, setCounter] = useState(0);

  const newStartdate = convertDate(startDate);
  const newEnddate = convertDate(endDate);

  // let diff = getNumberOfDays(newStartdate, newEnddate);
  useEffect(() => {
    setArrayDate([...dateRange(newStartdate, newEnddate)]);
    setCounter(1);
  }, [newStartdate, newEnddate]);

  const handleChange = (input, e) => {
    input.details = e.target.value;
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {Array.isArray(arrayDate) &&
        counter === 1 &&
        arrayDate?.map((input, key) => (
          <div className=" flex flex-col " key={key}>
            <label> {input?.date}</label>
            <input
              placeholder="Details"
              className=" border p-3 "
              type="text"
              onChange={(e) => {
                handleChange(input, e);
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default MultipleDateInputs;
