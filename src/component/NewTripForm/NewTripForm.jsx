import { React, useState } from "react";
import tempIcon from "../../assets/image/trip-list/AddNewTrip-icon.svg";
import MultipleTripForm from "../MultipleTripForm/MultipleTripForm";
import TagsInput from "../TagsInput/TagsInput";
import SelectMenu from "../SelectMenu/SelectMenu";
import Faq from "../Faq/Faq";
import StatusMenu from "../StatusMenu/StatusMenu";
import {
  Occassion,
  TripCategory,
  TravelType,
  Status,
} from "./tripFormSelect.jsx";

const NewTripForm = () => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [noOfPlace, setNoOfPlace] = useState("");
  const [maxGuest, setMaxGuest] = useState("");
  const [tripCatValue, setTripCatValue] = useState([]);
  const [occassionValue, setOccassionValue] = useState([]);
  const [travelTypeValue, setTravelTypeValue] = useState([]);
  const [faqFields, setFaqFields] = useState([
    {
      Question: "",
      Name: "",
      Answer: "",
    },
  ]);
  const [inputFields, setInputFields] = useState([
    {
      Title: "",
      Name: "",
      Description: "",
    },
  ]);


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
          <input className="border-2 py-2 rounded-md" type="text" />
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <h2 className="text-start font-bold">
            Trip Duration & Day Activities
          </h2>
          <label className=" text-gray-400">Duration</label>
          {/* <input className="border-2 py-2 rounded-md" type="date" /> */}
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <div className="flex-col flex md:flex-row justify-between ">
            <div className="flex flex-col w-full">
              <label className=" text-gray-400 ">Trip category</label>
              <SelectMenu
                options={TripCategory}
                value={tripCatValue}
                width="100%"
                setvalue={setTripCatValue}
              />
            </div>
            <div className="flex flex-col md:px-3">
              <label className=" text-gray-400">No. of places</label>
              <input
                className="border-2 py-2 rounded-md"
                type="number"
                value={noOfPlace}
                onChange={(e) => {
                  setNoOfPlace(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col md:px-3">
              <label className=" text-gray-400">Maximum guests</label>
              <input
                className="border-2 py-2 rounded-md"
                type="number"
                value={maxGuest}
                onChange={(e) => {
                  setMaxGuest(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col space-y-2">
          <MultipleTripForm
            inputFields={inputFields}
            setInputFields={setInputFields}
          />
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
              <SelectMenu
                options={Occassion}
                width="91%"
                value={occassionValue}
                setvalue={setOccassionValue}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className=" text-gray-400">Travel type</label>
              <StatusMenu
                width="91%"
                options={TravelType}
                value={travelTypeValue}
                setvalue={setTravelTypeValue}
              />
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
            className="border-2 rounded-md resize-none"
            name="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <Faq faqFields={faqFields} setFaqFields={setFaqFields} />
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <div className=" flex justify-between items-center w-full space-x-3">
            <StatusMenu
              width="100%"
              options={Status}
              value={status}
              setvalue={setStatus}
            />
            <button className="bg-[#CD4B43] rounded-md w-1/2 p-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTripForm;
