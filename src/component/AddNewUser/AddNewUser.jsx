import React from "react";
import "./style.scss";

const AddNewUser = ({ setAddPop, addPop }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser   h-[100vh] ${
        !addPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Add New User</h2>
          <button
            className=""
            onClick={() => {
              setAddPop(!addPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2" htmlFor="Name">
            Name
          </label>
          <input className="border-2" type="text" />
          <label className="text-sm py-2 font-light" htmlFor="email">
            Email Address
          </label>
          <input className="border-2" type="email" />
        </form>
        <div className="flex item-center justify-center">
          <button className="bg-[#E85C53] text-white p-2 mt-5 rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
