import { React, useState } from "react";
import Select from "react-select";

const StatusMenu = (width) => {
  const Status = [
    { value: "Active", label: "Active" },
    { value: "In-Active", label: "In-Active" },
  ];

  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const [selectedOptions, setSelectedOptions] = useState();
  return (
    <div className="w-[50%] ">
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: width,
            padding: "0.4rem",
          }),
        }}
        options={Status}
        placeholder="Select Status"
        value={selectedOptions}
        onChange={handleSelect}
      />
    </div>
  );
};

export default StatusMenu;
