import React, { useState } from "react";
import "./style.scss";

const AddNewUser = ({ setAddPop, addPop }) => {
  //   const [removePop, setRemovePop] = useState(false);
  console.log(addPop);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !addPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto bg-white p-4 w-52 ">
        <div className="flex justify-between">
          <h2 className="text-start">Add New User</h2>
          <button
            className=""
            onClick={() => {
              setAddPop(!addPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="">
          <label className="" htmlFor="Name">
            Name
          </label>
          <input className="border-2" type="text" />
          <label htmlFor="email">Email Address</label>
          <input className="border-2" type="email" />
        </form>
        <div className="flex item-center justify-center">
          <button className="bg-[#E85C53] p-2 mt-5 rounded-sm">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
