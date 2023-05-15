import { React, useState } from "react";
import Select from "react-select";

const StatusMenu = ({ width, options, value, setvalue }) => {
  console.log(options);
  return (
    <div className="">
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: width,
            padding: "0.4rem",
          }),
        }}
        options={options}
        placeholder="Select Status"
        value={value}
        onChange={(e) => {
          setvalue(e);
        }}
      />
    </div>
  );
};

export default StatusMenu;
