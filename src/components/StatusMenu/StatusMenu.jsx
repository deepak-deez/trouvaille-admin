import { React, useState } from "react";
import Select from "react-select";

const StatusMenu = ({ width, options, value, onChange }) => {
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
        onChange={onChange}
      />
    </div>
  );
};

export default StatusMenu;
