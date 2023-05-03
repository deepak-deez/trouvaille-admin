import { React, useState } from "react";
import tempIcon from "../../assets/image/trip-list/AddNewTrip-icon.svg";

const NewTripForm = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="flex-col flex md:flex-row">
      <div className="md:w-1/3">
        <div className="flex justify-center">
          {file ? (
            <img src={file} alt="browserIcon" />
          ) : (
            <img src={tempIcon} alt="browserIcon" />
          )}
        </div>
        <div className=" flex justify-center">
          <div className="relative">
            <button className="border-2 border-red-500 px-2 rounded-md text-red-500">
              Browse
            </button>
            <input
              type="file"
              accept=".jpg,.png,.jpeg"
              className=" absolute left-[10%] opacity-0 cursor-pointer w-full"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <h1>form</h1>
      </div>
    </div>
  );
};

export default NewTripForm;
