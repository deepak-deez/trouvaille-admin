import { React, useState } from "react";
import travelData from "../TravelType/travelDB";

const UpdateTravelType = ({
  showTravelUpdatePop,
  setshowTravelUpdatePop,
  travelData,
}) => {
  const [travelTitle, setTravelTitle] = useState(travelData.title);
  console.log(travelData);
  const [travelDesc, setTravelDesc] = useState(travelData.desc);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !showTravelUpdatePop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Update Travel Type</h2>
          <button
            className=""
            onClick={() => {
              setshowTravelUpdatePop(!showTravelUpdatePop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2" htmlFor="Name">
            Travel Type Title
          </label>
          <input
            className="border-2 p-2"
            type="text"
            value={travelTitle}
            onChange={(e) => {
              setTravelTitle(e.target.value);
            }}
          />
          <label className="text-sm  py-2 font-semibold">Description</label>
          <textarea
            className="resize-none border-2"
            cols="30"
            rows="10"
            value={travelDesc}
            onChange={(e) => {
              setTravelDesc(e.target.value);
            }}
          ></textarea>
        </form>
        <div className="flex item-center justify-center">
          <button className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTravelType;
