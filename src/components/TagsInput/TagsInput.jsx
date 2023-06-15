import { React, useState } from "react";
import "./style.scss";
const TagsInput = ({ heading, tags, setTags }) => {
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <div className="w-full">
      <h2 className=" text-gray-400 py-2">{heading}</h2>
      <div className="tags-input overflow-scroll ">
        <div className=" gap-2  text-[#CD4B43]">
          {tags.map((tag, index) => {
            return (
              <div
                className=" bg-[#F3E3E2] flex rounded-lg  items-center p-2 justify-center "
                key={index}
              >
                <span>{tag}</span>
                <button onClick={() => removeTags(index)}>
                  <i className="fas fa-regular fa-xmark ms-2"></i>
                </button>
              </div>
            );
          })}
        </div>
        <input
          type="text"
          onKeyUp={(event) => addTags(event)}
          placeholder="Press enter to add tags"
        />
      </div>
    </div>
  );
};

export default TagsInput;
