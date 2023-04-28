import React from "react";

const DeleteOccasion = ({ deleteOccasionPop, setDeleteOccasionPop }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !deleteOccasionPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center text-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-center py-2">
          <h2 className=" font-bold">Are you sure?</h2>
        </div>
        <h3>You are about to delete a Occasion</h3>
        <div className="flex item-center justify-center p-2 gap-6">
          <button
            className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm"
            onClick={() => {
              setDeleteOccasionPop(!deleteOccasionPop);
            }}
          >
            Cancel
          </button>
          <button className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOccasion;
