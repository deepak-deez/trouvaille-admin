import { React, useState } from "react";
import "./style.scss";
const TagsInput = ({ heading }) => {
  const [tags, setTags] = useState([]);
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
      <h2 className=" text-gray-400">{heading}</h2>
      <div className="tags-input overflow-scroll w-full">
        <div className=" p-2  gap-2 grid grid-cols-4 text-[#CD4B43]">
          {tags.map((tag, index) => {
            return (
              <div
                className=" bg-[#F3E3E2] flex rounded-lg  items-center p-2 justify-center "
                key={index}
              >
                <span>{tag}</span>
                <i
                  className="fas fa-regular fa-xmark ms-2"
                  onClick={() => removeTags(index)}
                ></i>
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
