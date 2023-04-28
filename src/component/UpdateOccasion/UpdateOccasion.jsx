import { React, useState } from "react";

const UpdateOccasion = ({
  showUpdateOccasionPop,
  setshowUpdateOccasionPop,
  OccasionDB,
}) => {
  const [updateOccasionTitle, setUpdateOccasionTitle] = useState(
    OccasionDB.heading
  );
  const [updateOccasionDesc, setUpdateOccasionDesc] = useState(OccasionDB.desc);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !showUpdateOccasionPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Update Occasion</h2>
          <button
            className=""
            onClick={() => {
              setshowUpdateOccasionPop(!showUpdateOccasionPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2">Occasion Title</label>
          <input
            className="border-2 p-2"
            type="text"
            value={updateOccasionTitle}
            onChange={(e) => {
              setUpdateOccasionTitle(e.target.value);
            }}
          />
          <label className="text-sm  py-2 font-semibold">Description</label>
          <textarea
            className="resize-none border-2"
            cols="30"
            rows="10"
            value={updateOccasionDesc}
            onChange={(e) => {
              setUpdateOccasionDesc(e.target.value);
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

export default UpdateOccasion;
