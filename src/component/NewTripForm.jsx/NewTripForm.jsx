import { React, useState } from "react";
import tempIcon from "../../assets/image/trip-list/AddNewTrip-icon.svg";
import MultipleTripForm from "../MultipleTripForm/MultipleTripForm";
import TagsInput from "../TagsInput/TagsInput";

const NewTripForm = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
 

  return (
    <div className="flex-col flex md:flex-row">
      <div className="md:w-1/3 bg-[#f5f7f7] rounded-lg m-4 p-4 h-[50%]">
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
        <div className="p-2 flex flex-col space-y-2">
          <h2 className="text-start text-2xl font-semibold">Add New Trip</h2>
          <label className=" text-gray-400">Trip Package Title</label>
          <input className="border-2 rounded-md" type="text" />
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <h2 className="text-start font-bold">
            Trip Duration & Day Activities
          </h2>
          <label className=" text-gray-400">Duration</label>
          <input className="border-2 rounded-md" type="date" />
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <h2 className="text-start text-2xl font-semibold">
            {/* Trip Duration & Day Activities */}
          </h2>

          <div className="flex-col flex md:flex-row ">
            <div className="flex flex-col ">
              <label className=" text-gray-400">Trip category</label>
              <input className="border-2 rounded-md" type="text" />
            </div>
            <div className="flex flex-col md:px-3">
              <label className=" text-gray-400">No. of places</label>
              <input className="border-2 rounded-md" type="number" />
            </div>
            <div className="flex flex-col md:px-3">
              <label className=" text-gray-400">Maximum guests</label>
              <input className="border-2 rounded-md" type="number" />
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <MultipleTripForm />
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <TagsInput heading="Amenities"  />
        </div>
      </div>
    </div>
  );
};

export default NewTripForm;
