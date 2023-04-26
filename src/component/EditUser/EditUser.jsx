import React, { useState } from "react";

const EditUser = ({ editPop, setEditPop, data }) => {
  const [name, setName] = useState(data.userName);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center items-center addUser  h-[100vh] ${
        !editPop && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center m-auto md:w-[28%] bg-white p-4 ">
        <div className="flex justify-between py-2">
          <h2 className="text-start font-bold">Update User Details</h2>
          <button
            className=""
            onClick={() => {
              setEditPop(!editPop);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="flex flex-col ">
          <label className="text-sm font-light py-2" htmlFor="Name">
            Name
          </label>
          <input
            className="border-2 p-2"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-sm py-2 font-light" htmlFor="email">
            Email Address
          </label>
          <input
            className="border-2 p-2"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-sm py-2 font-light" htmlFor="email">
            Phone Number
          </label>
          <input
            className="border-2 p-2"
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
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

export default EditUser;
