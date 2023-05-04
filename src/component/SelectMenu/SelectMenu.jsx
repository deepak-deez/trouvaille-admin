import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./style.scss";

const SelectMenu = ({ options,width }) => {
  const animatedComponents = makeAnimated();

  return (
    <div className="">
      <div className="">
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: width,
              padding: "0.2rem",
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: "#F3E3E2",
              color: "#CD4B43",
            }),
          }}
          options={options}
          components={animatedComponents}
          isMulti
        />
      </div>
    </div>
  );
};

export default SelectMenu;
