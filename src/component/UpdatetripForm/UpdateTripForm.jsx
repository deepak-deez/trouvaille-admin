import { React, useState } from "react";
import tempIcon from "../../assets/images/trip-list/AddNewTrip-icon.svg";
import MultipleTripForm from "../MultipleTripForm/MultipleTripForm";
import TagsInput from "../TagsInput/TagsInput";
import SelectMenu from "../SelectMenu/SelectMenu";
import Faq from "../Faq/Faq";
import StatusMenu from "../StatusMenu/StatusMenu";
import {
  Occassion,
  TripCategory,
  TravelType,
} from "../NewTripForm/tripFormSelect.jsx";

const UpdateTripForm = ({ editData, setEditData }) => {
  console.log(editData);
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
          <h2 className="text-start text-2xl font-semibold">Update Trip </h2>
          <label className=" text-gray-400">Trip Package Title</label>
          <input className="border-2 py-2 rounded-md" type="text" />
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <h2 className="text-start font-bold">
            Trip Duration & Day Activities
          </h2>
          <label className=" text-gray-400">Duration</label>
          <input className="border-2 py-2 rounded-md" type="date" />
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <h2 className="text-start font-bold">
            Trip Duration & Day Activities
          </h2>

          <div className="flex-col flex md:flex-row justify-between ">
            <div className="flex flex-col w-full">
              <label className=" text-gray-400 ">Trip category</label>
              <SelectMenu options={TripCategory} width="100%" />
            </div>
            <div className="flex flex-col md:px-3">
              <label className=" text-gray-400">No. of places</label>
              <input className="border-2 py-2 rounded-md" type="number" />
            </div>
            <div className="flex flex-col md:px-3">
              <label className=" text-gray-400">Maximum guests</label>
              <input className="border-2 py-2 rounded-md" type="number" />
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <MultipleTripForm />
        </div>
        <div className="p-2 grid grid-col-4 flex-col space-y-2">
          <div className="flex justify-between w-full">
            <div className="flex flex-col  w-full">
              <label className=" text-gray-400">Price</label>
              <input
                className="border-2 py-2 rounded-md w-[90%]"
                type="number"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className=" text-gray-400"> Discounted Price</label>
              <input
                className="border-2 py-2 rounded-md w-[90%]"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full">
              <label className=" text-gray-400">Occassion's</label>
              <SelectMenu options={Occassion} width="91%" />
            </div>
            <div className="flex flex-col w-full">
              <label className=" text-gray-400">Travel type</label>
              <SelectMenu options={TravelType} width="91%" />
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <TagsInput heading="Amenities" />
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <label className=" text-gray-400">Brief Description</label>
          <textarea
            rows="5"
            cols="33"
            type="text"
            value=""
            className="border-2 rounded-md resize-none"
            name="Description"
          />
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <Faq />
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <div className=" flex justify-between items-center w-full space-x-3">
            <StatusMenu width="50%" />
            <button className="bg-[#CD4B43] rounded-md w-1/2 p-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTripForm;
