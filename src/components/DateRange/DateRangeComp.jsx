import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import calendarIcon from "../../assets/images/trip-list/calendar-icon.png";

import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeComp = ({ setDuration, duration, range, setRange }) => {
  const dateMonthFromat = duration?.split("-");
  const apiStartDate = `${dateMonthFromat[0]}`;
  const apiEndDate = `${dateMonthFromat[1]}`;

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(!open);
    }
  };

  const dateHandle = (val) => {
    setRange(val);
  };

  // change value of duration only when range.enddate
  useEffect(() => {
    setDuration(
      format(range[0].startDate, "dd/MM/yyyy") +
        " - " +
        format(range[0].endDate, "dd/MM/yyyy")
    );
  }, [range[0].endDate]);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className=" relative ">
        <div className="calendarWrap flex  ">
          <input
            value={`${format(range[0].startDate, "dd LLLL")} - ${format(
              range[0].endDate,
              "dd LLLL"
            )}`}
            readOnly
            className="inputBox border-2 md:w-[60%]"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <img
            src={calendarIcon}
            className="w-[2rem] h-[2rem]"
            alt="calendar"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <div ref={refOne} className="absolute top-full z-50">
            {open && (
              <DateRange
                onChange={(item) => dateHandle([item.selection])}
                editableDateInputs={true}
                startDatePlaceholder="pick"
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                minDate={new Date()}
                direction="horizontal"
                className="calendarElement w-[80%] md:w-full "
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateRangeComp;
